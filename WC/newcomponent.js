//#region IMPORTS

//#endregion IMPORTS



//#region TEMPLATE

let template = document.createElement('template');

template.innerHTML = /*html*/`

    <style>
    </style>

`;

//#endregion TEMPLATE



//#region CLASS

window.customElements.define('newcomp-lukas', class extends HTMLElement {

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