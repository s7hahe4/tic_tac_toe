let button = document.querySelectorAll(".a");
let result = document.querySelector(".mini");
let resultview = document.querySelector(".headerr");
let reset = document.querySelector(".reset");
let newgame=document.querySelector(".newbutton");

newgame.addEventListener("click",()=>
{
 location.reload();
})

reset.addEventListener("click", () => {
    button.forEach(btn => {
        btn.innerText = "";
        btn.style.backgroundColor = "";
        btn.disabled = false; 
    });
    resultview.classList.add('headerr'); 
        result.innerText = ""; 
});

let winpatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

let clicked = true;

let end = () => {
    resultview.classList.remove('headerr');
    result.innerText = "The Game Is Drawn.";
};

let winnermsg = (postval1) => {
    resultview.classList.remove('headerr');
    result.innerText = `The winner is ${postval1}`;
};

function checkwinner() {
    let draw = true;
    for (let pattern of winpatterns) {
        let postval1 = button[pattern[0]].innerText;
        let postval2 = button[pattern[1]].innerText;
        let postval3 = button[pattern[2]].innerText;
        if (postval1 !== "" && postval2 !== "" && postval3 !== "") {
            if (postval1 === postval2 && postval2 === postval3) {
                console.log("The winner is " + postval1);
                disable();
                winnermsg(postval1);
                return;
            }
        } else {
            draw = false;
        }
    }
    if (draw) {
        end();
    }
}

const disable = () => {
    for (let x of button) {
        x.disabled = true;
    }
};

button.forEach(btn => {
    btn.addEventListener("click", () => {
        if (clicked) {
            clicked = false;
            btn.style.backgroundColor = "588157"; 
            btn.innerText = "0";
            btn.style.color = "#00203FFF";
            btn.style.fontSize = "120px";
        } else {
            clicked = true;
            btn.innerText = "x";
            btn.style.backgroundColor = "#d4a373";
            btn.style.color = "#00203FFF";
            btn.style.fontSize = "120px";
        }
        btn.disabled = true;
        checkwinner();
    });
});
