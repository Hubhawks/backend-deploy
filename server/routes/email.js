const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

const path = require('path');
const express = require('express');
 
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')
app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath)); 
 
app.post('/BookReviews',(req,res)=>{
	
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');

	let mailOptions = {
		from: `${req.body.email}`,
		to: 'simran@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong><br>Choose the preferred platform</strong><br>${req.body.platform}<br><strong>How many reviews would you like to have?</strong><br>${req.body.reviews}<strong><br>Drop your amazon book link</strong><br>${req.body.link}<br>
		<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
	
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/editing',async (req,res)=>{
	
	// const response =  await fetch("http://localhost:5000/users", {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(data),
	// 	}).then((res) => res.json()).then(async (res) => {
	// 		const resData = await res;
	// 		console.log(resData);
	// 		if (resData.status === "success") {
	// 			alert("Message Sent");
	// 		} else if (resData.status === "fail") {
	// 			alert("Message failed to send");
	// 		}
	// 	})
	// 	console.log(JSON.stringify(data));
		
	  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'rajiv@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What type of editing are you looking for?</strong><br> ${req.body.EditingType}<br> <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>How many words are there in your book?<strong><br>${req.body.Wordsbook}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}</strong><br>${req.body.Timeline}<strong>What is your approximate advertising budget?</strong><br>`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/coverdesign',async(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simran@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: ` <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<strong>What visual representation suits your story? (Choose any 3)</strong><br>${req.body.story}<strong><br>What is the “Title of the Story”?</strong><br> ${req.body.title}<br><strong> What is the summary of the Story?</strong><br>${req.body.Summary}<br><strong> What is the expected timeline?</strong><br>${req.body.timeline}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/translation',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simran@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong><br>What language is  your content in?</strong><br>${req.body.content}<strong><br>What language do you want to get the translation in?</strong><br>${req.body.GetLanguage[0]}<br/>${req.body.GetLanguage[1]}<br/>${req.body.GetLanguage[2]}<br/>${req.body.GetLanguage[3]}<br/>${req.body.GetLanguage[4]}<br/>${req.body.GetLanguage[5]}<br/>${req.body.GetLanguage[6]}<strong><br>What is the genre of your book?${req.body.genre[0]}<br/>${req.body.genre[1]}<br/>${req.body.genre[2]}${req.body.genre[3]}<br/>${req.body.genre[4]}<br/>${req.body.genre[5]}<br/>${req.body.genre[6]}<br/>${req.body.genre[7]}<br/>${req.body.genre[8]}<br/>${req.body.genre[9]}<br/>${req.body.genre[10]}<br/>${req.body.genre[11]}<br/>${req.body.genre[12]}<br/>${req.body.genre[13]}<br><strong><br>What is the word count of your book?</strong><br>${req.body.count}<br> <strong><br>Additional comments (Optional)</strong><br>${req.body.Comments}<strong><br>What kind of translation do you want?</strong><br>${req.body.translation} `,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/ghostwriting',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simrantandon2801@gmail.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>What is the author’s background?</strong><br>${req.body.authorbackground} <strong>Which three words describe your book?</strong><br>  ${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<strong>Get a Quote</strong><br>${req.body.Quote}<strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/amazonAds',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simran@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong><br>Which three words describe your book?</strong><br>${req.body.words1}<br>${req.body.words2}<br>${req.body.words3}<br>${req.body.words4}<br>${req.body.words5}<br>${req.body.words6}<br>${req.body.words7}<br>${req.body.words8}<br>${req.body.words9}<br>${req.body.words10}<br>${req.body.words11}<br>${req.body.words12}<br>${req.body.words13}<br>${req.body.words14}<br>${req.body.words15}
		<br><strong>Do you want your own dashboard?</strong><br>${req.body.dashboard}<strong><br>What are you looking for ?</strong><br>${req.body.look}<strong><br>What is your approximate advertising budget?</strong><br>${req.body.budget}<strong><br>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/booktrailer',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simran@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong><br>Describe your book’s storyline?</strong><br>${req.body.storyline}<strong><br>What kind of trailer do you want?</strong><br>${req.body.trailor}<strong><br>What is the expected timeline?</strong><br>${req.body.timeline}<br><strong>Additional comments (Optional)</strong><br>${req.body.Comments}`,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
app.post('/bookstore',(req,res)=>{
 
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajivkhanduja2@gmail.com',
          pass: 'ibmzlujuhslqovsb'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');
	
	let mailOptions = {
		from: `${req.body.weather}`,
		to: 'simran@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html: `<strong>Which is your preferred book store?</strong><br>${req.body.bookStore}<strong> <br> Who is the publisher of your book?</strong><br>${req.body.publisher}<br> <strong>How many stores would you like to get your book placed at?</strong><br>${req.body.bookplaced}<br> <strong> What kind of promos are you looking for?<br> </strong><br>${req.body.promos}<br> <strong>Get a Quote</strong><br>${req.body.Quote} 
		<br> <strong>Additional comments (Optional)</strong><br>${req.body.Comments} `,
	  };
 
    
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
      });
});
// listen to the port
app.listen(5000, () => {
    console.log('server start on port 3030');
  });

module.exports = router;