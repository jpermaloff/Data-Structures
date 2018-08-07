" use strict";
let array = []  

class Issue {
    constructor(name, problem) {
        this.name = name;
        this.problem = problem;
    }
}
var date = new Date()
let display = () => {
    $(".queue").append(`<section class="issueDisplay">
    ${Object.values(array[array.length-1])}, ${date}
    </section>
    <button type="button" class="remove">X</button>
    Your request is #${array.length}`);
}
var date = new Date()
const input = document.querySelectorAll("input[type='text']")
$("body").on("click", ".add", (e) => {
    array.push(new Issue(input[0].value, input[1].value));
    display();
    // console.log(array)
});
$("body").on("click", ".remove", (e) => {
    array.pop();
    // console.log(array)
});


