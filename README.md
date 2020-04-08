# ESL Google Assistant Controller (Seigyo)

## Who we are

Jennifer Campbell
Jeremiah Sullivan
Elise DeCarli (Past Team Member)

### Background
Hi! I (Jenny) am a fairly new engineering student investigating optics and electromagnetism at Boston University. Until my start at BU, I spent seven years studying linguistics and translation, so transitioning to STEM was a huge change for me. There have been a lot of things to catch up on, things I've had to put on hold learning due to time and financial constraints, and other mental struggles that come with this new career path. Still, I love what I'm doing, and don't regret a day of this new experience.

One of the things that has been lacking from my program is the opportunity to learn programming. Spending all of your time catching up doing math and physics problems takes away time from building code that goes into data collection, experimentation, and other modern approaches to science. After spending last semester painfully pushing through two coding courses, I realized I needed a calmer environment where I could learn in my own way: picking up computer languages such that it serves my interests and career goals. My professor offered me the chance to do so over winter break through creating my own programming project, which brings me to this job now.

## The Project
Originally, I intended to build a simple rotating polarizer using a a Raspberry Pi, but given the time it takes for servo motors to ship over, I'm going to use what I have on hand.

<p align="center">The current supplies I have are:</p>

- Raspberry Pi (2, I think, not entirely sure)
- Google Nest Mini (Second Gen)
- My ASUS Laptop
- A bunch of computer mice
- My partner's keyboard (hoping to borrow one at school rather than buying an extra one that I probably won't need that often)
- Lots of Nintendo equipment (Switch, 3DS, etc.)
- Xbox 360
- Wireless headphones
- My Android phone
- Breadboards, resistors, LEDs, etc. for circuitry

I'm sure within this assortment of tools there is something cool I can make that will help me learn.

## Meaning of 'Seigyo'

Seigyo (制御) is the Japanese word for '[remote] control'. This word was chosen to reflect the control that the assistant should give to the user, as well as the hope that it unifies non-native speakers that feel hesitant to enjoy the ease that technology provides. When one utilizes Seigyo they should feel understood, not frustrated. 

## Project Goal
My personal goal is to just become more confortable with programming. I feel like my classes threw me into simply providing answers without actually sitting down and understanding the thoughts behind the code. By the end of this, I just want to be able to actually explain what my project does from the inside out.
          
(Jan. 20 update) I am now focused on building an Android app that allows users to create new commands for Google Assistant. After playing with my Google Nest Mini, I learned that the device is very limited in the actions it can take. I am hoping to improve its understanding of commands through a smart controller that allows you to input verbal directions and route the command to opening a separate action.

(Jan. 31 update) After realizing how limited my understanding of Java and Android Studio is, I decided to shift away from making the app, as I got stuck on figuring out how to integrate Wifi usability. This transition lead to the current and final draft of Seigyo: the English as a second language (ESL) voice assistant.

## So, what is it?
This took a long time to figure out, but in the final moments, I realized what was most important to me was to make something that would be useful to someone in my life. That person ended up being my mom.

This controller is trained via Google Actions and Dialogflow to be taught "Broken English". My mom moved to the US in 1992, but still has maintained her native accent until now, which has made conversations difficult for her sometimes. This has also made it hard for her to engage with the modern world's smart technology. I've spent my whole life watching ESL speakers struggle to work with devices, particularly vocally-triggered ones, which seems highly unfair as companies lean into these new technologies.

I believe that if a machine can be taught proper English, it can be taught improperly as well. I am currently training Google Assistant to learn my mom's phonetic pronunciations, grammar arrangement, and other tics when speaking. Hopefully this can develop to help non-native speakers in general, as well as inspire other languages to also adapt their Alexas and Siris to learn second language understanding as well.

## Seigyo's Components

- Google Actions Console: Hosts the project and deploys our test model for Seigyo
- Dialogflow: Manages our commands taught to Seigyo. Learns commands types phonetically (beta version supports Filipino-English)
- Firebase: Powers the inline editor for Dialogflow and manages Cloud functions
- External applications: Facebook, Youtube, Netflix, Spotify (tentative, still a work in progress)

## How it works (for the user)

Upon asking 'Hey Google, talk to my control app', Seigyo will activate and await for a command towards a specific external application. Seigyo will confirm whether or not it guessed the correct app, then upon confirmation will open the app for the user.

## Challenges

The main challenge is the limitation of using Dialogflow agents. Dialogflow does not support actually running external applications all that smoothly, and for the sake of time we were limited to the front half of the controller and not the in depth commands we hope to expand on in order to show the awareness Seigyo has for understanding varying grammar and phonemes. Moving forward, we will be working on how to actually integrate these without the weekend time crunch.

## Updates
1/6/2020: Repo is made, set out available tools, researching potential projects<br>
1/7/2020: Formed list of potential projects, currently researching deep learning in video games<br>
1/8/2020: Ran trials of teaching computer to play Super Mario World, currently researching smart home controller<br>
1/12/2020: Decided to make a Google Assistant controller in Android Studio<br>
1/13/2020: Began building basic apps to familiarize self with AS, working on learning about scrollable tab layout<br>
1/14/2020: Finished scrollable tabs, now working on creating settings fragment for app<br>
1/19/2020: Have working system for settings, working on WiFi connectivity<br>
1/31/2020: Began setting up Seigyo's commands through Google Actions; left up code related to original up for notoriety's sake<br>
2/1/2020: Finished arrangement of Seigyo taking in commands to open specific apps; working on integrating actual opening of apps<br>
4/1/2020: Project has been forked for use in the EC500 Final Project
