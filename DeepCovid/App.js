import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/resultsShowScreen";
import MapScreen from "./src/screens/mapScreen";

import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
    {

        Search: {screen: SearchScreen, path: 'search/'},
        ResultsShow: {screen: ResultsShowScreen, path: 'results/:country'},
        Home: {screen: HomeScreen, path: 'home'},
        Map: {screen: MapScreen, path: 'map'},
    },
    {
        initialRouteName: "Home",
        defaultNativationOptions: {
            title: "Business Search",
        },
    }
);

const App = createAppContainer(navigator)
const prefix = 'deepcovid://deepcovid/';
const MainApp = () => <App uriPrefix={prefix} />;
export default MainApp;

