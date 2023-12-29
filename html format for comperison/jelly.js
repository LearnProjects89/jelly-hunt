var jelly = Math.floor(Math.random() * 10);
var miss = Math.floor(Math.random() * 10);
var counter = 5;
if (jelly === miss) {miss = Math.floor(Math.random() * 10)}


const treasure = (location) => {
    counter = counter - 1
    document.getElementById("counter").innerHTML = `Turns: ${counter}`

    if (jelly === location) {
        document.getElementById("table").innerHTML = "<img src=33.png>"
        return alert ("You Won!!!");
        
    } else if (miss === location) {
        document.getElementById("table").innerHTML = "<img src=21.jpg>"
        return alert ("Spongbob is annoyed! Please try again!");
    } else {
        document.getElementById(location).innerHTML = "<img src=44.jpeg>"
    } 
  }
 

