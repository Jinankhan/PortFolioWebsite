import React from 'react';
import { DividerProps, Divider as MuiDivider } from '@mui/material';

export type IDividerProps = DividerProps;

const Divider = ({ ...props }: IDividerProps) => {
    return <MuiDivider {...props} data-testid="divider" />;
};

export default Divider;
