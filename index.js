// const myImage = document.querySelector('.my-image');

const fetch = require("node-fetch");
const authToken = "bearer 7zF8BOnG4G7RzWhxfQxo2YjP7B-O0myhv7uUtPX8DL9gNqXvZvY.YfjdXqHQODdWf11OQQl6WPmRbeerKXG6Jwh0SMpOUsuVFMliRcw2GeifUQAwfGCdOu.Qp1F9-QFC";
const getSurveyIdURL = 'https://api.surveymonkey.com/v3/surveys'
const getSurveyDetailsURL = 'https://api.surveymonkey.com/v3/surveys/272379092/details'
const getSurveyResponsesURL = 'https://api.surveymonkey.com/v3/surveys/272379092/responses/bulk'

// call '/surveys' endpoint with only Auth Token to receive the ID's of the surveys associated with an account
function getSurveyId() {
    let response;
    response = fetch(getSurveyIdURL, {
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

// call '/surveys/{id}/details' with Auth Token and the survey Id in the URL to receive survey setup details
function getSurveyDetails() {
    let response;
    response = fetch(getSurveyDetailsURL, {
        method: 'GET',
        headers: { 'Authorization': authToken }
    })
        .then(res => res.json());
    console.log(response);
    response.then(function (result) {
        console.log(result) // survey response details
        // info on questions, answer options, survey types, etc are embedded in an array in the 'Pages' response field
    })
        .catch(error => console.log(error));
}

// call '/surveys/{id}/responses/bulk' with Auth Token and survey ID to receive survey response details
function getSurveyResponse() {
    let response;
    response = fetch(getSurveyResponsesURL, {
        method: 'GET',
        headers: { 'Authorization': authToken }
    })
        .then(res => res.json());
    console.log(response);
    response.then(function (result) {
        console.log(result) // survey response details
        // questions and answer details, text, etc. are embedded in an array in the 'Pages' response field
        // for questions with button selections pages[0].questions[0].answers[0].choice_id
        // for questions requiring text response: pages[0].questions[0].answers[0].text
    })
        .catch(error => console.log(error));
}

getSurveyId();
getSurveyDetails();
getSurveyResponse();

    // potentially useful code
    // .then(res => {
    //     const objectURL = URL.createObjectURL(res);
    //     myImage.src = objectURL;
    // });


