let cartas = [["1", "As de Corazon", 0], ["2", "Dos de Corazon", 0], ["3", "Tres de Corazon", 0], ["4", "Cuatro de Corazon", 0], 
["5", "Cinco de Corazon", 0], ["6", "Seis de Corazon", 0], ["7", "Siete de Corazon", 0], ["8", "Ocho de Corazon", 0], ["9", "Nueve de Corazon", 0], 
["10", "Diez de Corazon", 0], ["11", "Once de Corazon", 0], ["12", "Doce de Corazon", 0], ["13", "Trece de Corazon", 0]];
const table = document.querySelector(".tableCartas");


function mostrarCartas(){
    const card = document.querySelector(".container_cartas");
    for(var i = 0; i<13;i++){
        card.innerHTML +="<img src=./img/"+(i+1)+".png class='cartas"+(i+1)+"' onclick='cantidadCards_"+(i+1)+"()'></img>"
    }
}

mostrarCartas();

function tablaCartas(){
    
    let html = '';
    for(var i = 0; i<cartas.length;i++){
        html+="<tr class='dato"+i+"' align='center'><td>"+cartas[i][0]+"</td><td>"+cartas[i][1]+"</td><td class='cantCard"+i+"'>"+cartas[i][2]+"</td><tr>";
        //console.log(html);
        
    }
    table.innerHTML+=html;
}
tablaCartas();

function cantidadCards_1(){ 
    const cantCard = document.querySelector(".cantCard0");
    cartas[0][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[0][2];
}

function cantidadCards_2(){ 
    const cantCard = document.querySelector(".cantCard1");
    cartas[1][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[1][2];
}
function cantidadCards_3(){ 
    const cantCard = document.querySelector(".cantCard2");
    cartas[2][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[2][2];
}
function cantidadCards_4(){ 
    const cantCard = document.querySelector(".cantCard3");
    cartas[3][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[3][2];
}
function cantidadCards_5(){ 
    const cantCard = document.querySelector(".cantCard4");
    cartas[4][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[4][2];
}
function cantidadCards_6(){ 
    const cantCard = document.querySelector(".cantCard5");
    cartas[5][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[5][2];
}
function cantidadCards_7(){ 
    const cantCard = document.querySelector(".cantCard6");
    cartas[6][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[6][2];
}
function cantidadCards_8(){ 
    const cantCard = document.querySelector(".cantCard7");
    cartas[7][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[7][2];
}
function cantidadCards_9(){ 
    const cantCard = document.querySelector(".cantCard8");
    cartas[8][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[8][2];
}
function cantidadCards_10(){ 
    const cantCard = document.querySelector(".cantCard9");
    cartas[9][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[9][2];
}
function cantidadCards_11(){ 
    const cantCard = document.querySelector(".cantCard10");
    cartas[10][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[10][2];
}
function cantidadCards_12(){ 
    const cantCard = document.querySelector(".cantCard11");
    cartas[11][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[11][2];
}
function cantidadCards_13(){ 
    const cantCard = document.querySelector(".cantCard12");
    cartas[12][2]+=1;
    localStorage.setItem('arrayCards', JSON.stringify(cartas));
    cantCard.innerHTML=cartas[12][2];
}



