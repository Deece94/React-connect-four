import './style.css'

const Cell = (props) => {

    const colour = props.colour;

    if(colour === 'Red'){
        return (
            <div className="circleBase red">
    
            </div>
        )
    }

    else if(colour === 'Green'){
        return (
            <div className="circleBase green">
    
            </div>
        )
    }

    return (
        <div className="circleBase">

        </div>
    )

}

export default Cell

