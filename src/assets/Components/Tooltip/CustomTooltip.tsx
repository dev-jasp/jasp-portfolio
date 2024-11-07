import React from 'react';
import { Tooltip } from 'antd';

interface CustomTooltipProps {
  title: string; 
  children: React.ReactNode;  
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ title, children }) => (
  <Tooltip title={title} overlayStyle={{ zIndex: 9999 }}>
  {children}
</Tooltip>
);

export default CustomTooltip;
