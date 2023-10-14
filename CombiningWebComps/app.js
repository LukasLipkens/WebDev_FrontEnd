//#region IMPORTS
import "./hello-world-item.js"
import "./teamCard.js"
//#endregion IMPORTS

const template = document.createElement("template")
template.innerHTML = /*html*/`
    <h1>parentComponent</h1>
    <hello-world-item checked>hello <span slot="description">small text</slot></hello-world-item>
    <hello-world-item>hello</hello-world-item>

    <team-card name="ALI" image="https://randomuser.me/api/portraits/men/5.jpg"></team-card>
    <team-card name="MARIA" image="https://randomuser.me/api/portraits/women/6.jpg"></team-card>

`

class app extends HTMLElement
{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"}) // zorgt ervoor dart het component een afgeschermde stijl kan hebben
        shadow.append(template.content.cloneNode(true))
        
        }
}

customElements.define('app-comp', app)