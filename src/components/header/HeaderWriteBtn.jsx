import React from 'react'
import { useRoter } from '../../hooks/commen';
import * as Comm from '../common';

export const HeaderWriteBtn = ({ color, fcolor, path, text }) => {
  const { onNavigate } = useRoter();
  return (
    <Comm.Button
      $type="header"
      $color={Comm.theme.color[`${color}`]}
      $fcolor={Comm.theme.color[`${fcolor}`]}
      onClick={onNavigate(path)}
    >
      <Comm.FlexBox>
        <Comm.AlbaIcons top={-44} size={30} />
        <p>{text}</p>
      </Comm.FlexBox>
    </Comm.Button>
  );
};
