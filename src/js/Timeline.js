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

}

function createImageBox() {

}

textBox = new TextBox();
imageBox = new ImageBox();

function makeButtons() {
    var buttonArr = new Array();
    //button 1
    var petrarch = document.createElement("button");
    var attr = document.createAttribute("data-img");
    var attr1 = document.createAttribute("data-txt");
    attr.value = "petrarch-pic";
    attr1.value = "petText";
    petrarch.setAttribute("data-img", "petrarch-pic");
    petrarch.setAttribute("data-txt", "petrarch-text");
    buttonArr.push(petrarch);
    attr.value = "petrarch-pic";
    attr1.value = "petText";
    petrarch.setAttribute("data-img", "petrarch-pic");
    petrarch.setAttribute("data-txt", "petrarch-text");
    buttonArr.push(petrarch);
    //... make more buttons

    for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].setAttribute("border-radius", "100%");
        buttonArr[i].setAttribute("padding", "20px");
        buttonArr[i].setAttribute("background-color", "blue");
        buttonArr[i].setAttribute("margin", "40px 20px");
        buttonArr[i].addEventListener("click", buttonClick);
        buttonArr[i].addEventListener("mouseover", buttonSwipe);

        document.getElementsByTagName("body")[0].appendChild(buttonArr[i]);
    }
}

function buttonClick() {
    var allImages = imageBox.getAllImages();
    var allText = textBox.getAllText();

    for (let x = 0; x < allImages.length; x++) {
        allImages[x].className = "hide pic";
        allText[x].className = "hide txt"
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    var textId = this.attributes["data-txt"].value;
    var text = document.getElementById(textId);

    if (pic.classList.contains("hide")) {
        pic.className = "show pic";
        text.className = "show txt";
    }
    else {
        pic.className = "hide pic";
        text.className = "hide txt";
    }
}

function buttonSwipe() {
    //TODO

}

makeButtons();