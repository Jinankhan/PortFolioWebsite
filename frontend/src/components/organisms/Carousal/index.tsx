import { Box, useMediaQuery } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import React, { ReactNode, useEffect, useState } from 'react';
import Icon from '../../atoms/Icon';
import chevronLeft from '../../../../public/assets/icons/chevronLeft.svg';
import chevronRight from '../../../../public/assets/icons/chevronRight.svg';
interface ICarousalProps {
    carousalList: { content: ReactNode; id: number }[];
}

const Carousal = ({ ...props }: ICarousalProps) => {
    const CarousalContainer = animated(Box);
    const [activeIndex, setActiveIndex] = useState(0);

    const isMaxWidth340 = useMediaQuery('(max-width:400px)');
    const slideIn = useSpring({
        opacity: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        from: { opacity: 0, display: 'none' },
        reset: true
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(
                (prevIndex) => (prevIndex + 1) % props.carousalList.length
            );
        }, 7000);

        () => {
            clearInterval(interval);
        };
    }, []);
    const isMaxWidth1500 = useMediaQuery('(min-width:800px)');
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon
                src={chevronLeft}
                onClick={() => {
                    const newIndex =
                        (activeIndex - 1 + props.carousalList.length) %
                        props.carousalList.length;
                    setActiveIndex(newIndex);
                }}
                sx={{
                    width: isMaxWidth340 ? 20 : 40,
                    height: isMaxWidth340 ? 20 : 40
                }}
            />
            <CarousalContainer
                style={{
                    ...slideIn,
                    transition: 'opacity 0.5s ease-in-out'
                }}
                sx={{
                    width: !isMaxWidth1500 ? 450 : 700,
                    height: 500,
                    '@media (max-width: 536px)': {
                        width: 326
                    }
                }}
                key={props.carousalList[activeIndex].id}
            >
                {props.carousalList[activeIndex].content}
            </CarousalContainer>
            <Icon
                src={chevronRight}
                onClick={() =>
                    setActiveIndex(
                        (prevIndex) =>
                            (prevIndex + 1) % props.carousalList.length
                    )
                }
                sx={{
                    width: isMaxWidth340 ? 20 : 40,
                    height: isMaxWidth340 ? 20 : 40
                }}
            />
        </Box>
    );
};

export default Carousal;
