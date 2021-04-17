
showFact=()=>{
    let displayFact = document.querySelector(".display-facts");

    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        method: 'GET',
        success: function(data){
            
                displayFact.innerHTML = data.value; 
            }
        }
    )
}

// Cate-1
showFactA=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=animal",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
   
}

// Cate-2
showFactC=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random?category=career",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
   
}

// Cate-3
showFactD=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random?caegory=dev",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
   
}




// Cate-4

showFactE=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url: "https://api.chucknorris.io/jokes/random?category=explicit",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
}


// Cate-5

showFactStar=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=celebrity",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}

// Cate-6


showFactF=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=fashion",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}

// Cate-7

showFactFood=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=food",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}


// Cate-8


showFactH=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=history",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
}

// Cate-9

showFactM=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=money",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}

// Cate-10
showFactMovie=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=movie",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}


// Cate-11
showFactMusic=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=music",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
   
}

// Cate-12
showFactP=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=political",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
   
}

// Cate-13
showFactR=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=religion",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}

// Cate-14
showFactScience=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=science",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}


// Cate-15
showFactSport=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=sport",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}


// Cate-16

showFactTravel=()=>{
    let displayFact = document.querySelector(".display-facts");
    $.ajax({
        url : "https://api.chucknorris.io/jokes/random?category=travel",
        method: 'GET',
        success: function(data){
            displayFact.innerHTML = data.value; 

        }

    })
    
}