import React, { Component } from 'react'

//HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

class Toggler extends Component {

    state= {
        on: this.props.defaultOnValue
    }

    static defaultPorps= {
        defaultOnValue: false
    }

    toggle= () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        // const Component = this.props.component //this component can be everything.
        return (
            <div>
                
            {this.props.render(this.state.on, this.toggle)}
        
            </div>
            )
    }


}
//   function withToggler(component) {
//     return function(props) {
//         return (
//             <Toggler component= {component} defaultOnValue= {optionsObj.defaultOnValue} {...props} />
//         )
//     }
// }

// export function withToggler(component, optionsObj) {
//     return function(props) {
//         return (
//             <Toggler component = {component} defaultOnValue= {optionsObj.defaultOnValue} {...props} />
//         )
//     }
// }

export default Toggler