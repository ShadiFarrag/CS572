const item = 
	{ "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price" : 2.0
	};
  
  
  let applyCoupon = x => y => inputItem => {
  		if(inputItem.category === "food"){
        inputItem.price = inputItem.price - (inputItem.price * y);
      }
      return inputItem;
  }
  
  console.log('Result is: ' + (applyCoupon("food")(0.1)(item).price === 1.8));
  