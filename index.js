// const myImage = document.querySelector('.my-image');
const fetch = require("node-fetch");
const authToken = "bearer 7zF8BOnG4G7RzWhxfQxo2YjP7B-O0myhv7uUtPX8DL9gNqXvZvY.YfjdXqHQODdWf11OQQl6WPmRbeerKXG6Jwh0SMpOUsuVFMliRcw2GeifUQAwfGCdOu.Qp1F9-QFC";
const url = 'https://api.surveymonkey.com/v3/surveys/272379092/details'

function getSurvey() {
    let response;
    response = fetch(url, {
        method: 'GET',
        headers: { 'Authorization': authToken }
    })
        .then(res => res.json());
    console.log(response);
    response.then(function (result) {
        console.log(result) // survey response details
    })
        .catch(error => console.log(error));
}

getSurvey();

    // potentially useful code
    // .then(res => {
    //     const objectURL = URL.createObjectURL(res);
    //     myImage.src = objectURL;
    // });


