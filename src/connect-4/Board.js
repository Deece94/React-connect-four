import Column from './Column.js';
import Grid from '@material-ui/core/Grid'
import {useState} from 'react';


const Board = () => {




    const [board, setBoard] = useState(boardStart);

    const [turn, setTurn] = useState('Red');

    const gameWon = () => {
        //iterate through each column
        return board.columns.some((column, i) => {
            //iterate through each cell
            return column.cells.some((cell, j) => {
                //check up-right if not in rightmost or top 3 columns/cells
                if(i < board.columns.length-3 && j >= 3){
                    if(board.columns[i].cells[j].colour === turn && board.columns[i+1].cells[j-1].colour === turn && board.columns[i+2].cells[j-2].colour === turn && board.columns[i+3].cells[j-3].colour === turn){
                        console.log('up-right win')
                        console.log(turn)
                        console.log(i, j, board.columns[i].cells[j].colour)
                        console.log(i+1, j-1, board.columns[i+1].cells[j-1].colour)
                        console.log(i+2, j-2, board.columns[i+2].cells[j-2].colour)
                        console.log(i+3, j-3, board.columns[i+3].cells[j-3].colour)
                        return true
                    }
                }

                //check right
                if(i < board.columns.length-3){
                    if(board.columns[i].cells[j].colour === turn && board.columns[i+1].cells[j].colour === turn && board.columns[i+2].cells[j].colour === turn && board.columns[i+3].cells[j].colour === turn){
                        console.log('right win')
                        console.log(turn)
                        console.log(i, j, board.columns[i].cells[j].colour)
                        console.log(i+1, j, board.columns[i+1].cells[j].colour)
                        console.log(i+2, j, board.columns[i+1].cells[j].colour)
                        console.log(i+3, j, board.columns[i+1].cells[j].colour)
                        return true
                    }
                }
                //check down right
                if(i < board.columns.length-3 && j < column.cells.length-3){
                    if(board.columns[i].cells[j].colour === turn && board.columns[i+1].cells[j+1].colour === turn && board.columns[i+2].cells[j+2].colour === turn && board.columns[i+3].cells[j+3].colour === turn){
                        console.log('down-right win')
                        console.log(turn)
                        console.log(i, j, board.columns[i].cells[j].colour)
                        console.log(i+1, j+1, board.columns[i+1].cells[j+1].colour)
                        console.log(i+2, j+2, board.columns[i+1].cells[j+1].colour)
                        console.log(i+3, j+3, board.columns[i+1].cells[j+1].colour)
                        return true
                    }
                }

                //check down
                if(j < column.cells.length-3){
                    if(board.columns[i].cells[j].colour === turn && board.columns[i].cells[j+1].colour === turn && board.columns[i].cells[j+2].colour === turn && board.columns[i].cells[j+3].colour === turn){
                        console.log('down win')
                        console.log(turn)
                        console.log(i, j, board.columns[i].cells[j].colour)
                        console.log(i, j+1, board.columns[i].cells[j+1].colour)
                        console.log(i, j+2, board.columns[i].cells[j+1].colour)
                        console.log(i, j+3, board.columns[i].cells[j+1].colour)
                        return true
                    }
                }

                return false;
            })
        })

    }

    const makePlay = (i) =>{
        if(board.status !== "unfinished"){
            return;
        }
        //make copy of board
        const newBoard = {...board}
        
        //get column clicked on
        const column = newBoard.columns.find(column => column.id === i)


        //fill in the bottom cell
        //find the first index of a filled cell
        const cellIndex = column.cells.findIndex(cell => cell.filled === true)

        //if -1 then fill in the bottom cell
        if(cellIndex === -1){
            column.cells[column.cells.length-1].filled = true;
            column.cells[column.cells.length-1].colour = turn;
        }
        //if not 0 then fill in the cell above
        else if(cellIndex !== 0){
            column.cells[cellIndex-1].filled = true;
            column.cells[cellIndex-1].colour = turn;
        }
        //if 0 then alert user that column is full
        else{
            alert("This column is full");
            return
        }

        //update the gameboard
        setBoard(newBoard)

        //check if game is in a winning state
        if(gameWon()){
            alert(`${turn} wins!`);
            newBoard.status = "finished";
            setBoard(newBoard)
            return;
        }


        const newState = (turn === 'Red') ? 'Green' : 'Red';
        setTurn(newState);


    }


    return (
        <div>
            <h2>Next player: {turn}</h2>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='stretch'
            >
                {board.columns.map((column, i) => {
                    return <Column key={i} id={column.id} cells={column.cells} handleClick={makePlay} />
                })}
            </Grid>
        </div>
    )

}

const boardStart = {
    "status":"unfinished",
    "columns":[
        {
            "id":1,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        },
        {
            "id":2,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        },
        {
            "id":3,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        },
        {
            "id":4,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        },
        {
            "id":5,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        },
        {
            "id":6,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        },
        {
            "id":7,
            "cells":[
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },               
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                },   
                {
                    "colour":null,
                    "filled":false
                },                
                {
                    "colour":null,
                    "filled":false
                }
            ]
        }
    ]

}

export default Board;