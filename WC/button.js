//#region IMPORTS

//#endregion IMPORTS



//#region TEMPLATE

let template = document.createElement('template');

template.innerHTML = /*html*/`

    <style>
        button
        {
            padding: 10px;
        }

    </style>
    
    <div class="button_Holder">
        <button>Click me!</button>
    </div>

`;

//#endregion TEMPLATE



//#region CLASS

window.customElements.define('button-comp', class extends HTMLElement {

   constructor() {

     super();



     this._shadowRoot = this.attachShadow({ 'mode': 'open' });

     this._shadowRoot.appendChild(template.content.cloneNode(true));  

  }



   connectedCallback() {

     // this.addEventListener("ux", (e) => {

     //  console.log(e);

     //  this.$menu.setAttribute('custom', e.detail.checked)

     // });

  }



});

//#endregion CLASS