//#region IMPORTS

//#endregion IMPORTS



//#region TEMPLATE

let template = document.createElement('template');

template.innerHTML = /*html*/`

    <style>
        .box
        {
            border: black solid 2px;
            width: fit-content;
        }

    </style>
    
    <div class="box">
        <p>hello world</p>
    </div>

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