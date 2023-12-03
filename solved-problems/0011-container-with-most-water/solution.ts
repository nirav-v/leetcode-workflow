function maxArea(lines: number[]): number {
    // initilaize max height to the area between the first and last lines (greatest width)
    // whichever number is smaller, we move inwards to check incase it is a higher number
    // repeat until the pointers to each line cross

    let i = 0;
    let j = lines.length - 1;
// [2,3,4,5,18,17,6]
    let maxArea = 0;

    while (i < j){
        const height = Math.min(lines[j], lines[i]);
        const width = j - i;
        const area = width * height;
        console.log(area)
        maxArea = Math.max(area, maxArea);
        if (lines[i] < lines[j]){
            i++
        } else j--;
    }

    return maxArea;
    



};
