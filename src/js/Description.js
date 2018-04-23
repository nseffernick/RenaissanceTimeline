function ImageBox() {
    this.allImages = document.getElementsByClassName("pic");
}

ImageBox.prototype.getAllImages = function() {
    return this.allImages;
};

function TextBox() {
    this.allText = document.getElementsByClassName("txt");
}

TextBox.prototype.getAllText = function() {
    return this.allText;
};


function createTextBox() {
    textBox = new TextBox();
}

function createImageBox() {
    imageBox = new ImageBox();
}

createTextBox();
createImageBox();