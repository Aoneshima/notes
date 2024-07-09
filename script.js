let plus = document.getElementById('create-panel-main');
let OriginalPanel = document.getElementById('panel');
let number = document.getElementById('number');

let arr = ['1panel'];

function copyPanel() {
    let clonedPanel = OriginalPanel.cloneNode(true); 

    const parentPanel = document.getElementById('panels');
    parentPanel.appendChild(clonedPanel);
}

let arrMeaning = 1;
let copyPanelArr;

function onClickEgg(){
    copyPanel();
    arrMeaning++;
    number.textContent = arrMeaning;

    arr.push(arrMeaning + 'panel');
    
    console.log(arr);
}