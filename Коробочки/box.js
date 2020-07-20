var ChinaBox={
price:0,
calories:0,

	small:{
		price:300,
	},
	
	large:{
		price:380,
	},
 
	extra_large:{
		price:450,	
	},

	rice:{
		
		calories:80,
	},
 
	noodles:{
		
		calories:100,
	},
	
	pig:{
		price:80,
		calories:150
	},
 
	meet:{
		price:100,
		calories:180,
	},
	
	chicken:{
		price:50,
		calories:100,
	},
	
	shrimps:{
		price:100,
		calories:120, 
	},
	
	salmon:{
		price:120,
		calories:130,
	},
	
	bread_crumbs:{
		price:15,
		calories:10,
	},
	
	extra_souse:{
		price:20,
		calories:5,
	},
	
	tofu:{
		price:20,
		calories:10,
	},

 calculate: function (size,garnish) {
      this.price = ChinaBox[size].price; 
      this.calories = ChinaBox[garnish].calories;
      if (ChinaBox[size]=="small") {
         this.calories =this.calories*1;
      }  else if(ChinaBox[size]=="large"){
            this.calories=this.calories *2;
      }else{ 
            this.calories=this.calories *3;
      }

      var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
        for (var i=0;i<checkboxArr.length;i++){
            var type = checkboxArr[i].id;
            this.price+= ChinaBox[type].price;
            this.calories+= ChinaBox[type].calories;
            
        }
        ChinaBox.result(this.price,this.calories);
   },


 
   result: function (price,calories) {
      document.getElementById("prise").innerHTML = price;
      document.getElementById("calories").innerHTML = calories;
   },
   result_all: function(){
      this.price=0;
      this.calories=0;
      
   }
}


document.getElementById("form").addEventListener('submit', (e)=>{
    e.preventDefault();
    var sizeBox = (document.querySelector('input[name="size"]:checked').value);
    var garnishBox = (document.querySelector('input[name="garnish"]:checked').value);
    ChinaBox.calculate(sizeBox,garnishBox);
})