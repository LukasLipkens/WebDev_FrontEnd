const template = document.createElement("template")
template.innerHTML = /*html*/`
    <style>
        label
        {
            color: red;
            display:block;
        }
        .description{
            font-size: 0.65rem;
            color: black;
        }

    </style>
    <!-- <h1><slot></slot></h1> alles wat tussen de custom element tags zit in bv. index.html wordt het slot genoemd -->

    <label>
        <input type="checkbox" />
        <slot></slot>
        <span class="description">
            <slot name="description"></slot>
        </span>
    </label>
`

class HelloWorld extends HTMLElement
{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"}) // zorgt ervoor dart het component een afgeschermde stijl kan hebben
        shadow.append(template.content.cloneNode(true))
        this.checkbox = shadow.querySelector("input") //selecteer de checkbox van de component op te gebruiken in de code onderaan
        }


    static get observedAttributes(){
        return["checked"]
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name == "checked"){
            this.updateChecked(newValue)
        }
    }

    updateChecked(value){
        this.checkbox.checked = value != null && value != "false";
    }
}

//dit is het script van dit component

let item = document.querySelector("hello-world-item"); //neemt het eerste element met deze tag
let item2 = document.querySelectorAll("hello-world-item");
let checked = true;
setInterval(() => {
    checked = !checked
    item2.forEach(element => {
        element.setAttribute("checked", checked) //zet het checked attribute in de tag binnen de .html file, dit kan dan worden uitgelezen door de class HelloWorld
    });
}, 1000);

customElements.define('hello-world-item', HelloWorld)