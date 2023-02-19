calcAverage =(a,b,c)=>{

return (a)/3;

}

function checkWinners()
{

const team1Average=calcAverage(30,30,30);
const team2Average=calcAverage(10 ,10,10);
if (team1Average>=2*team2Average)
{

    console.log('team1win');
}
else if (team2Average>=2*team1Average)
{

    console.log('team2win'); 
}
else 
{
    console.log('Draw ........');
}

}
checkWinners();