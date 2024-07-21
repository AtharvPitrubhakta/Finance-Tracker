import React from 'react'
import { Spin } from 'antd';

function Spinner() {
  return (
    <div className='spinner'>
        <Spin style={{color:'gray'}} size='large'/>
    </div>
  );
}

export default Spinner