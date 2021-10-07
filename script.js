// CODE TO CALCULATE STRIKE RATE - SCORECARD

run=document.getElementsByClassName("run");
ball=document.getElementsByClassName("ball");
sr=document.getElementsByClassName("sr");

for(let i=0; i<run.length; i++){
    sr[i].innerHTML = ((parseInt(run[i].innerHTML)/parseInt(ball[i].innerHTML))*100).toFixed(2);
}