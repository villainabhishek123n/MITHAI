let playerscore = 0;
let computerscore = 0;

function play(playerchoice)
{
const choices = ['rock','paper','scissor'];
const computerchoice = choices[Math.floor(Math.random() * choices.length)];
 
let result = '';
if (playerchoice === computerchoice) 
    {
    result = 'it\'s a tie!';
    } 
else if ( 
     (playerchoice ==='rock' && computerchoice === 'scissors')||
    (playerchoice ==='paper' && computerchoice === 'rock')||
    (playerchoice ==='scissors' && computerchoice === 'paper')
)
{
 result = 'you win';
 playerscore++;
}
 else 
{
    result = 'you loose';
    computerscore++;
}
document.getElementById('result').innerText=`${result}`;
document.getElementById('playerscore').innerText = playerscore;
document.getElementById('computerscore').innerText = computerscore;

}