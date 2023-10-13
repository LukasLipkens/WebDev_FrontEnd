class MyCustomElement extends HTMLElement{

    constructor(){
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.textContent = "dit is een aangepast element met ...";
        shadowRoot.appendChild(wrapper);
    }
}

window.customElements.define('my-custom-element', MyCustomElement);