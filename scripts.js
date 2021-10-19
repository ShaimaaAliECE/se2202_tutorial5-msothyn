let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let next = document.getElementById("next-lbl");
next.innerHTML = nextPlayer;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i <9; i++){
        let cellNum = 'c' + (i+1);
        var button = document.createElement("button");
        button.innerHTML = "[ ]"
        document.getElementById(cellNum).appendChild(button);
    }
   

}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    let button = event.path[0];
    button.innerHTML = "["+nextPlayer+"]";
    if(nextPlayer=='X'){
        nextPlayer = 'O'
    }
    else {
        nextPlayer = 'X';
    }
    button.disabled = true;
    let next = document.getElementById("next-lbl");
    next.innerHTML = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        
        var header = document.createElement("h1");
        header.innerHTML = "Game Over"
        document.getElementById("game-over-lbl").appendChild(header);
    }

    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 


function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    for (let i = 1; i <10; i++){
        let cellNum = 'c'+i;
        let button = document.getElementById(cellNum).firstChild;
        if(button.disabled == false){
            return false;
        }
    }
    return true; 
}
