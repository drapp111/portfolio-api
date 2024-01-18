//Imports
import express from 'express';
import 'dotenv/config'
import {createTransporter, sendContactEmail} from './mailer.js';
import {retrieveReferenceOptions, logContactEmail, retrieveImages, retrievePageText, retrieveShows, retrieveStaticParams} from './database.js';
import cors from 'cors';

//Constants
const mailer = createTransporter();
const app = express ();
app.use(cors({

}));

app.listen(process.env.PORT, () => {
    console.log("Server Listening on PORT:", process.env.PORT);
  });

app.get("/", (request, response) => {
    const status = {
        "Status": 200
    };

    response.send(status);
 });

 app.post("/mail-contact-form", async (request, response) => {
  await sendContactEmail(request, mailer).then((res) => {
    if(res == 200) {
      logContactEmail(request);
      response.status(200).send();
    } else {
      response.status(400).send(completed.error)
    }
   })
});

 app.get("/retrieve-reference-options", async (request, response) => {
  var options = await retrieveReferenceOptions();
  response.status(200).send({"options" : options});
 })

 app.get("/retrieve-portfolio-images", async (request, response) => {
    var images = await retrieveImages(request);
    response.status(200).send({"images" : images});
 })

 app.get("/retrieve-page-text", async (request, response) => {
    var page_text = await retrievePageText(request);
    response.status(200).send({"page_text" : page_text});
 })

 app.get("/retrieve-shows", async (request, response) => {
    var shows = await retrieveShows();
    response.status(200).send({"shows" : shows});
 })
 
 app.get("/retrieve-static-params", async (request, response) => {
    var static_params = await retrieveStaticParams();
    response.status(200).send({"static_params" : static_params});
 })

 app.get("/kelsey", (request, response) => {
  response.send('<div><div>From the moment I met you, I knew that I was in love with you</div><div>From the time I brought you ice at midnight, I knew that I would marry you</div><div>I am yours</div><div>Forever</div></div>')
 })

export default app;