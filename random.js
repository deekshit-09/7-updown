 var coins=2000;
 var bet=250;
 var r1=250,r2=250,r3=250;
function imgchng(num1,num2)
{

    var image1 =document.getElementById("slot1");
    var image2=document.getElementById("slot2");
    
    switch(num1)
    {
        case 1: {
            image1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";
        }
        break;
        case 2: {
            image1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png";
        }
        break;
        case 3:{
            image1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png";
        }
        break;
        case 4:{
            image1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png";
        }
        break;
        case 5:{
            image1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png";
        }
        break;
        case 6:{
            image1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/1024px-Dice-6-b.svg.png";
        }
        break;
    }
    switch(num2)
    {
        case 1: {
            image2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";
        }
        break;
        case 2: {
            image2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png";
        }
        break;
        case 3:{
            image2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png";
        }
        break;
        case 4:{
            image2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png";
        }
        break;
        case 5:{
            image2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png";
        }
        break;
        case 6:{
            image2.src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/1024px-Dice-6-b.svg.png";
        }
        break;
    }
}


function add()
{
    if(bet<coins)
    {
        bet=bet+250;
        r1=bet*2;
        r3=r1;
        r2=bet*3;

    }
    document.getElementById("bet").innerText= bet;
    document.getElementById("r1").innerText= r1;
    document.getElementById("r3").innerText= r3;
    document.getElementById("r2").innerText= r2;
}
function minus()
{
    if(bet>250)
    {
        bet=bet-250;

    }
    document.getElementById("bet").innerText= bet;
}

function validate(sum){
    var v=0;
    if(sum==7 && document.getElementById("ch2").checked)
    {
        coins=coins + (bet*3);
    }
    else if(sum<7 && document.getElementById("ch1").checked )
    {
        coins = coins + (bet*2);
    }
    else if(sum>7 && document.getElementById("ch3").checked )
    {
        coins = coins + (bet*2);
    }
    else
    coins=coins-bet;
    document.getElementById("wallet").innerText= coins;
}

function change()
{
    var num1=Math.floor(Math.random()*6)+1;
    var num2=Math.floor(Math.random()*6)+1;
    var sum=num1+num2;
    imgchng(num1,num2);
    validate(sum);
}
