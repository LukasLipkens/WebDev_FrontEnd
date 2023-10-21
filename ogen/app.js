//#region IMPORTS
import "./eye.js"
import "./testing.js"
import "./joystick.js"
//#endregion IMPORTS

const template = document.createElement("template")
template.innerHTML = /*html*/`

    <eye-comp></eye-comp>
    <!-- <joystick-comp></joystick-comp> -->
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