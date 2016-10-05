var prompt = require('prompt-sync')();

var myQuestions = [
	{	
		text: 'What is our cohort leader\'s name?', answer: 'Eric'
	},
	{
		text: 'Which part of your HTML should contain no content?', answer: 'head'
	},
	{
		text: 'What is the color of your soul?', answer: 'black'
	},
	{	
		text: 'What is the name of the base 16 alphanumeric system we commonly use for colors?', answer: 'hexadecimals'
	},
	{
		text: 'What is our cohort leader\'s favorite side at Cookout?', answer: 'hushpuppies'
	},
	{
		text: 'What does IP stand for?', answer: 'Internet Protocol'
	},
	{
		text: 'What is the bin command to create new files?', answer: 'touch'
	},
	{
		text: 'What sign is used in JavaScript to denote "strictly equals"?', answer: '==='
	},
	{
		text: 'What is the space between HTML elements?', answer: 'margin'
	},
	{
		text: 'What is the UASS?', answer: 'User Agent Style Sheet'
	},
	{
		text: 'What boolean sign is used in JavaScript to denote "not"?', answer: '!'
	},
	{
		text: 'What do functions evaluate to by default?', answer: 'undefined'
	},
	{
		text: 'What image element attribute specifies the location of an image to display?', answer: 'src'
	},
	{
		text: 'What boolean sign is used in JavaScript to denote "or"?', answer: '||'
	},
	{
		text: 'What boolean sign is used in JavaScript to denote "and"?', answer: '&&'
	}];

var myQuestions;
var answer;
var cAnswer = 0;
var totalQ = 0;
var percentC = cAnswer / totalQ

for (var i = 0; i <myQuestions.length; i++) {
	question = myQuestions[i];
	answer = prompt(question.text + ' ');
	totalQ = totalQ + 1;
	if (answer === question.answer) {
		cAnswer = cAnswer + 1;
		console.log('Correct.'); 
	} else {
		prompt('Try not to be such a disappointment this time. ' + question.text + ' ');
		console.log('Correct.');
	} 
var percentC = cAnswer / totalQ * 100;

} console.log('Number of correct answers: ' + cAnswer +'. ' + 'Total questions: ' + totalQ + '. ' + 'Grade: ' + percentC + '%.')







