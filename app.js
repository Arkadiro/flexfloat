class App {
  constructor(){
    this.textEl = document.getElementById('text');
    this.el = document.getElementById('el');
  }
  getText() {
    const text = app.textEl.value;
    if(text.length > 3){
      app.el.textContent = "";
      console.log(text);
    } else {
      app.el.textContent = "enter valid message";
    }
  }
}

const app = new App();

document.getElementById('btn').addEventListener('click', app.getText)