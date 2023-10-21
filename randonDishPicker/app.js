//#region IMPORT
import "./dishCard.js";
//#region END IMPORT

const template = document.createElement("template");

template.innerHTML = /*html*/`
    <style>
        #content{
            margin: auto;
            background: lightGray;
            width: 80%;
            height: 100%;
            text-align: center;

        }
        #dishes{
            margin: auto;
            width: 50%;
            border: 2px solid black;
        }
        dish-card{
            margin: auto;
            width: 100%;
            /*border: 2px solid black;*/

            padding: 10px;

        }
    </style>
    <div id="content">
        test
        <div id="dishes">
            

        </div>
    </div>
    <h1>FoodPicker</h1>
`


class App extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true))
    }

    connectedCallback() {
        console.log("app initiated");
        this.randomFoodPicker();
        console.log( Math.floor((Math.random() * dishList.length) + 1))
    }


    randomFoodPicker() {
        let listLength = dishList.length;
        var root = this.shadowRoot.querySelector("#dishes");

        let value = this.randomUniqueNum(5, 5)

        for(let count = 0; count < 10; count++){
            console.log("adding card #"+count)

            if(count == 1){
                var card = document.createElement("dish-card");
                card.setAttribute("dishNumber", "0")
                root.append(card)
            }
            else{
                //creating card
                var card = document.createElement("dish-card");
                card.setAttribute("dishNumber", value[count])
                root.append(card)
            }
        }
    }

    randomUniqueNum(range, outputCount) {

        let arr = []
        for (let i = 1; i <= range; i++) {
          arr.push(i)
        }
      
        let result = [];
      
        for (let i = 1; i <= outputCount; i++) {
          const random = Math.floor(Math.random() * (range - i));
          result.push(arr[random]);
          arr[random] = arr[range - i];
        }
      
        return result;
      }
}

customElements.define("app-comp", App);