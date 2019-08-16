// Create a program that will let you create a simple question generator.

    // The program will use both the JavaScript console and the browser. The questions/answers should be displayed in the JavaScript console and answer 'prompt' should be used to accept answer input from the user.

// ### Phase 1: Ask 1 question only then exit
//
// #### Create a Class to represent an individual Question (4 points).
// Your Question class should have 3 properties:
//     * Question Text - This is the actual text of the given question
// * Answers - This should be an array containing the available answers for the question. The number of answers available for a given question is up to the Developer.
// * Correct Answer Index - This integer should be the index of the correct answer in your answer array.
//
//     Your Question Class should have at least 2 methods:
//     * A method to output the question and the available answers.
// // * A method that accepts an integer, and checks if the value matches the ```Correct Answer Index```.



// ""?

//This is the class where the information regarding the questions are.
class questions
{
    constructor(question, answers, correct)
    {
        this.question = question;
        this.answers = [0,1,2];
        this.correct = correct
    }



}
alert("Let's play a game!!!");

function main()
{
    let ask1 = prompt("What was the type of love the lead singer of The Ready Set had with a certain girl?");
    // let q1 = new questions("What was the type of love the lead singer of The Ready Set had with a certain girl", ["A love like woah!", "A love like: 'Woah, Bessy!", "A love like woe!"], "A love like woe!");

    let arrayOfAnswers = ["1.A love like woah!", "2.A love like: 'Woah, Bessy!", "3.A love like woe!"];
    arrayOfAnswers.forEach(function (element) {
        console.log(element)
    });

    console.log
    (`Question1: ${this.question}
    1. ${this.answers[0]}
    2. ${this.answers[1]}
    3. ${this.answers[2]}`
    );


    if (ask1 !== this.correct.length) {
        alert("Wrong! Try again!")
    } else {
        alert("Correct!")
    }
}
 main();





    // console.log(ask1);
    // console.log(this.answers.length);
    //
    // for (let i = 0; i < this.answers.length; i++)
    // {
    //     console.log("The correct answer is " + this.answers[i])
    // }







// while (ask1 !== q1.correct)
// {
//
// }
//
// console.log(this.question);
//
//
//
//     let ask = Math.floor(Math.random() *this.answers.length);

















// alert("Let's play a game!!!");
// var ask1 = prompt("How much wood could a Woodchuck chuck if a Woodchuck could chuck wood?");
// //The main function for the class
//
//
// function main()
// {
//   let prob1 = new questions("How much wood could a Woodchuck chuck if a Woodchuck could chuck wood?",[],(0));
//
//
//   console.log(this.answers)
//
// // if (ask1 === this.answers[5]);
// // {
//
// }
//
// main();
//


// for (let idx in questions)
// // {
// //     let user = questions[idx].answers;
// //     {
// //         console.log(user)
// //     }



// switch (prob1)
// {
//     case 5:
//        console.log("Wrong!");
//   break;
//     case 30:
//        console.log("Wrong!Try again!");
//   break;
//     case 0:
//         console.log("Correct! Good Job!")
// }