'use strict'
/*
    author:@José Luis Peregrina Rosales 6°J
*/
console.log('Tester activate...');

const content_main = document.querySelector('main');
const ep_button = document.querySelector('#ep');
const bva_button = document.querySelector('#bva');
const amount_textInput = document.querySelector('#amount')
const content_tbody = document.querySelector('#table-body');
const lower_table = document.querySelector('#tableLowerBondery');
const normal_talbe = document.querySelector('#tableNormalBoundery');
let values = [1,5,7,11];
   

function createTd(){
    return document.createElement('td');
}
function createText(text){
    return document.createTextNode(text);
}
function createRow(){
    return document.createElement('tr');
}
function validate(valor){
    return calculateParkingCost(valor);
}
function isPass(){

}

ep_button.addEventListener('click', ()=>{
    
    for(let i in values){
        let nTr = createRow();//se crean las filas
        let nTd;
        let nText;
        for(let j = 0; j < values.length; j++){//se crean las columnas
            if(j === 0){
                nTd = createTd();
                nText = createText(values[i]);
                nTd.appendChild(nText);
            }
            else if(j === 1){
                var tem;
                if(values[i] <= 5) tem = values[i] * 10;
                else if(values[i] <= 10) tem = values[i] * 9;
                else tem = values[i] * 7;
                nTd = createTd();
                nText = createText(tem);
                nTd.appendChild(nText);
            }
            else if(j === 2){
                var temp2 = calculateParkingCost(values[i]) ;
                nTd = createTd();
                nText = createText(temp2 );
                nTd.appendChild(nText);
            }
            else if(j === 3){
                nTd = createTd();
                console.log(tem, temp2);
                if(tem == temp2)
                    nText = createText('True');
                else nText = createText('False');
                nTd.appendChild(nText);
            }
            nTr.appendChild(nTd);
        }
        content_tbody.appendChild(nTr);
    }



});


bva_button.addEventListener('click', ()=>{
    let tem = values[0]-1;
    for(let i = 0; i < 4; i++){
    let nTr = createRow();
    let nTd = createTd();
    let nText = createText(tem--);
    nTd.appendChild(nText);
    nTr.appendChild(nTd);
    lower_table.appendChild(nTr);
    tem = tem--;
    }
    let nTr1 = createRow();
    for(let i = 0; i < 2; i++){
        let nTd = createTd();
        let nText;
        if(i == 0)
            nText = createText(values[0]);
        else 
            nText = createText(values[values.length-1]);
        
        nTd.appendChild(nText);
        nTr1.appendChild(nTd);
    }
    normal_talbe.appendChild(nTr1);

});