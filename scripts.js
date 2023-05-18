        let pChoice;
        let cChoice;
        let result;
        // const score = {
        //     win : 0,
        //     lose : 0,
        //     total : 0
        // };
        let score = JSON.parse(localStorage.getItem('score'));
        let show = document.querySelector('.s');
        let rock_element=document.querySelector('.rock');
        let scissors_element=document.querySelector('.scissors');
        let paper_element=document.querySelector('.paper');
        if(!score)
        {
            score = {
                win : 0,
                lose : 0,
                total :0
            };
        }
        let isPlaying=false;
        let intervalId;
        function autoplay() // To Autoplay 
        {
            if(!isPlaying)
            {
                intervalId=setInterval(function() 
                {
                    let c=computer();
                    let p=computer();
                    let r=game(p,c);
                    disp(p,c,r);
                },1000);
                isPlaying=true;
            }
            else
            {
                clearInterval(intervalId); // To Stop Auto Playing
                isPlaying=false;
            }
            
        }
        function computer()
        {
            let Choice = Math.random();
            if(Choice <= 0.3)
                return 'Rock';
            else if(Choice > 0.3 && Choice<= 0.6)
                return 'Paper';
            else
                return 'Scissors';
        }
        function game(p , c)
        {
            if(p == c)
                return 'It is Draw';
            else if(p == 'Rock' && c == 'Paper')
                return 'You Lost';
            else if(p == 'Rock' && c == 'Scissors')
                return 'You Won';
            else if(p == 'Paper' && c == 'Rock')
                return 'You Won';
            else if(p == 'Paper' && c == 'Scissors')
                return 'You Lost';
            else if(p == 'Scissors' && c == 'Rock')
                return 'You Lost';
            else if(p == 'Scissors' && c == 'Paper')
                return 'You Won';
        }
        function disp(p , c , r)
        {
            if(r == 'You Won')
                score.win +=1;
            else if(r == 'You Lost')
                score.lose +=1;
            score.total +=1;
            // alert('You Picked ' + p + ' Computer Picked ' + c + ' ' + r +' \n' + 'Wins: ' + score.win + ' Loss: ' + score.lose + ' Ties: ' + (score.total - score.win - score.lose) +' Total ' + score.total);
            
            update(show , p , c , r);
            
        } 
        function reset()
        {
            score.win = 0;
            score.lose = 0;
            score.total = 0;
            localStorage.removeItem('score');
            show.innerHTML = 'Wins: ' + score.win + ', Loss: ' + score.lose + ', Ties: ' + (score.total - score.win - score.lose) +', Total: ' + score.total;
        }
        function update(show , p , c , r)
        {
             show.innerHTML = 'You <img src="Rock _files/'+p+'-emoji.png" class="icon"> <img src="Rock _files/'+c+'-emoji.png" class="icon"> Computer <br> <br> <br>' + r +'<br> <br> <br>' + 'Wins: ' + score.win + ', Loss: ' + score.lose + ', Ties: ' + (score.total - score.win - score.lose) +', Total: ' + score.total; 
            localStorage.setItem('score', JSON.stringify(score));
            // You Picked ' + p + ' Computer Picked ' + c + ' ' + '<br> <br> ' + r +'<br> <br>' + 'Wins: ' + score.win + ', Loss: ' + score.lose + ', Ties: ' + (score.total - score.win - score.lose) +', Total: ' + score.total;
        }
        rock_element.addEventListener('click',() => {
            cChoice = computer();
            pChoice = 'Rock';
            result = game(pChoice , cChoice);
            disp(pChoice , cChoice , result);
        }
        );

        paper_element.addEventListener('click',() => {
            cChoice = computer();
            pChoice = 'Paper';
            result = game(pChoice , cChoice);
            disp(pChoice , cChoice , result);
        }
        );

        scissors_element.addEventListener('click',() => {
            cChoice = computer();
            pChoice = 'Scissors';
            result = game(pChoice , cChoice);
            disp(pChoice , cChoice , result);
        }
        );
        