/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i:number = m-1;
    let j:number = n-1;
    let index:number = m+n-1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[index--] = nums1[i--];
        } else {
            nums1[index--] = nums2[j--];
        }
    }
    if (i < 0){
        while(index >= 0){
            nums1[index--] = nums2[j--];
        }
    }
    return;
};