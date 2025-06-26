let score = JSON.parse(localStorage.getItem('messages')) || {
        wins: 0,
        Losses: 0,
        Ties: 0
     }; 

        updateScore();



        

       function updateScore (){
document.querySelector('.score').innerHTML = `Wins: ${score.wins} Losses: ${score.Losses} Ties: ${score.Ties}`
       } 

    function computerMove (){
        let computerMove = Math.random();
        let result = '';
        if (computerMove > 0 && computerMove < 1 / 3){
            result = 'Rock';
        }
        else if (computerMove > 1 / 3 && computerMove < 2 / 3){
            result = 'Paper';
        }
        else if (computerMove > 2 / 3 && computerMove < 1){
            result = 'Scissors';
        }
        return result;
    }
    function playGame(playerMove){
        let outCome = '';
        if (playerMove === 'Rock'){
            if (result === 'Rock'){
                outCome = 'TIE';
            }
            else if (result === 'Paper'){
                outCome = 'You lose';
            }
            else if (result === 'Scissors'){
                outCome = 'You win';
            }
        }
        if (playerMove === 'Paper'){
            if (result === 'Rock'){
                outCome = 'You win';
            }
            else if (result === 'Paper'){
                outCome = 'TIE';
            }
            else if (result === 'Scissors'){
                outCome = 'You lose';
            }
        }
        if (playerMove === 'Scissors'){
            if (result === 'Rock'){
                outCome = 'You lose';
            }
            else if (result === 'Paper'){
                outCome = 'You win';
            }
            else if (result === 'Scissors'){
                outCome = 'TIE';
            }
        }
             if (outCome === 'You win'){
               score.wins += 1;
        }
            else if (outCome === 'TIE'){
            score.Ties += 1;
        }
            else if (outCome === 'You lose'){
            score.Losses += 1;
        }

        

       
        localStorage.setItem('messages', JSON.stringify(score));

       updateScore();
        document.querySelector('.result').innerHTML = outCome;
        document.querySelector('.game').innerHTML = `You
            <img src="images/${playerMove}-emoji.png" class="move-img">
            <img src="images/${result}-emoji.png" class="move-img">
            Computer`;


        return outCome;


    }


   
    
