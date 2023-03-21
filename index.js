// document.getElementById("count-el").innerHTML = 10;

// initialize the counter
let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
// // // listen for clicks on the increment button

// // // increment the count variable when the button is clicked

function increment() {
    count = count + 1;
    countEL.innerHTML = count
    console.log(count)
}

function save() {
    console.log(count)
}







