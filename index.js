// Due to time constraints in developing this in time for my interview, I'm using hardcoded URL's instead of
// using string interpolation to form the URL. If I were hypothetically going to push this code to production, I would 
// make this script scalable

let surveyId;
const fetch = require("node-fetch");
const authToken = "bearer 7zF8BOnG4G7RzWhxfQxo2YjP7B-O0myhv7uUtPX8DL9gNqXvZvY.YfjdXqHQODdWf11OQQl6WPmRbeerKXG6Jwh0SMpOUsuVFMliRcw2GeifUQAwfGCdOu.Qp1F9-QFC";
const getSurveyIdURL = 'https://api.surveymonkey.com/v3/surveys'
let getSurveyDetailsURL = 'https://api.surveymonkey.com/v3/surveys/272379092/details';
const getSurveyResponsesURL = 'https://api.surveymonkey.com/v3/surveys/272379092/responses/bulk'


// call '/surveys' endpoint with only Auth Token to receive the ID's of the surveys associated with an account
function getSurveyId() {
    let response;
    response = fetch(getSurveyIdURL, {
        method: 'GET',
        headers: { 'Authorization': authToken }
    })
        .then(res => res.json());
    response.then(function (result) {
        surveyId = result.data[0].id;
        console.log("surveyId:", surveyId) // survey response URL with fetched survey ID 
    })
        .catch(error => console.log(error));
    return surveyId;
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
        console.log("Survey Details:", result) // survey response details
        // info on questions, answer options, survey types, etc are embedded in an array in the 'Pages' result field
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
    response.then(function (result) {
        let questions = result.data[0].pages[0].questions;
        console.log("Survey Response:", questions[0].answers) // survey response details
        // questions and answer details, text, etc. are embedded in an array in the 'Pages' result field
        for (let i = 0; i < questions.length; i++) {
            let question = questions[i];
            let answer = question.answers[0];
            console.log("********************************** answers:", answer);
        }
    })
        .catch(error => console.log(error));
}

// *** Use this endpoint to find the questions based on their ID's found in the results object above ***
// /survey/{id}/pages/{id}/questions/{id}

getSurveyId();
getSurveyDetails();
getSurveyResponse();


