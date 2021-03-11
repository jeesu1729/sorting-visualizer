let min_index;
function selection(){
    c_delay = 0;
    let i;
    for( i=0 ;   i<array_size-1  ;   i++){
        div_update(div[i],div_size[i],'red');
        min_index = i;
        for(let j = i+1 ;   j<array_size    ;   j++){
            div_update(div[j],div_size[j],'yellow');
            if(div_size[j] < div_size[min_index]){
                if(min_index != i){
                    div_update(div[min_index],div_size[min_index],'blue');
                }
                min_index = j;
                div_update(div[min_index],div_size[min_index],'red');
            }
            else{
                div_update(div[j],div_size[j],'blue');
            }
        }
        if(min_index != i){
            let temp = div_size[min_index];
            div_size[min_index] = div_size[i];
            div_size[i] = temp;

            div_update(div[min_index],div_size[min_index],'red');
            div_update(div[i],div_size[i],'red');
            div_update(div[min_index],div_size[min_index],'blue');
        }
        div_update(div[i],div_size[i],'green');
    }
    div_update(div[i],div_size[i],'green');
    enable_button();
}