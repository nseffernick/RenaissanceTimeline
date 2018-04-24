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
    var attr = document.createAttribute("data-img");
    var attr1 = document.createAttribute("data-txt");
    var petrarch = document.createElement("button");
    attr.value = "petrarch-pic";
    attr1 = "petrarch-text";
    petrarch.setAttribute("data-img", "petrarch-pic");
    petrarch.setAttribute("data-txt", "petrarch-text");
    buttonArr.push(petrarch);
    var luther = document.createElement("button");
    attr.value = "luther-pic";
    attr1 = "luther-text";
    luther.setAttribute("data-img", "luther-pic");
    luther.setAttribute("data-txt", "luther-text");
    buttonArr.push(luther);
    var durer = document.createElement("button");
    attr.value = "durer-pic";
    attr1 = "durer-text";
    durer.setAttribute("data-img", "durer-pic");
    durer.setAttribute("data-txt", "durer-text");
    buttonArr.push(durer);
    var brunel = document.createElement("button");
    attr.value = "brunel-pic";
    attr1 = "brunel-text";
    brunel.setAttribute("data-img", "brunel-pic");
    brunel.setAttribute("data-txt", "brunel-text");
    buttonArr.push(brunel);
    var fedele = document.createElement("button");
    attr.value = "fedele-pic";
    attr1 = "fedele-text";
    fedele.setAttribute("data-img", "fedele-pic");
    fedele.setAttribute("data-txt", "fedele-text");
    buttonArr.push(fedele);
    var cologne = document.createElement("button");
    attr.value = "cologne-pic";
    attr1 = "cologne-text";
    cologne.setAttribute("data-img", "cologne-pic");
    cologne.setAttribute("data-txt", "cologne-text");
    buttonArr.push(cologne);
    var sackofrome = document.createElement("button");
    attr.value = "sackofrome-pic";
    attr1 = "sackofrome-text";
    sackofrome.setAttribute("data-img", "sackofrome-pic");
    sackofrome.setAttribute("data-txt", "sackofrome-text");
    buttonArr.push(sackofrome);
    var florence = document.createElement("button");
    attr.value = "florence-pic";
    attr1 = "florence-text";
    florence.setAttribute("data-img", "florence-pic");
    florence.setAttribute("data-txt", "florence-text");
    buttonArr.push(florence);
    var leon = document.createElement("button");
    attr.value = "leon-pic";
    attr1 = "leon-text";
    leon.setAttribute("data-img", "leon-pic");
    leon.setAttribute("data-txt", "leon-text");
    buttonArr.push(leon);
    var davinci = document.createElement("button");
    attr.value = "davinci-pic";
    attr1 = "davinci-text";
    davinci.setAttribute("data-img", "davinci-pic");
    davinci.setAttribute("data-txt", "davinci-text");
    buttonArr.push(davinci);
    var london = document.createElement("button");
    attr.value = "london-pic";
    attr1 = "london-text";
    london.setAttribute("data-img", "london-pic");
    london.setAttribute("data-txt", "london-text");
    buttonArr.push(london);
    var machiavelli = document.createElement("button");
    attr.value = "machiavelli-pic";
    attr1 = "machiavelli-text";
    machiavelli.setAttribute("data-img", "machiavelli-pic");
    machiavelli.setAttribute("data-txt", "machiavelli-text");
    buttonArr.push(machiavelli);
    var michelangelo = document.createElement("button");
    attr.value = "michelangelo-pic";
    attr1 = "michelangelo-text";
    michelangelo.setAttribute("data-img", "michelangelo-pic");
    michelangelo.setAttribute("data-txt", "michelangelo-text");
    buttonArr.push(michelangelo);
    var para = document.createElement("button");
    attr.value = "para-pic";
    attr1 = "para-text";
    para.setAttribute("data-img", "para-pic");
    para.setAttribute("data-txt", "para-text");
    buttonArr.push(para);
    var shake = document.createElement("button");
    attr.value = "shake-pic";
    attr1 = "shake-text";
    shake.setAttribute("data-img", "shake-pic");
    shake.setAttribute("data-txt", "shake-text");
    buttonArr.push(shake);
    var constan = document.createElement("button");
    attr.value = "constan-pic";
    attr1 = "constan-text";
    constan.setAttribute("data-img", "constan-pic");
    constan.setAttribute("data-txt", "constan-text");
    buttonArr.push(constan);
    var more = document.createElement("button");
    attr.value = "more-pic";
    attr1 = "more-text";
    more.setAttribute("data-img", "more-pic");
    more.setAttribute("data-txt", "more-text");
    buttonArr.push(more);
    var split = document.createElement("button");
    attr.value = "split-pic";
    attr1 = "split-text";
    split.setAttribute("data-img", "split-pic");
    split.setAttribute("data-txt", "split-text");
    buttonArr.push(split);

    for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].style.borderRadius = "100px";
        buttonArr[i].style.padding = "10px 10px";
        buttonArr[i].style.backgroundColor = "blue";
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