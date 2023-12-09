function createHeader(pageTitle){
    let header = document.createElement('div');
    header.className = "header";
    let headerText = document.createElement('div');
    headerText.className = "title-text";
    headerText.textContent = pageTitle;
    header.appendChild(headerText);
    return header ;
}

function createPickOptions(optionList,parentDivName){
    const pickOptions = document.createElement('div');
    pickOptions.className = parentDivName;

    for(let i = 0; i < optionList.length; i++){
        let selection = document.createElement('div');
        selection.className = `${optionList[i].className} option`;

       
        let content = document.createElement('img');
        content.className = `option-img`;
        content.src = optionList[i].imgPath;

        let optionText = document.createElement('div');
        optionText.className = `option-text`;
        optionText.innerHTML = optionList[i].optionText;

        

        selection.appendChild(content);
        selection.appendChild(optionText);

        if(optionList[i].price){
            let optionPrice = document.createElement('div');
            optionPrice.className = `option-price`;
            optionPrice.innerHTML = optionList[i].price;
            selection.appendChild(optionPrice);
        }
        pickOptions.appendChild(selection);
    }

    return pickOptions;
}

export {createPickOptions,createHeader};