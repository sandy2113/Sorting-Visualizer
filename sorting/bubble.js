function bubbleSort() {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animation(bars[j], barsHeight[j], c1);
            animation(bars[j + 1], barsHeight[j + 1], c2);

            if (barsHeight[j] > barsHeight[j + 1]) {
            
                [barsHeight[j], barsHeight[j + 1]] = [barsHeight[j + 1], barsHeight[j]];

               
                animation(bars[j], barsHeight[j], c2);
                animation(bars[j + 1], barsHeight[j + 1], c1);

            }
            
            animation(bars[j], barsHeight[j], cm);
            animation(bars[j + 1], barsHeight[j + 1], cm);
        }
        animation(bars[n - 1 - i], barsHeight[n - 1 - i], sorted);
    }
    
    animation(bars[0], barsHeight[0], sorted);
}
