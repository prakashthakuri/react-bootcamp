import React, { Component } from 'react'
import {withToggler} from './HOCs/withToggler'

function Menu(props) {
    // state = {
    //     show: true
    // }

    // toggleShow = () => {
    //     this.setState(prevState =>  {
    //         return {
    //             show: !prevState.show
    //         }
    //     })
    // }
    // render () {
        return (
            <div>
                <button onClick= {this.toggle}> {this.props.on ? "Hide" : "Show" } Menu </button>
                    <nav style= {{display: props.on ? "block" : "none" }}>

                        <h6>Signed in as Prakash</h6>
                        <a>Your Profile</a>
                        <a>Your Repositories</a>
                        <a>Your Stars</a>
                        <a>Your Gists</a>
        
                </nav>
            </div>
        )
    }
// }

export default withToggler(Menu, {defaultOnValue: true})