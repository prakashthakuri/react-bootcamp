import React from 'react'
import Toggler from './HOCs/Toggler'

function Menu(props) {

        return (
            <Toggler defaultOnValue= {true}  render= { (on, toggle)=> (

            <div>
                <button onClick= {toggle}> {on ? "Hide" : "Show" } Menu </button>
                    <nav style= {{display: on ? "block" : "none" }}>

                        <h6>Signed in as Prakash</h6><br/>
                        <a>Your Profile</a><br/>
                        <a>Your Repositories</a><br/>
                        <a>Your Stars</a><br/>
                        <a>Your Gists</a><br/>
        
                </nav>
            </div>
            )} />
        )
    }
// }

// export default withToggler(Menu, {defaultOnValue: true})
export default Menu