//#region IMPORTS

// import './menu.js';
import './newcomponent.js';
//#endregion IMPORTS



//#region TEMPLATE

let template = document.createElement('template');

template.innerHTML = /*html*/`

  <style></style>

  <body>

 kiekeboe
 
    <newcomp-lukas></newcomp-lukas>


  </body>

`;

//#endregion TEMPLATE



//#region CLASS

window.customElements.define('app-lukas', class extends HTMLElement {

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