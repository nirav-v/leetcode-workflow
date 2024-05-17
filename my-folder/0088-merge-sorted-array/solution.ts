/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let i = m -1
    let j = n -1
    let replacementIndex = m + n - 1

    while (j >= 0){
        if (nums1[i] > nums2[j]){
            nums1[replacementIndex] = nums1[i]
            i--
        } else {
            nums1[replacementIndex] = nums2[j]
            j--
        }
        replacementIndex--
    }
};



// [1,2,2,3,5,6]
// [2,5,6]
