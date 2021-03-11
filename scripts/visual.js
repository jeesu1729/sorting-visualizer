let speed_algo = 1000;
speed.addEventListener('input',calc_speed);

function calc_speed(){
    console.log('kjk');
    let array_speed = speed.value;
    switch(parseInt(array_speed)){
        case 1  :   speed_algo = 1;
                    break;
        case 2  :   speed_algo = 10;
                    break;
        case 3  :   speed_algo = 100;
                    break;
        case 4  :   speed_algo = 1000;
                    break;
        case 5  :   speed_algo = 10000;
                    break;
    }
    delay_time = 10000/(Math.floor(array_size/10)*speed_algo);  
}

let delay_time = 10000/(Math.floor(array_size/10)*speed_algo);  
let c_delay = 0;

function div_update(cont,height,color){
    window.setTimeout(function() {
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + "; transition: height 0.1s linear;";
    },c_delay = c_delay + delay_time);
}

function enable_button(){
    console.log('inside en');
    window.setTimeout(function(){
        for(let i=0 ;   i<btn_algo.length   ;   i++){
            btn_algo[i].classList = [];
            btn_algo[i].classList.add('butt_unselected');
            btn_algo.disabled = false;
            size.disabled = false;
            speed.disabled = false;
            generate_btn.disabled = false;
        }
    },c_delay += delay_time);
}