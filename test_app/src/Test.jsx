import React, {useContext} from 'react';
import { DataContext } from './DataContext';

function Test() {

  const contextData = useContext(DataContext);

  return ( 
    <>
      <button onClick={() => contextData.setData(contextData.data + 1)}>incre</button>
      <button onClick={() => contextData.setData(contextData.data - 1)}>decre</button>
    </>
   );
}

export default Test;