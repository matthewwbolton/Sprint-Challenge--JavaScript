# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

    The biggest difference between .map and .forEach is that the former will execute once over an array and return a new array, while the latter will iterate over an array and return undefined.

2. What is the difference between a function and a method?

    A function is a piece of code that is a set of instructions. It receives data and can return a value. A function can stand alone by itself within a program. A method, on the other hand, is a function that exists on an object. A method is a function that is passed as a value in a key:value pairing on an object.

3. What is closure?

    Closure refers to the ability of functions to reach outward from their function scope for context. Variables that are declared outside of the function scope can be referenced. This paradigm remains true no matter how deep you nest your functions. It is important to note that functions can reach outward for context but never inwards.

4. Describe the four rules of the 'this' keyword.

    4 Rule of the ‘this’ keyword:

        1.	Implicit Binding: ‘this’ refers to the object to the left of the dot at the time a method is invoked. This rule works only on objects with methods.

        2.	Explicit Binding: ‘this’ is bound to the object providing context to .call/.apply/.bind. The first argument passed in to each of these properties will be the context of the ‘this’ keyword.

        3.	New Binding: when a constructor function is invoked with the ‘new’ keyword, the ‘this’ keyword is bound to the new object being constructed.

        4.	Window Binding: when in the global context, the context of ‘this’ will be the window object. In a browser this is called the window and in node this refers to the console. “Strict mode” will prevent window binding and will return undefined when ‘this’ is used in the global scope.


5. Why do we need super() in an extended class?

    Super() is needed when extending a parent class to a subclass or child class because it is used to call the constructor of the parent class allowing for access to the properties and methods of the parent. Super() must be used before the ‘this’ keyword can be used in the child class.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
