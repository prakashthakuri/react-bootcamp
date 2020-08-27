import React, {Component} from 'react'
import {withToggler} from './HOCs/withToggler'


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
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span onClick= {props.toogle}>
                        {props.on ? "♥️" : "💙" }
                    </span>
                </h1>
            </div>
        )
    }
// }

const SuperchargedFavoriteComponent = withToggler(Favorite, {defaulyOnValue: false})
// export default withToggler(Favorite)
export default SuperchargedFavoriteComponent