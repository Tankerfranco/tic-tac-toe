import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) =>{
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a]
    }
    }
    return null
  }


 export  const checkEndGame = (newBoard) => {
  //revisamos si hay un empate
  //si no hay mas espacio vacios
  //en el tablero
  return newBoard.every((square) => square !== null)
}
