function insertion(){
    c_delay = 0;
    for( i=0 ;   i<array_size    ;   i++){
        div_update(div[i],div_size[i],'yellow');

        let key = div_size[i];
        let j = i-1;
        while(j>=0 && div_size[j] > key){
            div_update(div[j],div_size[j],'red');
            div_update(div[j+1],div_size[j+1],'red');

            div_size[j+1] = div_size[j];

            div_update(div[j],div_size[j],'red');
            div_update(div[j+1],div_size[j+1],'red');

            div_update(div[j],div_size[j],'blue');
            if(j == (i-1)){
                div_update(div[j+1],div_size[j+1],'yellow')
            }
            else{
                div_update(div[j+1],div_size[j+1],'blue');
            }
            j = j-1;
        }
        div_size[j+1] = key;
        for(let t=0 ;   t<i ;   t++){
            div_update(div[t],div_size[t],'green');
        }
    }
    div_update(div[i-1],div_size[i-1],'green')
    enable_button();
}