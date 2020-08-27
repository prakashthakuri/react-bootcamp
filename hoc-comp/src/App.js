import React from 'react';
import {withPointlessHOC} from './withPointlessHOC'
import {withExtraPropAdded} from './withExtraOrioAdded'
import {withFavoriteNumber} from './withFavoriteNumber'
import Favorite from './Favorite';
import Menu from './Menu'


function App() {
  // console.log(props)
  return (
    <div>
      <Menu something="whatever"/>
      <hr/>
      <Favorite/>
    </div>
  );
}



// const PointlessHOC = withFavoriteNumber(App);
// export default withFavoriteNumber(App);
export default App