/*
  isogramas 

*/

const FucIsogram = (l) => {
    const n = l.toLowerCase();
    const arry = [];
    for(const x of n){    
      console.log(x);
      if(arry.includes(x))
        return false;
        arry.push(x);
        console.log(arry);
      
    }
    return true;
  }
  
  FucIsogram("gato");