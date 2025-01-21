// QUSTION1 1:
let a = 10;

document.write(`The value of a is: ${a}<br>`);
document.write(`--------------------------------<br>`);

document.write(`The value of ++a is: ${++a}<br>`);
document.write(`Now the value of a is: ${a}<br><br>`);

document.write(`The value of a++ is: ${a++}<br>`);
document.write(`Now the value of a is: ${a}<br><br>`);

document.write(`The value of --a is: ${--a}<br>`);
document.write(`Now the value of a is: ${a}<br><br>`);

document.write(`The value of a-- is: ${a--}<br>`);
document.write(`Now the value of a is: ${a}<br> <br>`);


// QUESTION 2 :
var c = 2, b = 1;
var result = --c - --b + ++b + b--;

document.write(`c is: ${c}<br>`);
document.write(`b is: ${b}<br>`);
document.write(`result is: ${result}<br>`);


// QUESTION 3:
let userName = prompt("Enter your name:");
document.write(`Hello, ${userName}! Welcome to our website.`);


// QUESTION 4:
let number = prompt("Enter a number for the multiplication table (default is 5):");
if (!number) number = 5; 

document.write(`Multiplication Table of ${number}:<br>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i}<br>`);
}

// QUESTION 5:

let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

// Step b: Total marks for each subject
const totalMarksPerSubject = 100;

// Step c: Take obtained marks for the first subject
let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1} (out of ${totalMarksPerSubject}):`));

// Step d: Take obtained marks for the remaining two subjects
let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2} (out of ${totalMarksPerSubject}):`));
let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3} (out of ${totalMarksPerSubject}):`));

// Step e: Calculate total marks and percentage
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalMaximumMarks = totalMarksPerSubject * 3; // 3 subjects
let percentage = (totalObtainedMarks / totalMaximumMarks) * 100;

document.write(`
    <table>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${totalMarksPerSubject}</td>
            <td>${obtainedMarks1}</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${totalMarksPerSubject}</td>
            <td>${obtainedMarks2}</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${totalMarksPerSubject}</td>
            <td>${obtainedMarks3}</td>
        </tr>
        <tr>
            <th>Total</th>
            <th>${totalMaximumMarks}</th>
            <th>${totalObtainedMarks}</th>
        </tr>
        <tr>
            <th colspan="2">Percentage</th>
            <th>${percentage.toFixed(2)}%</th>
        </tr>
    </table>
`);
