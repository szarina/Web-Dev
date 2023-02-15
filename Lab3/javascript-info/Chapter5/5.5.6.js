function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b  
    };
  
    this.calculate = function(str) {
  
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if ( isNaN(a) || isNaN(b) || !this.methods[op]) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }