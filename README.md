### To Do

1. Preview this MarkDown file with Control+Shift+V
1. Set the value of document element with id = rounds to "odd numbers only" if an even number is entered, and do not display this message as an alert.
1.Create a div in chooser.html with id = result and write "Choose a move" inside it. 
1. Display the findWinner message inside that div, replacing "Choose a Move" when there is a winner, instead of displaying that message as an alert. 
1. Replace that result message with the "We both picked" alert message if u and c are the same, and do not display the alert. 
1. To the body element, apply the css rule position:relative;
1. On chooser.html, create a div with id = scoreBox above statsBox and containing the HTML "Score: loading"
1. Apply these css rules to a #scoreBox selector:  position:absolute; right:10px; top: 10px; border:1px solid black; background:white;padding:10px;
1. In setRounds, if rounds was odd, create an array called score and set it to [0,0]. 
1. Next, store the score array to local storage using JSONstringify.
1. In showRound, get score from local storage, JSON parsed.
1. Next, replace "Score: loading" in scoreBox with score.toString()
1. In findWinner, store the winner in local storage as winner.
1. After you set the round, get the score array from local storage, JSON parsed. 
1. Next, create a players array with the two players, "You" first. 
1. Next, set win equal to the index of the winner in players.
1. Next, increase by one the value of the element in the score array with index win
1. Next, display the updated score in the scoreBox div with "Score : " + score.toString;
1. Next, store the score array, stringified, in local storage.
1. Now, in gameover.html, add the scorebox div above the play again button
1. Give scoreBox the class "over" 
1. Style over with font 24pt, margin auto, position static (important), width 10 em, text align center.
1. Get the winner variable from local storage
1. Create a variable called message, and begin it winner + won, 
1. Add the score to message, but join the values with " to " instead of a comma. 
1. Display the message in scoreBox. 
1. If this is working, save the branch now. 
1. Create a new branch called rps web refactored. 
1. Go over all the code.  If you see any repeated lines, make new a function for those if possible.  
1. If one player earns more than half the rounds, end the game.
1. When you are sure it works, pull request this branch to main, then merge it.  Then you can style to match your wireframes. Í