import axios from "axios";

export default axios.create({
    baseURL: "https://api.covid19api.com",
});

// To make API call
// -- yelp.get('/search')
