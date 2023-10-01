let isAnswer=0;
let ansValue='', ansButtonClicked=0;

//getting value to the screen

let contscreen= document.getElementById("cont-screen");
let opnscreen= document.getElementById("opn-screen");
let screen=contscreen;
function press(numValue)
{
    if (screen.value==0)
    {
        screen.value='';
    }
    if (isAnswer==1)
    {
        screen.value='';
        isAnswer=0;
    }
    if (ansButtonClicked==1)
    {
        screen.value=ansValue;
        ansValue='';
        ansButtonClicked=0;
    }
    if (ansButtonClicked==0 & isAnswer==0)
    {
        screen.value+=numValue;
    }
}

//clearing the screen
function clearScreen(val)
{
    screen.value=val;
}

function deletion()
{
    //can't delete answers
    if (isAnswer==0)
    {
        const space=screen;
        screen.value=space.value.substring(0, space.value.length-1);
    }
}

function isEqualTo()
{
    if (screen.value !='')
    {
        try{
            ansValue=String(eval(screen.value))
            clearScreen(eval(screen.value));
        }
        catch(err)
        {
            clearScreen("Bad Expression")
        }
    }
    isAnswer=1;

}

function sine()
{
    screen.value= Math.sin(screen.value* Math.PI/180);
}

function cosine()
{
    screen.value= Math.cos(screen.value* Math.PI/180);
}

function tan()
{
    screen.value=Math.tan(screen.value*Math.PI/180);
}

function invsine()
{
    screen.value = Math.asin(screen.value)*(180/Math.PI)
}

function invcosine()
{
    screen.value = Math.acos(screen.value)*(180/Math.PI)
}

function invtan()
{
    screen.value = Math.atan(screen.value)*(180/Math.PI)
}


function ln()
{
    screen.value=Math.log(screen.value);
}

function log()
{
    screen.value=Math.log10(screen.value);
}

function square()
{
    screen.value=Math.pow(screen.value,2);
}

function cube()
{
    screen.value=Math.pow(screen.value,3);
}

function squareRoot()
{
    screen.value=Math.pow(screen.value,0.5);
}

function exponent()
{
    screen.value= Math.pow(10, screen.value);
}

function answer()
{
    screen.value=ansValue;
    ansButtonClicked=1;
}


const optionsButton = document.getElementById("optionsButton");
const replaceByOpn = document.getElementById("replaceByOpn");
const replacement = document.getElementById("replacement");

optionsButton.addEventListener("click", function () {
    // Hiding the calculator
    replaceByOpn.display = "none";

    // Showing container for Options
    replacement.style.display = "block";
    screen=opnscreen;
});

BackButton.addEventListener("click", function () {
    // Hiding the calculator
    replaceByOpn.display = "block";
    screen=contscreen;

    // Showing container for Options
    replacement.style.display = "none";
});

function fix(decimalPlaces) 
{
    const multiplier = 10 ** decimalPlaces;
    screen.value= (Math.round(screen.value * multiplier) / multiplier).toFixed(decimalPlaces);
}

function mtocm()
{
    screen.value=screen.value*100;
}

function cmtom()
{
    screen.value=screen.value/100;
}

function inv()
{
    screen.value=1/screen.value;
}

function radtodeg()
{
    screen.value= screen.value* (180 / Math.PI)
}

function degtorad()
{
    screen.value= screen.value* (Math.PI / 180);
}




