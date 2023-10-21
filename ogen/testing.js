class DraggableJoystick extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
  
          .joystick-container {
            width: 200px;
            height: 200px;
            background-color: #f0f0f0;
            border: 2px solid #333;
            border-radius: 50%;
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
        <div class="joystick-container">
          <div class="joystick"></div>
        </div>
      `;
  
      this.joystick = this.shadowRoot.querySelector('.joystick');
      this.joystickContainer = this.shadowRoot.querySelector('.joystick-container');
      this.isDragging = false;
  
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
          }
        };
  
        document.onmouseup = () => {
          this.isDragging = false;
          document.onmousemove = null;
          document.onmouseup = null;
        };
      });
    }
  }
  
  customElements.define('draggable-joystick', DraggableJoystick);
  