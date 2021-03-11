let size = document.querySelector('#a_size');
let array_size = size.value;
let speed = document.querySelector('#a_speed');
let generate_btn = document.querySelector('#a_generate');

let btn_algo = document.querySelectorAll('.algos button');

let div_size = [];
let div = [];
var margin_size;
var cont = document.querySelector('#array_container');

generate_btn.addEventListener('click',generate_array);
size.addEventListener('input',update_array_size);



function generate_array(){
    cont.innerHTML = '';
    for(let i=0 ;   i<array_size    ;   i++){
        div_size[i] = Math.floor(Math.random() * 0.5*(size.max - size.min) ) + 10;
        div[i] = document.createElement('div');
        cont.appendChild(div[i]);
        margin_size=0.1;
        div[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_size[i]) + "%;";
    }
    for(let i=0 ;   i<btn_algo.length   ;   i++){
        btn_algo[i].disabled = false;
    }
}

function update_array_size()
{
    array_size = size.value;
    generate_array();
}

window.onload=update_array_size();

for(let i=0 ;   i<btn_algo.length   ;   i++){
    btn_algo[i].addEventListener('click',run_algo);
}

function disable_btn(){
    console.log('dnqwdno');
    for(let i=0 ;   i<btn_algo.length   ;   i++){
        btn_algo[i].classList = [];
        btn_algo[i].classList.add('butt_locked');
        btn_algo[i].disabled = true;
        size.disabled = true;
        speed.disabled = true;
        generate_btn.disabled = true;
    }
}

function run_algo(){
    console.log(this.innerHTML);
    disable_btn();
    this.classList.add('butt_selected');
    switch(this.innerHTML){
        case 'Bubble'   :   bubble();
                            console.log('kkwww');
                            break;
        case 'Selection'   :   selection();
                            break;
        case 'Insertion'   :   insertion();
                            break;
        case 'heap'   :   heap();
                            break;
        case 'merge'   :   merge();
                            break;
        case 'quick'   :   quick();
                            break;
    }
}