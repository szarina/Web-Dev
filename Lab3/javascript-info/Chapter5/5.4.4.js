function getMaxSubSum(arr) {
    let maxSum = 0;
    let tempSum = 0;
  
    for (let item of arr) { 
      tempSum += item; 
      maxSum = Math.max(maxSum, tempSum); 
      
      if (partialSum < 0) tempSum = 0; 
    }
  
    return maxSum;
}