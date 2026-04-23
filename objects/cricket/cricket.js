let display = document.querySelector("#display")
    let computer_choice;
    let result;
    let score_display = document.querySelector("#score");

    let score = {
        your_score: 0,
        computer_score:0,
        Draw:0,
        displayscore: function(){
            return `Your Score: ${score.your_score} <br><br>
                                    Computer Score: ${score.computer_score} <br><br>
                                    Draw: ${score.Draw} `
        }
    };

    
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
                score.Draw++;
                return `Draw`;
            }
            else if(computer_move === `Ball`){
                score.your_score++;
                return `You Won`;
            }
            else{
                score.computer_score++;
                return `You Loss`;
            }
            
        }
        else if(my_choice === 'Ball'){
            if(computer_move === `Bat`){
                score.computer_score++;
                return `You Loss`;
            }
            else if(computer_move === `Ball`){
                score.Draw++;
                return `Draw`;
            }
            else{
                score.your_score++;
                return `You Won`;
            }
        } 
        else{
            if(computer_move === `Bat`){
                score.your_score++;
                return `You Won`;
            }
            else if(computer_move === `Ball`){
                score.computer_score++;
                return `You Loss`;
            }
            else{
                score.Draw++;
                return `Draw`;
            }
        }
    }


    
    function final_result(result,computer_choice,you_move){
        console.log(score)
        score_display.innerHTML = `${score.displayscore()}`
        display.innerHTML = `Your move: ${you_move} ~ Computer move: ${computer_choice} <br> ${result}`;
    }
    

    