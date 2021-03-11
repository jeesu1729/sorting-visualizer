function heap(){
    console.log('idhar');
    c_delay = 0;
    heap_sort();
    console.log('idhar2');
    enable_button();
   
}

function swap(i,j){
    div_update(div[i],div_size[i],'red');
    div_update(div[j],div_size[j],'red');

    let temp = div_size[i];
    div_size[i] = div_size[j];
    div_size[j] = temp;

    div_update(div[i],div_size[i],'red');
    div_update(div[j],div_size[j],'red');

    div_update(div[i],div_size[i],'blue');
    div_update(div[j],div_size[j],'blue');
}


function heapify(n,i){
    let largest = i;
    let l = 2*i + 1;
    let r = 2*i + 2;

    if(l<n &&  div_size[l] > div_size[largest]){
        if(largest != i){
            div_update(div[largest],div_size[largest],'blue');
        }

        largest = l;

        div_update(div[largest],div_size[largest],'red');

    }
    if(r<n &&  div_size[r] > div_size[largest]){
        if(largest != i){
            div_update(div[largest],div_size[largest],'blue');
        }
        largest = r;
        div_update(div[largest],div_size[largest],'red');

    }
    if(largest != i){
        swap(i,largest);
        heapify(n,largest);
    }

}


function heap_sort(){
    for(let i=Math.floor(array_size/2)-1    ;   i>=0    ;   i--){
        heapify(array_size,i);
    }

    for(let i=array_size-1  ;   i>0 ;   i--){
        swap(0,i);
        div_update(div[i],div_size[i],'green');
        div_update(div[i],div_size[i],'yellow');

        heapify(i,0);

        div_update(div[i],div_size[i],'blue');
        div_update(div[i],div_size[i],'green');
    }
    div_update(div[0],div_size[0],'green');
    console.log('kkklllll');
}