function bubble(){
    console.log('kkkkkk');
    c_delay = 0;
    for(let i=0 ;   i<array_size-1  ;   i++){
        let j;
        for( j=0 ;   j<array_size-i-1    ;   j++){
            div_update(div[j],div_size[j],'yellow');
            if(div_size[j] > div_size[j+1]){

                div_update(div[j],div_size[j],'red');
                div_update(div[j+1],div_size[j+1],'red');

                let temp = div_size[j];
                div_size[j] = div_size[j+1];
                div_size[j+1] = temp;

                div_update(div[j],div_size[j],'red');
                div_update(div[j+1],div_size[j+1],'red');
            }
            div_update(div[j],div_size[j],'blue');
        }
        div_update(div[j],div_size[j],'green');
    }
    div_update(div[0],div_size[0],'green');
    enable_button();
}