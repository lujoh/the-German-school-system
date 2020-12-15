/*Function that can be used to validate numeric input
This function will be called inside other functions*/
function validateInput(minInput, maxInput, inputId) {
    var userInput = document.getElementById(inputId).value;
    if (isNaN(userInput) || userInput < minInput || userInput > maxInput) {
        alert("Please enter a number between " + minInput + " and " + maxInput);
        userInput = 0;
    }
    return parseInt(userInput);
}

/*This function checks the entered grades on the Primary page
It produces a text displaying the result*/
function checkGrades() {
    var grades = [];
    var g; //variable to iterate through grades
    grades.push(validateInput(1, 6, "grademath"));
    grades.push(validateInput(1, 6, "gradegerman"));
    grades.push(validateInput(1, 6, "gradehsu"));
    var resultText = "";
    var gradeAverage = 0;
    var school;
    
    //checking for invalid input
    if (grades[0] == 0 || grades[1] == 0 || grades[2] == 0) {
        resultText = "Waiting for valid numbers between 1 and 6.";
        document.getElementById("gradesResult").innerHTML = resultText;
        return;
    }
    //adding the grades
    for (g of grades) {
        gradeAverage += g;
    }
    //calculating the average and rounding the result
    gradeAverage = gradeAverage / grades.length;
    gradeAverage = gradeAverage.toFixed(2);
    
    //check which secondary school based on grade average
    if (gradeAverage <= 2.33) {
        school = "Gymnasium";
    } else if (gradeAverage <= 2.66) {
        school = "Realschule";
    } else {
        school = "Hauptschule";
    }
    //comparing the grades
    resultText = "With an average grade of " + gradeAverage + " this student is qualified to attend the " + school;
    document.getElementById("gradesResult").innerHTML = resultText;
}
/* This function interprets input from the User and 
returns the array with the subjects a student will take at a certain grade level
for the next function to use*/
function choseClasses() {
    var mainClasses = ["German", "Math", "1st Foreign Language (typically English)"
                     , "Sports", "Religion (for religious students)", 
                     "Ethics (for non-religious students)", "Art", "Music"];
    //add mainClasses to year specific classes
    var gradeFive = ["Biology", "Geography"];
    var gradeSix = ["Biology", "History", "2nd Foreign Language (typically French or Latin)"];
    var gradeSeven = ["Physics", "History", "Geography", "2nd Foreign Language (typically French or Latin)"];
    //starting gradeEight add previous grade to current
    var gradeEight = ["Chemistry (for students in the science branch)", 
                      "3rd Foreign Language (for students in the language branch)", "Biology", "Social Studies", "Economics and Law"];
    var gradeNineTen = ["Informatics"];
    var gradeElevenTwelve = ["At this point students have to chose which of the following classes to continue in",
                            " <br>Two new classes are the project Seminar and the Academic Seminar", "<br>"];
    
    gradeFive = mainClasses.concat(gradeFive);
    gradeSix = mainClasses.concat(gradeSix);
    gradeSeven = mainClasses.concat(gradeSeven);
    gradeEight = gradeSeven.concat(gradeEight);
    gradeNineTen = gradeEight.concat(gradeNineTen);
    gradeElevenTwelve = gradeElevenTwelve.concat(gradeNineTen);
    
    var year = validateInput(5, 12, "gradeLevel");
    
    
    switch (year) {
    case 5:
        return gradeFive;
    case 6:
        return gradeSix;
    case 7:
        return gradeSeven;
    case 8:
        return gradeEight;
    case 9:
    case 10:
        return gradeNineTen;
    case 11:
    case 12:
        return gradeElevenTwelve;
    default:
        return false;
            
    }
    
}

/*This function takes the array from the previous function and displays the results*/

function displayClasses() {
    var classes = choseClasses();
    var classtext = "";
    if (!classes) {
        document.getElementById("subjectResult").innerHTML = classtext;
        return;
    }
    classtext = classes.join(", ") + ".";
    document.getElementById("subjectResult").innerHTML = classtext;
    
}

/*Function to get the time in German time and add see if students would be in school.*/
function comparetime() {
    var now = new Date();
    var hours = now.getUTCHours() + 2; //Convert time to German time
    var minutes = now.getUTCMinutes();
    var totaltime = hours * 60 + minutes; //Add hours and minutes for easier comparsion
    var weekday = now.getUTCDay;

    var schoolstart = 8 * 60; //8am
    var schoolend1 = 11 * 60 + 30; //11:30am
    var schoolend2 = 13 * 60; //1pm
    var schoolend3 = 15 * 60 + 15; //3.15pm

    var timetext = "In Germany it is " + hours + ":" + minutes;
    //check if it's the weekend
    if (weekday == 6 || weekday == 0) {
        timetext += " and German students are enjoying their weekend.";
    } else {
        //compare times to German school times
        if (totaltime < schoolstart) {
            timetext += " and German school hasn't started yet.";
        } else if (totaltime <= schoolend1) {
            timetext += " and German students are probably in school.";
        } else if (totaltime <= schoolend2) {
            timetext += " and the youngest German students may have finished school for the day, but older students will still be in school";
        } else if (totaltime <= schoolend3) {
            timetext += " and  most German students will have finished school for the day, but some older students will still be in school this late on some days.";
        } else {
            timetext += " and German students at typical schools will have finished school for the day.";
        }
    }
    //print result
    document.getElementById("timeresult").innerHTML = timetext;
}

/*Function tochange the CSS for the navigation menu on phones*/
function toggleNav() {
    var n = document.getElementById("Navigation");
    if (n.className === "nav") {
        n.className += " open";
    } else {
        n.className = "nav";
    }
}