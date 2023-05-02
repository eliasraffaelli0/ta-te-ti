const player = (team) => {
    this.team = team;

    const getTeam = () => {
        return team;
    };

    return { getTeam };
};

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const insertField = (pos, team) => {
        if(pos> board.length) return;
        board[pos]  = team;
    };

    const getField = (pos) => {
        return board[pos];
    }

    return { insertField, getField };
})();

const displayController = (() => {
    const fields = document.querySelectorAll('.field');

    //adds the event to each cell so when it's clicked adds the player's move to the board array
    fields.forEach(field => field.addEventListener('click', ()=>{
        //if the cell is already taken or the game is finished doesn't allow to keep filling the cells
        if(field.innerText !== "" || gameController.isGameOver()) return;
        
        const pos = field.getAttribute('data-index')
        gameController.playRound(pos);
        updateBoard();
    }));

    //update every field with the board array value using the data-index as the position
    const updateBoard = () => {
        fields.forEach(field => field.innerText = gameBoard.getField(field.getAttribute('data-index')));
    }

})();

const gameController = (() => {
    const playerX = player("X");
    const playerO = player("O");
    let round = 1;
    let gameOver = false;

    const playRound = (pos) => {
        gameBoard.insertField(pos, getPlayerTeam());
        if(checkWinner()){
            console.log('El jugador ' + getPlayerTeam() + ' ganó');
            gameOver = true;
            return;
        };
        if(round===9){
            console.log('empata3');
            gameOver = true;
        }
        round++;
    }

    //gets the current player based on the round number, X is odd rounds and O is the even ones
    const getPlayerTeam = () => {
        return round % 2 === 1 ? playerX.getTeam() : playerO.getTeam();
    }

    const checkWinner = () => {
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        let winner = false;
        for (const condition of winConditions) {
            if((gameBoard.getField(condition[0]) === getPlayerTeam()) && (gameBoard.getField(condition[1]) === getPlayerTeam()) && (gameBoard.getField(condition[2]) === getPlayerTeam())){
                winner = true;
            }
        }
        return winner;
    }

    const isGameOver = () => {
        return gameOver
    }
    return { playRound, checkWinner, isGameOver }
})();

