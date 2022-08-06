/* //1st program

 
var x = Number(prompt("please enter the first number"))
var y = Number(prompt("please enter the second number"))
if (x > y) {
    console.log("The First number is larger: " + x);
} else if (x == y) {
    console.log("The two numbers are equal");

} else {

    console.log("The Second number is larger: " + y);
}



//2nd program

var m = Number(prompt("please enter the first integer"))
var n = Number(prompt("please enter the second integer"))
if (m !== n) {
    sum = m+n
    console.log("The sum is: "+ sum);
}
else {
    sum = (m+n)*3
    console.log("The Two values are similar, Then we'll display triple their sum" + ((m+n)*3));
}



//3rd program

var Name = prompt("please enter the the name you want to be repeated: ")
var n = Number(prompt("please enter the number of repeats: "))

for ( var i = 1; i < n+1; i++) {
    console.log("Hello "+ Name +" !") + "<br>";
  }



//4th program


var g = Number(prompt("please enter a number: "))
console.log(g);
if (g % 2 == 0) {
    alert("this number " + g + " is EVEN ")
}
else{
    alert("this number " + g + " is ODD ")
}
 */


//-----------------------------------------------------------------------------

//OBJECTS

/*
var myinput3 = document.getElementsByClassName("input3");
var myInput = document.getElementsByTagName("input")

function getMultiply() {
    var product = myInput[0].value * myInput[1].value
    console.log(product)
    myinput3[0].innerHTML = product

}

var p1 = document.getElementsByClassName("p1")
function changeHTML() {

        p1[0].innerHTML = myInput[0].value
};

function changeContent() {

    p1[0].innerText = myInput[0].value

};



var firstDiv = document.getElementsByClassName("pDiv")
function changeStyle()
{
    firstDiv[0].style.backgroundColor = "purple"
    firstDiv[1].style.backgroundColor = "indigo"

}

*/

function ShowButton() {
    var myTimeOut = setTimeout(function () {
        var newbtn = document.createElement("button")
        newbtn.style.backgroundColor = "green"
        newbtn.style.color = "white"
        newbtn.style.borderRadius = "10px"
        newbtn.style.fontweight = "bold"
        newbtn.style.width = "25%"
        newbtn.style.height = "50px"
        newbtn.style.fontSize = "18px"
        newbtn.innerHTML = "this is your link"
        pDiv.append(newbtn)
    }, 1000)
};

var cnt = 0;
function start() {
    
        check = setInterval(function () {
            cnt += 1;
            document.getElementById("para").innerHTML = "Count is : "+cnt;
        }, 1000);
}


function stop() {
    clearInterval(check);
    document.getElementById("para").innerHTML = "Count is : "+cnt;
}
function reset()
{

    cnt=0
    document.getElementById("para").innerHTML = "Count is : "+cnt;
}


/*var myInterval = setInterval(function () {
    console.log("hello");
}, 2000)*/

/*var myTimeOut = setTimeout(function () {
    console.log("done");
}, 3000)*/



//<p>hello</p>