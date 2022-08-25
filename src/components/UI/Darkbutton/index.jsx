import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Darkbutton({name,bgColor,BorderColor,mx , ...rest}) {

  const getBgColor = () => {
    return !!bgColor? bgColor : "transparent"
  }
  const getBorder = () => {
    return !!BorderColor? BorderColor : "transparent"
  }


  return (
    <Stack marginX={!!mx && mx}>
      <Button mt={1} style={{borderRadius: '4px',background: getBgColor(),color:'#fff',width: '118px',border: getBorder()}} {...rest}>{name}</Button>
    {/* // <Button  >name</Button> */}
    </Stack>
      )
}
