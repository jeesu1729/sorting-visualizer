function quick(){
    c_delay = 0;
    quick_sort(0,array_size-1);
    enable_button();
}

function quick_sort(start,end){
    if(start < end){
        let piv_pos = quick_partition(start , end);
        quick_sort(start , piv_pos-1);
        quick_sort(piv_pos+1 ,end);
    }
}

function quick_partition(start , end){
    let i = start + 1;
    let piv = div_size[start];
    div_update(div[start],div_size[start],'yellow');

    for(let j=start+1   ;   j<=end  ;   j++){
        if(div_size[j] < piv){
            div_update(div[j],div_size[j],'yellow');
            div_update(div[i],div_size[i],'red');
            div_update(div[j],div_size[j],'red');

            let temp = div_size[i];
            div_size[i] = div_size[j];
            div_size[j] = temp;

            div_update(div[i],div_size[i],'red');
            div_update(div[j],div_size[j],'red');

            div_update(div[i],div_size[i],'blue');
            div_update(div[j],div_size[j],'blue');

            i = i+1;
        }
    }
    div_update(div[start],div_size[start],'red');
    div_update(div[i-1],div_size[i-1],'red');

    var temp=div_size[start];//put the pivot element in its proper place.
    div_size[start]=div_size[i-1];
    div_size[i-1]=temp;

    div_update(div[start],div_size[start],'red');
    div_update(div[i-1],div_size[i-1],'red');

    for(var t=start;t<=i;t++)
    {
        div_update(div[t],div_size[t],"green");//Color update
    }

    return i-1;

}