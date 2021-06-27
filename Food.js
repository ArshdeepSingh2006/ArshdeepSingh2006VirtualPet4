class Food{
    constructor(){
        this.foodStock = 0;
        this.image = loadImage("images/Milk.png");
        this.lastFed;

    }

    updateFoodStock(foodStock){
        this.foodStock = foodStock
    }

    getFedTime(lastFed){
        this.lastFed = lastFed
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    bedroom(){
    background(bedroomImg,550,500);

    }

    washroom(){
    background(washroomImg, 550,500);

    }

    garden(){
    background(gardenImg,550,500);

    }

    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
       // image(this.image,570,160,70,70);

        if(this.foodStock !=0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10==0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

        var button = createButton("Feed the Dog");
        button.position(400,125);

        if(button.mousePressed(function(){
            foodS=foodS-1;
            gameState = 1;
            database.ref('/').update({'gameState':gameState})
            
        }));

        var addFood = createButton("Add Food");
        addFood.position(500,125);

        if(addFood.mousePressed(function(){
            foodS=foodS+1;
            gameState = 2;
            database.ref('/').update({'gameState':gameState})
            
        }));
    }

}