import React from 'react'

export function withFavoriteNumber(component) {
    const Component = component
    return function(props){
        return (
            <Component favoriteNumber = {24} {...props}/>
        )

    }

}