import React from 'react';

import Favorite from './Favorite'

import Menu from './Menu'
// import Toggler from './HOCs/Toggler';

//We can directly render the Toogler in the app and wrap it up on the div with Menu function so that it might be effective in some cases

function App() {
  // console.log(props)
  return (
    <div>
      {/* <Toggler defaultOnVale= {true} render={({on, toggle}) => {
        return (
          <Menu on= {on} toogle = {toggle}/>
        )
      }} ></Toggler> */}
       <Menu />
      <hr/>
      <Favorite/>
    </div>
  )
}
// const PointlessHOC = withFavoriteNumber(App);
// export default withFavoriteNumber(App);
export default App