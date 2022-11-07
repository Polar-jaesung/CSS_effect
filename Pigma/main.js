const logo = document.querySelectorAll('#logo path');

for(let i=0; i<9; i++){
    console.log( `철자 ${i} 의 길이는 ${logo[i].getTotalLength()}` );
}
