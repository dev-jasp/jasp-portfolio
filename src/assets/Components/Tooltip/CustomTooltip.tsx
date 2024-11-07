import React from 'react';
import { Tooltip } from 'antd';

interface CustomTooltipProps {
  title: string; 
  children: React.ReactNode;  
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ title, children }) => (
  <Tooltip 
    title={title} 
    placement='bottom'
    overlayClassName="custom-tooltip" // Add a custom class
  >
    {children}
  </Tooltip>
);

export default CustomTooltip;