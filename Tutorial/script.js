let item = document.querySelector("hello-world-item"); //neemt het eerste element met deze tag
let item2 = document.querySelectorAll("hello-world-item");
let checked = true;
setInterval(() => {
    checked = !checked
    // item2[0].setAttribute("checked", checked) //zet het checked attribute in de tag binnen de .html file, dit kan dan worden uitgelezen door de class HelloWorld
    // item2[2].setAttribute("checked", checked)

    item2.forEach(element => {
        element.setAttribute("checked", checked)
    });
}, 1000);