let side = 1;
const rollDice = () => {
    side = Math.floor(Math.random()*6)+1;

    if (side === 6) 
    {
        side = 1;
    } 
    else 
    {
        side++;
    }

    const dice = document.querySelector('#dice')
    

    if (side === 1)
    {
        dice.className = 'side-1';
        
    } 
    else if (side === 2) {

        dice.className = 'side-2';
        

    } else if (side === 3) {

        dice.className = 'side-3';
        

    } else if (side === 4) {

        dice.className = 'side-4';
        

    } else if (side === 5) {

        dice.className = 'side-5';
        

    } else if (side === 6) {

        dice.className = 'side-6';

    } else {

        return false;

    }
}
const rollDiceII = () => {
    side = Math.floor(Math.random() * 6) + 1;

    if (side === 6) {
        side = 1;
    }
    else {
        side++;
    }

    const diceII = document.querySelector('#diceII')


    if (side === 1) {
        diceII.className = 'side-1';

    }
    else if (side === 2) {

        diceII.className = 'side-2';


    } else if (side === 3) {

        diceII.className = 'side-3';


    } else if (side === 4) {

        diceII.className = 'side-4';


    } else if (side === 5) {

        diceII.className = 'side-5';


    } else if (side === 6) {

        diceII.className = 'side-6';

    } else {

        return false;

    }
}

const rolling = () => {
    rollDice();
    rollDiceII();
}