Array.prototype.isDual = function(){
	if(this.length % 2 == 0){
     
     let twoElmSum = this[0] + this[1];
          
     for(let i=2; i< this.length; i=i+2){
       if(this[i] + this[i+1] !== twoElmSum){
         return 0;
       }
     }
     return 1;
  }else{
    return 0;
  }
};

console.log('Test Value is: ' + [1,2,3,0].isDual());
console.log('Test Value is: ' + [1,2,2,1,3,0].isDual());
console.log('Test Value is: ' + [1,1,2,2].isDual());
console.log('Test Value is: ' + [1,2,3].isDual());
console.log('Test Value is: ' + [].isDual());
