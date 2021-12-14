class Form {
  constructor() {
    this.instructions = createElement("p");
    this.instructions.html("instructions");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
  
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
   
    this.playButton.class("customButton");
  }

  hide() {
    this.instructions.hide();
    this.playButton.hide();
    this.titleImg.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
    //  this.instructions
      this.playButton.hide();
      this.instructions.position(width / 2 - 90, height / 2 - 20);
      
      
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
