import Cell from './Cell.js';
import Grid from '@material-ui/core/Grid';
import './style.css';

const Column = (props) => {

    const id = props.id;
    const handleClick = props.handleClick;
    const cells = props.cells

    return (
        <div className='column' onClick={() => handleClick(id)}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {cells.map((cell, i) => {
                    return <Cell key={i} colour={cell.colour} />
                })}

            </Grid>
            
        </div>

    )
}

export default Column