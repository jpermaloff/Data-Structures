" use strict";
let array = []  

class Issue {
    constructor(name, problem) {
        this.name = name;
        this.problem = problem;
    }
}
let display = () => {
    var date = new Date()
    $(".queue").append(`<section class="issueDisplay">
    ${Object.values(array[0])}, ${date}
    </section>
    <button type="button" class="remove">X</button>
    <button type="button" class="end">=></button>
    Your request is #1 of ${array.length}`);
}
const input = document.querySelectorAll("input[type='text']")
$("body").on("click", ".add", (e) => {
    $(".queue").empty();
    array.push(new Issue(input[0].value, input[1].value));
    display();
    console.log(array)
});
$("body").on("click", ".remove", (e) => {
    $(".queue").empty();
    array.shift();
    var date = new Date()
    $(".queue").append(`<section class="issueDisplay">
    ${Object.values(array[0])}, ${date}
    </section>
    <button type="button" class="remove">X</button>
    <button type="button" class="end">=></button>
    Your request is #1 of ${array.length}`);
    console.log(array)
});



