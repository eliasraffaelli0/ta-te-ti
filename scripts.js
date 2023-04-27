const player = (team)=>{
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

    return {insertField, getField};
})();

const displayController = (()=>{
    const fields = document.querySelectorAll('.field');

    //adds the event to each cell so when it's clicked adds the player's move to the board array
    fields.forEach(field => field.addEventListener('click', ()=>{
        const team = field.innerText = 'k';
        const pos = field.getAttribute('data-index')
        
        gameBoard.insertField(pos,team)
        updateBoard()
    }));

    //update every field with the board array value using the data-index as the position
    const updateBoard = () => {
        fields.forEach(field => field.innerText = gameBoard.getField(field.getAttribute('data-index')))
    }

})();

const gameController = (()=>{

})();

