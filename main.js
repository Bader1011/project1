//  I need an array that included the words as a wordslist

var wordList = ["desk", "books", "lab", "board"];
var newArr = [];
var textBox = document.getElementById("textBox");
var index = [];

var result = document.getElementById("result");
var message = document.getElementById("gussingLetter1");

var randomWords = wordList[Math.floor(Math.random() * wordList.length)];
console.log(" the random word is", randomWords);
randomWords = randomWords.split("");

for (let i = 0; i < randomWords.length; i++) {
  var li = document.createElement("li");
  li.setAttribute("id", `guessing${i}`);
  li.setAttribute(
    "style",
    "border-bottom:solid; width: 20px; height: 25px; background-color: gray;"
  );
  result.appendChild(li);
}

var gussingLetter1 = "";

function printLetter() {
  message.value = "";
  var inputTextBox = document.getElementById("inputTextBox").value;

  console.log("user input", inputTextBox);

  for (var i = 0; i < randomWords.length; i++) {
    if (inputTextBox == randomWords[i]) {
      index.push(i);
    }
  }

  for (var i = 0; i < index.length; i++) {
    if (index.length > 0) {
      newArr.push(randomWords[index[i]]);
      var guessing = document.getElementById(`guessing${index[i]}`);
      guessing.style.backgroundColor = "green";
      guessing.style.color = "black";
      guessing.innerHTML = newArr[i];
    } else {
      console.log("wrong letter");
      message.value = `${inputTextBox} wrong letter`;
    }
  }
  //console.log(`index ${index} \n\n\n newArr ${newArr}`)
  index = [];
  newArr = [];
  document.getElementById("inputTextBox").value = "";
}


