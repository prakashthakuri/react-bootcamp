import React from 'react'
import Toggler from './HOCs/Toggler'


function Favorite(props) {

// this is coming form withToggler
    // state = {
    //     isFavorited: false
    // }

    // toogleFavorite = () => {
    //     this.setState(prevState => {
    //         return {
    //             isFavotired: !prevState.isFavorited
    //         }
    //     })
    // }

    // render() {
        return (
            <Toggler defaultOnValue= {true} render= {(on, toggle)=> ( // with arrow function you just remove the paranthessis and return keyword

                    <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span 
                            onClick= {toggle}
                        >
                            {on ?  "💙" : "♥️" }
                        </span>
                    </h1>
                </div>

            )
            
            }/>
           
        )
    }
// }

// const SuperchargedFavoriteComponent = withToggler(Favorite, {defaulyOnValue: false})
// export default withToggler(Favorite)
// export default SuperchargedFavoriteComponent

export default Favorite