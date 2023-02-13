function pow(x, n) {
    let result = 1; 
    
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}
  
let x = prompt("x?", '');
let n = prompt("n?", '');
  
if (n < 1) {
alert('n must be more or equal to 1');
} else {
    alert( pow(x, n) );
}