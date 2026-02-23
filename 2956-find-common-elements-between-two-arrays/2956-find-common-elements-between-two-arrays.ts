function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  let set1 =new Set(nums1)
  let set2 =new Set(nums2)
let count1=0
let count2=0
    for (let num of nums2){
        if(set1.has(num)){
            count1++
        }
    }
    for (let num of nums1){
        if(set2.has(num)){
            count2++
        }
    }
    return [count2,count1]
};