// let goforit = document.querySelector('#submit-button');
let thisinput = document.querySelector('#translator-input');
thisinput.addEventListener('keydown', ()=>{
    let translateValue = thisinput.value;
    let output = document.querySelector('#results');
    let select = '';
    let radioButtons = document.querySelectorAll('[name="translation-section"]');
    for(let selection of radioButtons){
        if(selection.checked){
            select = selection.value
        }
    }
    if(select === 'encode'){
        output.innerText = encode(translateValue)
    }else if(select === 'madlib'){
        output.innerText = madlib(translateValue)
    }else if(select === 'translate'){
        output.innerText = translate(translateValue)
    }else if(select === 'search'){
        output.innerText = '';
        let searchArray = search(translateValue);
        for(let item of searchArray){
            let symbol = item.symbol;
            let newElement = document.createElement('p');
            newElement.innerText = symbol;
            output.appendChild(newElement);
        }
        if(searchArray.length === 0){
            output.innerText = 'No emojis have been found that match your criteria.'
        }
    }else if(select === 'random'){
    let number = Math.floor(Math.random() * 4) + 1;
    if(number === 1){
        output.innerText = encode(translateValue)
    }else if(number === 2){
        output.innerText = madlib(translateValue)
    }else if(number === 3){
        output.innerText = translate(translateValue)
    }else if(number === 4){
        output.innerText = '';
        let searchArray = search(translateValue);
        for(let item of searchArray){
            let symbol = item.symbol;
            let newElement = document.createElement('p');
            newElement.innerText = symbol;
            output.appendChild(newElement);
        }
        if(searchArray.length === 0){
            output.innerText = 'No emojis have been found that match your criteria.'
        }
    }
    }
})

document.querySelector('#explanation').addEventListener('click', ()=>{
    let list = document.querySelector('ul');
    if(list.className === 'invisible'){
        list.className = '';
    }else{
        list.className = 'invisible';
    }
})