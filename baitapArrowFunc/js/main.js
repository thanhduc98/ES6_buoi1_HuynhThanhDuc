const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let renderButtonString = () => {
  let content = ``;
  for (let index = 0; index < colorList.length; index++) {
     let color = colorList[index];
     if (index == 0) {
        content += `<button class='color-button ${color} active' onclick="changeColor('${color}')"></button>`;
     } else {
        content += `<button class='color-button ${color}' onclick="changeColor('${color}')"></button>`;
     }


  }
  document.getElementById('colorContainer').innerHTML = content;
}
renderButtonString();

let removeActiveColor = () => {
  let btnActive = document.getElementsByClassName("color-button");
  for (let i = 0; i < btnActive.length; i++) {
     btnActive[i].addEventListener("click", function () {
        let active = document.getElementsByClassName("active");
        active[0].classList.remove("active");
        this.classList.add("active");
        console.log(active);
     });
  }

}

window.changeColor = (color) => {
  console.log(color);
  removeActiveColor();
  document.getElementById("house").className = `house ${color}`;

}

changeColor();


