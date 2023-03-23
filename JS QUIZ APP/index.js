// Questions will be asked
const Questions = [{
    id: 0,
    q: "Q.This is the brightest planet in our solar system ?",
    a: [{ text: "Venus", isCorrect: true },
        { text: "Sun", isCorrect: false },
        { text: "Mars", isCorrect: false },
        { text: "Mercury", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Q.Which is the biggest and deepest ocean in the world?",
    a: [{ text: "Indian Ocean", isCorrect: false, isSelected: false },
        { text: "Atlantic Ocean", isCorrect: false },
        { text: "Pacific Ocean", isCorrect: true },
        { text: "Arctic Ocean", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Q.Who was the first woman Chief Minister in India?",
    a: [{ text: "Mamata Banerjee", isCorrect: false, isSelected: false },
        { text: "J. Jayalalithaa", isCorrect: false },
        { text: "Sushma Swaraj", isCorrect: false },
        { text: "Sucheta Kripalani", isCorrect: true }
    ]

},
{
    id: 3,
    q: "Q.Who is popularly known as the “Iron Man” of India?",
    a: [{ text: "Lal Bahadur Shastri", isCorrect: false, isSelected: false },
        { text: "Dr. B.R Ambedkar", isCorrect: false },
        { text: "Mahatma Gandhi", isCorrect: false },
        { text: "Sardar Vallabh Bhai Patel", isCorrect: true }
    ]

},
{
    id: 4,
    q: "Q.What is the ratio of width of our national flag to its length?",
    a: [{ text: "1:2", isCorrect: false },
        { text: "3:4", isCorrect: false },
        { text: "2:3", isCorrect: true },
        { text: "1:4", isCorrect: false }
    ]

}

]

// Set start
var start = true;
var end = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
   
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
 
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
   
    selected = op4.value;
})

document.getElementById("op1").addEventListener("click", function() {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
  });

  document.getElementById("op2").addEventListener("click", function() {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
  });

  document.getElementById("op3").addEventListener("click", function() {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
  });

  document.getElementById("op4").addEventListener("click", function() {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
  });

}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {

    restartBtn.classList.remove("hide");
    prev.classList.remove("hide");

start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

if(id === 4){
    next.classList.add("hide");
    submitBtn.classList.remove("hide");
}

})

const prev = document.getElementsByClassName('prev')[0];
var id = 0;

prev.addEventListener("click", () => {
end = false;
if (id > 0) {
    id--;
    iterate(id);
    console.log(id);
}

if(id==0){
    prev.classList.add("hide");
    submitBtn.classList.add("hide");
    restartBtn.classList.add("hide");
    next.classList.remove("hide");
}
})



const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");

restartBtn.addEventListener("click", restart);
submitBtn.addEventListener("click",submit);

function beginQuiz() {
    iterate(0);
   
 }
 
 function restart() {
    prev.classList.add("hide");
    next.classList.remove("hide");
    submitBtn.classList.add("hide");
    op1.classList.remove("hide");
    op2.classList.remove("hide");
    op3.classList.remove("hide");
    op4.classList.remove("hide");

    restartBtn.classList.add("hide");
    
    beginQuiz();

 }

function submit() {
    prev.classList.add("hide");
    next.classList.add("hide");
    submitBtn.classList.add("hide");
    op1.classList.add("hide");
    op2.classList.add("hide");
    op3.classList.add("hide");
    op4.classList.add("hide");
    
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    question.innerText ="You Have Completed Quiz!"

 }