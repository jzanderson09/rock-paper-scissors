// Returns string to represent outcome/winning player:
export const evaluate = (computerChoice, userChoice) => {
    if (computerChoice === userChoice) {
        return 'tie';
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        return 'user';
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        return 'computer';
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        return 'computer';
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        return 'user';
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        return 'user';
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        return 'computer';
    }
};