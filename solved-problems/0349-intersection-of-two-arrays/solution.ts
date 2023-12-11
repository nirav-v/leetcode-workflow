function intersection(arr1: number[], arr2: number[]): number[] {
    const result = [];

  let nums1Set = new Set(arr1);

  for (const num2 of arr2) {
      if (nums1Set.has(num2)){
          result.push(num2);
          nums1Set.delete(num2);
      }
  }

  return result;
};
