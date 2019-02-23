var ingredients = ["cheese", "turkey", "salami","ham", "bacon","lettuce","tomato","onion","pickles","eggs", "mayo","ketchup","hot","mustard"];
for (i = 0; i<ingredients.length; i++){
    window[ingredients[i]]=0
}

function myFunction() {
    var checking = ["chees", "turke", "salam","ha", "baco","lettuc","tomat","onio","pickle","egg", "may","ketchu","ho","mustar"];
    for (z = 0; z<checking.length; z++){
        if(document.getElementById(checking[z]).checked)
        window[ingredients[z]]++
    }

    if(bacon==1){
        if((lettuce==1 && tomato ==1) || mayo ==1) {//blt
        document.getElementById("imageId").src="http://www.tabletmag.com/wp-content/files_mf/blt_101113_820px.jpg"
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'B.L.T.'); 
    }
        else{
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'You could make a BLT if you just had Lettuce and Tomatoes'); 
    } 
        for (i=0;i<ingredients.length;i++){
            window[ingredients[i]]=0
        }
    }

    if(turkey==1){
        if ((lettuce==1 && tomato ==1) || mayo ==1 || hot==1 || mustard ==1){ //turkey sandwich 
        document.getElementById("imageId").src="http://frostyqueen.org/wp-content/uploads/2016/06/TURKEY-SANDWHICH.jpg"
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'Turkey Sandwich');           
        }
        else
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'You could make a Turkey Sandwich if you just had Lettuce and Tomatoes');  
        for (i=0;i<ingredients.length;i++){
            window[ingredients[i]]=0
        }
    }

    else if(salami == 1){
        if(lettuce==1 && tomato ==1 && cheese ==1 && onion==1) {//blt
            document.getElementById("imageId").src="https://images.appehtite.ca/images/3373_00915359_Ciabatta%20Sandwich%20with%20Roasted%20Red%20Peppers,%20Salami,%20and%20Provolone%20Cheese.jpg"
            document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'Artisan Salami Sandwich');   
        }
            else
            document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'You could make an Artisan Salami Sandwich if you just had Lettuce, Tomatoes');  
            for (i=0;i<ingredients.length;i++){
                window[ingredients[i]]=0
            }
    }

    else if(ham == 1 && eggs ==0){
        document.getElementById("imageId").src="https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich.jpg"
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'Ham Sandwich'); 
        for (i=0;i<ingredients.length;i++){
            window[ingredients[i]]=0
        }
    }
    
    else if(eggs == 1){
        if ((lettuce ==1 && tomato ==1 && ham ==1) || ketchup ==1 || mustard ==1){
        document.getElementById("imageId").src="https://www.pamperedchef.com/iceberg/com/recipe/985997-lg.jpg"
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'Fried Egg Sandwich'); 
        }
        else {
            document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'You could make a Fried Egg Sandwich if you just had Tomatoes, Lettuce and Ham'); 
            }
        for (i=0;i<ingredients.length;i++){
            window[ingredients[i]]=0
        }
    }

    else {
        document.body.innerHTML = document.body.innerHTML.replace(/Please Select Your Ingredients/g, 'You do not have suffecient ingredients to make a sandwich, might want to call home!'); 
    }
    
            
}



