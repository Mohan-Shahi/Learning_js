let display = document.querySelector("#display")
    let computer_choice;
    let result;
    let score_display = document.querySelector("#score");

    let score = 0;
    let score_result;
    let final_result;
    
    function Computer(){
        let number = Math.floor(Math.random()*10);
          if ( number >= 0 && number <3){
                return `Bat`;
            }
            else if ( number >=3 && number <6) {
                return `Ball`;
            } 
            else {
                return `Stump`;
            }         
    }
    
    

    function Result(my_choice,computer_move){
        if(my_choice === 'Bat'){
            if(computer_move === `Bat`){
                return `Draw`;
            }
            else if(computer_move === `Ball`){
                return `You Won`;
            }
            else{
                return `You Loss`;
            }
            
        }
        else if(my_choice === 'Ball'){
            if(computer_move === `Bat`){
                return `You Loss`;
            }
            else if(computer_move === `Ball`){
                return `Draw`;
            }
            else{
                return `You Won`;
            }
        } 
        else{
            if(computer_move === `Bat`){
                return `You Won`;
            }
            else if(computer_move === `Ball`){
                return `You Loss`;
            }
            else{
                return `Draw`;
            }
        }
    }
    
    function Score(result_of_yours){
        if(result_of_yours === `You Won`){
            score = score+1;
            return score;
        }
        else if(result_of_yours === `You Loss`){
            score = score -1;
            return score;
        }
        else{
            score = score;
            return score;
        }
    }

    function Score_error(your_score){
        if(your_score <= 0){
            score = 0;
            return score;
        }
        else{
            score = score;
            return score;
        }
    }
    