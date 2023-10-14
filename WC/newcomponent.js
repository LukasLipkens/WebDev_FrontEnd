//#region IMPORTS

//#endregion IMPORTS



//#region TEMPLATE

let template = document.createElement('template');

template.innerHTML = /*html*/`

    <style>
    </style>    


<svg width="400" height="300">
    <!-- Define a clipping path for the ellipse -->
    <clipPath id="ellipse-clip">
        <ellipse cx="150" cy="100" rx="150" ry="100" />
    </clipPath>

    <!-- Areas on the left and right (clipped by the ellipse) -->
    <rect x="0" y="0" width="100" height="200" fill="red" clip-path="url(#ellipse-clip)" />
    <rect x="200" y="0" width="100" height="200" fill="green" clip-path="url(#ellipse-clip)" />

    <!-- Areas in the center (two on top of each other, clipped by the ellipse) -->
    <rect x="100" y="0" width="100" height="75" fill="yellow" clip-path="url(#ellipse-clip)" />
    <rect x="100" y="125" width="100" height="75" fill="orange" clip-path="url(#ellipse-clip)" />

    <foreignObject x="100" y="75" width="100" height="50">
        <input type="text" style="font-size: 2em; width: 100%; height: 100%;" />
    </foreignObject>
</svg>



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