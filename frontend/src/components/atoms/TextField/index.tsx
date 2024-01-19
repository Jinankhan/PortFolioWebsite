import {
    OutlinedTextFieldProps,
    styled,
    TextField as MuiTextField
} from '@mui/material';
import React from 'react';
import Icon from '../Icon';

export interface ITextFieldProps extends Partial<OutlinedTextFieldProps> {
    endAdornment?: React.ReactNode;
    activeicon?: boolean;
    starticon?: string;
}
const StyledTextField = styled(MuiTextField)({
    display: 'flex',
    flexShrink: 0
});

const TextField = ({ ...props }: ITextFieldProps) => {
    return (
        <StyledTextField
            data-testid="textField"
            {...props}
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <Icon src={props.starticon} filled={props.activeicon} />
                ),
                endAdornment: props.endAdornment
            }}
            autoComplete="off"
        />
    );
};

export default TextField;
