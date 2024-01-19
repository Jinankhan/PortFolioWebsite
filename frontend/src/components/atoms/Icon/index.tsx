import styled from '@emotion/styled';
import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';
export interface IIconProps extends SvgIconProps {
    src: string | undefined;
    sx?: React.CSSProperties;
    filled?: boolean;
    onClick?: () => void;
}
const StyledIcon = styled('img')(({ filled, sx }: IIconProps) => ({
    cursor: 'pointer',
    filter: filled
        ? 'brightness(0) saturate(100%) invert(80%) sepia(17%) saturate(6603%) hue-rotate(199deg) brightness(99%) contrast(107%);'
        : 'none',
    ...sx
}));

const Icon = ({ src, filled, onClick, sx }: IIconProps) => {
    return (
        <StyledIcon
            src={src}
            filled={filled}
            onClick={onClick}
            sx={sx}
            data-testid="icon"
        />
    );
};

export default Icon;
