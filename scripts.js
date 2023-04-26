const player = (team)=>{
    this.team = team;

    const getTeam = () => {
        return team;
    };

    return { getTeam };
};

const gameBoard = (() => {
    const board = ["X", "X", "X", "X", "0", "0", "X", "0", "F", ];
    
    const fields = document.querySelectorAll('.field');

    for(let i=0; board.length; i++){
        fields[i].innerText = board[i];
    }

})();

const displayController = (()=>{

})();

const gameController = (()=>{

})();

