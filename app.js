// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newgameBtn = document.querySelector("#new-btn");
// let msg_container = document.querySelector(".msg_container");
// let msg = document.querySelector("#msg");
// let turn0 = true;

// const winpatterns = [

//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],




// ];
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
       
//         if(turn0 )
//         {
//             box.innerText="X";
//             turn0 = false;
//         }
//         else{
//             box.innerText ="0";
//             turn0 =true;
//         }
//         box.disabled  = true;
//         checkwinner();
//     });
// });

// const resetGame = () =>
// {
//     turn0 =true;
//     enableBoxes();
//     msg_container.classList.add("hide");
// }

// const showWinner = (winner) =>{
//     msg.innerText = `Congratulations , winner is  ${winner}`;
//     msg_container.classList.remove("hide");
// }

// const disableBoxes = () => {
//     for (let box of boxes)
//         box.disabled=true;

// }

// const enableBoxes = () => {
//     for (let box of boxes)
//         box.disabled=false ;
//         box.innerText = "";

// }

// const checkwinner = () =>
// {
//     for (let pattern of winpatterns )
//     {
//         console.log(pattern[0],pattern[1],pattern[2]);
//         console.log(
//             boxes[pattern[0]].innerText, 
//             boxes[pattern[1]].innerText,
//             boxes[pattern[2]].innerText);

//             let pos1val = boxes[pattern[0]].innerText;
//             let pos2val =  boxes[pattern[1]].innerText;
//             let pos3val = boxes[pattern[2]].innerText;

//             if (pos1val != "" && pos2val != "" && pos3val !="" ){
//                 if(pos1val === pos2val && pos2val ===pos3val)
//                 {
//                     console.log("Winner !!! ",pos1val);

//                     showWinner(pos1val);
//                     disableBoxes(); // Disable all boxes once winner is found
//                 return; 

//                 }

//             }

//     }

// }


// newgameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
       
        // Ensure the box is only clicked once
        if (box.innerText === "") {
            if(turn0) {
                box.innerText = "X";
                turn0 = false;
            } else {
                box.innerText = "O";
                turn0 = true;
            }
            // Disable the box to prevent further clicks
            box.disabled = true; // Comment: This prevents further interaction with the box once clicked
            checkwinner();
        }
    });
});

const resetGame = () => {
    turn0 = true;
    enableBoxes(); // Reset game to initial state
    msg_container.classList.add("hide"); // Hide winner message container when resetting
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`; // Display the winner
    msg_container.classList.remove("hide"); // Show the winner message container
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Disable all boxes after game is over
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;  // Re-enable all boxes
        box.innerText = ""; // Clear the text inside each box (resetting the game)
    }
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // Check if all positions are filled and equal
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner !!! ", pos1val);
                showWinner(pos1val); // Show winner once detected
                disableBoxes(); // Disable all boxes once winner is found
                return; // Exit once a winner is found
            }
        }
    }
};

// Event listeners for buttons to reset the game
newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
