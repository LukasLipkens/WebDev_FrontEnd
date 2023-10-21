const template = document.createElement("template")

template.innerHTML = /*html*/`

<style>
#item1 { grid-area: header; }
#item2 
{ 
    grid-area: avatar; 

}
#item2 img{
    object-fit: contain;
    object-position: center;
    width: 100%;
}
#item3 { grid-area: main; }
#item4 { grid-area: footer; }

.grid-container {
  display: grid;
  width: 500px;

  grid-template-areas:
    'avatar header header header header header'
    'avatar main main main main main'
    'avatar footer footer footer footer footer';
  gap: 5px;
  background-color: #2196F3;
  padding: 5px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px 0;
  font-size: 30px;
}
</style>

<div class="grid-container">
  <div id="item1"></div>
  <div id="item2"><img></div>
  <div id="item3"></div>  
  <div id="item4"><button id="infoBtn">Hide Info</button></div>
</div>

`

class TeamCard extends HTMLElement {
  constructor() {
    super()
    this.showInfo = true;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.shadowRoot.querySelector("#item1").innerHTML = this.getAttribute("name");
    this.shadowRoot.querySelector("#item2 img").src = this.getAttribute("image");
    this.shadowRoot.querySelector("#item3").innerHTML = this.getAttribute("job");

  }

  toggleInfo(){
    this.showInfo = !this.showInfo

    let main = this.shadowRoot.querySelector("#item3");
    let toggleBtn = this.shadowRoot.querySelector("#item4 button");

    if(this.showInfo){
      main.style.display = 'block';
      toggleBtn.innerHTML = "hide info"
    } else{
      main.style.display = 'none';
      toggleBtn.innerHTML = "show info"
    }
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    this.shadowRoot.querySelector('#infoBtn').addEventListener('click', () =>
      this.toggleInfo()
    )
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
    this.shadowRoot.querySelector('#infoBtn').removeEventListener()
  }

}

customElements.define('team-card', TeamCard);