const template = document.createElement("template")

template.innerHTML = /*html*/`

<style>
#name { grid-area: header; }
#image
{ 
    grid-area: image;

}
#image img{
    object-fit: contain;
    object-position: center;
    width: 100%;
    /*height: 100%;*/
}
#description { grid-area: main; }
.grid-container {
    display: grid;
    width: 75%;
    margin: auto;
    grid-template-areas:
        'image header header header header header'
        'image main main main main main'
        'image main main main main main';
    gap: 2px;
    background-color: #2196F3;
    padding: 5px;
    border-radius: 5px;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 10px 0;
    font-size: 1.2em;
}
</style>

<div class="grid-container">
  <div id="name">name</div>
  <div id="image"><img></div>
  <div id="description">description, ingredients</div>  
</div>

`

class DishCard extends HTMLElement {
    constructor() {
        super()
        this.showInfo = true;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(template.content.cloneNode(true));    
    }



    connectedCallback() {
        let dishNumber = +this.getAttribute("dishNumber");
        
        this.shadowRoot.querySelector("#name").innerHTML = dishList[dishNumber].name;
        this.shadowRoot.querySelector("#description").innerHTML = dishList[dishNumber].ingredients[0];

    }

    disconnectedCallback() {

    }

}

var dishes = [];
dishes = dishList;


console.log(dishes);

customElements.define('dish-card', DishCard);