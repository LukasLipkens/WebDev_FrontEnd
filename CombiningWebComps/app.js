//#region IMPORTS
import "./hello-world-item.js"
import "./teamCard.js"
//#endregion IMPORTS

const template = document.createElement("template")
template.innerHTML = /*html*/`

    <style>
        team-card{
            padding: 50px;
        }
    </style>

    <h1>parentComponent</h1>
    <hello-world-item checked>hello <span slot="description">small text</slot></hello-world-item>
    <hello-world-item>hello</hello-world-item>

    <team-card name="ALI" job="terrorist" image="https://randomuser.me/api/portraits/men/5.jpg"></team-card>
    <team-card name="MARIA" job="poetsvrouw" image="https://randomuser.me/api/portraits/women/6.jpg"></team-card>
    <team-card name="Patra" job="werkloos" image="https://randomuser.me/api/portraits/women/9.jpg"></team-card>
    <team-card name="lena" job="adult dancer" image="https://randomuser.me/api/portraits/women/10.jpg"></team-card>

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