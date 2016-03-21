//%%*****************************************************************************%%
//%                                                                               %
//%                                                                               %
//%                               LEAVE ME HERE                                   %
//%                                                                               %
//%                                                                               %
//%              _____ ______   ________                   _______                %  
//%             |\   _ \  _   \|\   __  \                 /  ___  \               %
//%             \ \  \\\__\ \  \ \  \|\  \  ____________ /__/|_/  /|              %
//%              \ \  \\|__| \  \ \   _  _\|\____________\__|//  / /              %
//%               \ \  \    \ \  \ \  \\  \\|____________|   /  /_/__             %
//%                \ \__\    \ \__\ \__\\ _\                |\________\           %
//%                 \|__|     \|__|\|__|\|__|                \|_______|           %
//%                                                                               %
//%                                                                               %
//%%*****************************************************************************%%
//**************************************************
// These are the questions and answers for the game.
// This file should be included AFTER the utility.js
// file, which is where the QA object is defined.
//**************************************************

// Define the title of the game.
var Title = "LiTH - THFRXX QUIZ GAME";

// (Starting Question Value) How much more each question is worth than the previous.
// e.g. if the first question is 100, the next is 200 then 300 then 400...
var SQV = 100;

// Histoire
var cat2 = new Array(
    new qAndA(SQV*1, "Question1.", "Answer1"),
    new qAndA(SQV*2, "Question2.", "Answer2"),
    new qAndA(SQV*3, "Question3.", "Answer3"),
    new qAndA(SQV*4, "Question4.", "Answer4"),
    new qAndA(SQV*5, "Question5.", "Answer5")


);

// QKD
var cat2 = new Array(
    new qAndA(SQV*1, "Question1.", "Answer1"),
    new qAndA(SQV*2, "Question2.", "Answer2"),
    new qAndA(SQV*3, "Question3.", "Answer3"),
    new qAndA(SQV*4, "Question4.", "Answer4"),
    new qAndA(SQV*5, "Question5.", "Answer5")

);

// Mathematique
var cat3 = new Array(
    new qAndA(SQV*1, "Question1.", "Answer1"),
    new qAndA(SQV*2, "Question2.", "Answer2"),
    new qAndA(SQV*3, "Question3.", "Answer3"),
    new qAndA(SQV*4, "Question4.", "Answer4"),
    new qAndA(SQV*5, "Question5.", "Answer5")

);

// Physique
var cat4 = new Array(
    new qAndA(SQV*1, "Question1.", "Answer1"),
    new qAndA(SQV*2, "Question2.", "Answer2"),
    new qAndA(SQV*3, "Question3.", "Answer3"),
    new qAndA(SQV*4, "Question4.", "Answer4"),
    new qAndA(SQV*5, "Question5.", "Answer5")

);
// Random
var cat5 = new Array(
    new qAndA(SQV*1, "Question1.", "Answer1"),
    new qAndA(SQV*2, "Question2.", "Answer2"),
    new qAndA(SQV*3, "Question3.", "Answer3"),
    new qAndA(SQV*4, "Question4.", "Answer4"),
    new qAndA(SQV*5, "Question5.", "Answer5")
);
// Blob
var cat6 = new Array(
    new qAndA(SQV*1, "Question1.", "Answer1"),
    new qAndA(SQV*2, "Question2.", "Answer2"),
    new qAndA(SQV*3, "Question3.", "Answer3"),
    new qAndA(SQV*4, "Question4.", "Answer4"),
    new qAndA(SQV*5, "Question5.", "Answer5")
);

// Define an array that contains the arrays of questions and answers.
// Don't change this unless you need to add more categories.
var QuestionsAndAnswers = new Array(cat1, cat2, cat3, cat4, cat5, cat6);  

// Define the category titles.
var Titles = new Array("Category 1", 
                        "Category 2",
                        "Category 3",
                        "Category 4",
                        "Category 5",
                        "Category 6");

var FinalCategory = "SUBJECT";
var FinalJeopardyA = "Question";
var FinalJeopardyQ = "ANSWER?";

// Define the amount of time given to answer each question.
var TimePerQuestion = 20;

// Define the amount of time given to answer the Final Question.
var TimeForFinalQuestion = 40;

// This will control how many categories and questions 
// per category are displayed on the main page.
var NumCategories = 6;				// How many categories to show.
var NumQuestionsPerCategory = 5;	// How many rows to show.

var DailyDouble = true; 	        // If false the DailyDouble question won't be included.
var FinalAnswer = true;	            // If false the "Final Question" button won't be displayed.
