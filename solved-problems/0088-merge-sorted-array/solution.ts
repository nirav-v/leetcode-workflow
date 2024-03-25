/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {    
    // for (let i = 0; i < n; i++){
    //     nums1[m + i] = nums2[i]
    // }
    
    // nums1.sort(((a,b) => a -b))

    // start comparing the last  of both arrays, put the greater value into the end of nums1
    let i = m - 1
    let j = nums2.length - 1

    while (j >= 0){
        // compare i and j, greater one gets put into nums1
        if (nums1[i] > nums2[j]){
            nums1[m + n - 1] = nums1[i]
            i--;
        } else {
           nums1[m + n - 1] = nums2[j]
           j--
        }
        n--
    }

//    i 
// [1,2,2,3,5,6]

// j
// [2,5,6]

};

