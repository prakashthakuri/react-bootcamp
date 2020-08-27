import React from 'react'

export function withExtraPropAdded(component) {
    const Component = component
    return function(props) {
        return(
            <Component anotherProp = "This is your message from another prop" {...props} />
        )
    }
}