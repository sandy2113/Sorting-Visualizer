function mergeSort(start, end) {
    if (start >= end) {
        return;
    }

    let middle = Math.floor((start + end) / 2);
    mergeSort(start, middle);
    mergeSort(middle + 1, end);
    merge(start, end);
    
}

function merge(start, end) {
    let i = start;
    let mid = Math.floor((start + end) / 2);
    let j = mid + 1;
    let e = end;
    let temp = []; 

    while (i <= mid && j <= e) {
        if (barsHeight[i] <= barsHeight[j]) {
            animation(bars[i], barsHeight[i], c1);
            temp.push(barsHeight[i]);
            i++;
        } else {
            temp.push(barsHeight[j]);
            animation(bars[j], barsHeight[j], c2);
            j++;
        }
    }
   
    while (i <= mid) {
        animation(bars[i], barsHeight[i], c1);
        temp.push(barsHeight[i]);
        i++;
    }
    while (j <= e) {
        temp.push(barsHeight[j]);
        animation(bars[j], barsHeight[j], c2);
        j++;
    }

  
    for (let i = 0; i < temp.length; i++) {
        barsHeight[start + i] = temp[i];
        animation(bars[start + i], barsHeight[start + i], sorted);
    }
}