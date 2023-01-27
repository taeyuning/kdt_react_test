import React, {useContext} from 'react';
import { DataContext } from './DataContext';

function Price() {

  const contextData = useContext(DataContext);

  return ( 
    <h2>price : {contextData.price} X qty: {contextData.data} </h2>
  );
}

export default Price;