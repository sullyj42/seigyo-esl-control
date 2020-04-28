'use strict';

const {dialogflow, Image, Suggestions} = require('actions-on-google');
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const API_KEY = '';

const app = dialogflow({debug: true});
  app.intent('action_confirm', (conv, {youtube}) => {
      conv.ask('Would you like me to open ' + youtube + '?');
    });

    app.intent('action_confirm - youtube yes - search', (conv, {any}) => {
      var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + encodeURIComponent(any)+ "&type=video&order=viewCount&videoCategoryId=10&key=" + API_KEY;
      const axios = require('axios');
      return axios.get(url)
          .then(response => {
            var output = JSON.stringify(response.data);
            var song_fields = response.data.items[1];
            return song_fields;
        }).then(output => {
                var song_title = output.snippet.title;
            song_title = song_title.replace(/&amp;/g, '&');
            song_title = song_title.replace(/&quot;/g, '\"');
            var song_link = JSON.stringify(output.id.videoId);
            var song_thumbnail = output.snippet.thumbnails.high.url;
            conv.ask(`Fetching your request...`)
            conv.ask(new Image({
                url: song_thumbnail,
                alt: 'Song thumbnail'
              }))
            conv.close(`The most popular song is: ` + song_title + `. The link to this song is: https://www.youtube.com/watch?v=` + song_link.slice(1, -1) + `. See you next time.`);
        })
    });
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
