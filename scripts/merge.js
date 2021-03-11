function merge(){
    c_delay = 0;
    merge_partition(0,array_size-1);
    enable_button();
}

function merge_partition(start , end){
    if(start < end){
        let mid = Math.floor((start + end)/2);
        div_update(div[mid],div_size[mid],'yellow');

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_them(start,mid,end);
    }
}

function merge_them(start,mid,end){
    let p = start , q = mid + 1;
    let arr = [] , k = 0;
    for(let i=start ;   i<=end; i++){
        if(p>mid){
            arr[k++] = div_size[q++]
            div_update(div[q-1],div_size[q-1],'red');
        }
        else if(q>end){
            arr[k++] = div_size[p++];
            div_update(div[p-1],div_size[p-1],'red');
        }
        else if(div_size[p] < div_size[q]){
            arr[k++] = div_size[p++];
            div_update(div[p-1],div_size[p-1],'red');
        }
        else{
            arr[k++] = div_size[q++];
            div_update(div[q-1],div_size[q-1],'red');
        }
    }
    for(let t=0 ;   t<k ;   t++){
        div_size[start++] = arr[t];
        div_update(div[start-1],div_size[start-1],'green');
    }
}