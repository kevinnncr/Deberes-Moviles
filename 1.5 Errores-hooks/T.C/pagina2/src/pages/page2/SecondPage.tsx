import React from 'react';
import Component1 from '../../components/component1';
import Component2 from '../../components/component2';
import Component3 from '../../components/component3';
import Component4 from '../../components/component4';
import Component5 from '../../components/component5';
import Component6 from '../../components/component6';
import { Flex,  } from 'antd';

const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 200, 
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  background: 'grey',
  
  
};



const SecondPage: React.FC = () => {
  return (
    <Flex wrap="wrap" align="center">
      <div style={baseStyle}>
        <Component1 />
      </div>
      <div style={baseStyle}>
        <Component2 />
      </div>
      <div style={baseStyle}>
        <Component3 />
      </div>
      <div style={baseStyle}>
        <Component4 />
      </div>
      <div style={baseStyle}>
        <Component5 />
      </div>
      <div style={baseStyle}>
        <Component6 />
      </div>
    </Flex>
  );
};

export default SecondPage;
