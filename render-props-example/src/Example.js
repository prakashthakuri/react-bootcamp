import React from 'react'

function Example(props) {
    return(
<h1>Hi {props.render(true, 42)}</h1>
)
}

export default Example