function isPrime(integer){
  for( var = 2; x< integer; x++){
    if(integer % x === 0) {
      console.log(integer + " is divisible by " + x);
        return false;
    }
  }
  return true;
}
