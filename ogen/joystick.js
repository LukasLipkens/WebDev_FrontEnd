//#region IMPORTS
import "./eye.js"
//#endregion IMPORTS

const template = document.createElement("template")
template.innerHTML = /*html*/`
    <style>
        #container{

            align-items: center;
            margin: 0;
        }
        .joystick-container {
            width: 200px;
            height: 200px;
            background-color: #f0f0f0;
            border: 2px solid #333;
            border-radius: 0%;
            position: relative;
            cursor: pointer;
        }
        .joystick {
            width: 40px;
            height: 40px;
            background-color: #3498db;
            border-radius: 50%;
            position: absolute;
            top: 80px;
            left: 80px;
        }
    </style>

    <div id="container">
        <div class="joystick-container">
            <div class="joystick"></div>
        </div>
        <div id="positioning">
            x = 50 | y = 50
        </div>
    </div>
    
`

class app extends HTMLElement
{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"}) // zorgt ervoor dart het component een afgeschermde stijl kan hebben
        shadow.append(template.content.cloneNode(true))
        
        this.joystick = this.shadowRoot.querySelector('.joystick');
        this.joystickContainer = this.shadowRoot.querySelector('.joystick-container');
        this.isDragging = false;
        this.position = this.shadowRoot.querySelector("#positioning");
        this.xCord = 0;
        this.yCord = 0;
        this.myName = this.getAttribute("id");
    }
    connectedCallback() {
        this.joystick.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            const offsetX = e.clientX - this.joystick.getBoundingClientRect().left;
            const offsetY = e.clientY - this.joystick.getBoundingClientRect().top;
      
            document.onmousemove = (e) => {
              if (this.isDragging) {
                const x = e.clientX - offsetX - this.joystickContainer.getBoundingClientRect().left;
                const y = e.clientY - offsetY - this.joystickContainer.getBoundingClientRect().top;
      
                const maxX = this.joystickContainer.offsetWidth - this.joystick.offsetWidth;
                const maxY = this.joystickContainer.offsetHeight - this.joystick.offsetHeight;
      
                const clampedX = Math.min(maxX, Math.max(0, x));
                const clampedY = Math.min(maxY, Math.max(0, y));
      
                this.joystick.style.left = `${clampedX}px`;
                this.joystick.style.top = `${clampedY}px`;

                this.updatePosition(clampedX, clampedY, maxX, maxY);
              }
            };
      
            document.onmouseup = () => {
              this.isDragging = false;
              document.onmousemove = null;
              document.onmouseup = null;
            };
          });
    }
    disconnectedCallback() {
        this.joystick.removeEventListener();
    }

    handler(e){
        this.dispatchEvent(new CustomEvent("moved",{
            bubbles: true,
            composed: true,
            detail: this.myName
        }));
    }

    updatePosition(x, y, maxX, maxY){
        this.xCord = Math.round((x/maxX) * 100);
        this.yCord = Math.round((y/maxY) * 100);

        this.position.innerHTML = ` x = ${this.xCord} | y = ${this.yCord}`
        this.setAttribute("x", this.xCord);
        this.setAttribute("y", this.yCord);
        this.handler()
    }
}

customElements.define('joystick-comp', app)