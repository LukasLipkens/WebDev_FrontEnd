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
            padding: 10px;
        }
        .ellipse{
            border: black solid 2px;
            width: 25%;
            height: 250px;
            border-radius: 50%;

        }
        #content
        {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        #middleRow
        {
            display: flex;
            flex-direction: row;
            max-width: inherit;
            height: 33%;
            width: 100%

        }
        #inputDiv
        {

            border: black 2px solid;
            padding: 25px;
            width: 50%;
            position: relative;
        }
        input
        {
            width: 50%;
            position: absolute;
            transform: translate(-50%, 50%);

            left: 50%;
        }
        #buttonDiv
        {
            border: black 2px solid;
            padding: 25px;
            width: 25%;
        }
        #SVGDiv
        {
            border: black 2px solid;
            padding: 25px;
            width: 25%;

        }
        #topDiv
        {
            width: 100%;
            height: 33%;
        }
        #topContent
        {
            width: 50%;
            height: 100%;
            border: black 2px solid;
            margin: auto;
        }
    </style>
    
    <div class="ellipse">
        <div id="content">
            <div id="topDiv">
                <div id="topContent">

                </div>
            </div>
            <div id="middleRow">
                <div id="SVGDiv">

                </div>
                <div id="inputDiv">
                    <input type="text">
                </div>
                <div id="buttonDiv">
                
                </div>
            </div>
            <div id="topDiv">
                <div id="topContent">

                </div>
            </div>
            
        </div> 
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