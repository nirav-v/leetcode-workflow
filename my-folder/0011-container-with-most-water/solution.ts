function maxArea(height: number[]): number {
    // maxArea: smaller line * difference between both lines
    let maxArea = 0;

    let i = 0;
    let j = height.length -1;

    while (i < j){
        const width = j - i;
        const minHeight = Math.min(height[i], height[j]);
        const area = width * minHeight;
        maxArea = Math.max(area, maxArea)
        
        if (height[i] < height[j]){
            i+=1
        } else if (height[j] < height[i]){
            j-=1
        } else {
            j-=1
        }

    }
     
        
    
    return maxArea;
 

};
