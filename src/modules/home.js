function createLayout(){
    let content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createPickOptions());
    content.appendChild(createFooter());
}

function createHeader(){
    let header = document.createElement('div');
    header.className = "header";
    let headerText = document.createElement('div');
    headerText.className = "title-text";
    headerText.textContent = "Bite sized";
    header.appendChild(headerText);
    return header ;
}

function createPickOptions(){
    const pickOptions = document.createElement('div');
    pickOptions.className = "pick-options";

    const selectionList = ["contact","menu","home"];
    for(let item of selectionList){
        let selection = document.createElement('div');
        selection.className = `${item} option`;

        let imgDiv = document.createElement('div');
        imgDiv.className = `option-img`;

        let optionText = document.createElement('div');
        optionText.className = `option-text`;

        selection.appendChild(imgDiv);
        selection.appendChild(optionText);
        pickOptions.appendChild(selection);
    }

    return pickOptions;
}

function createFooter(){
    const footer = document.createElement('div');
    footer.className = "footer";
    const footerInfo = document.createElement('div');
    footerInfo.className = "footer-info";
    const attributions = document.createElement('div');
    attributions.className = "footer-attributions";
    footer.appendChild(footerInfo);
    footer.appendChild(attributions);

    return footer;
}

//need to add images to options and text into footer




export default createLayout;