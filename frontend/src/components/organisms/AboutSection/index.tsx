import React, { useEffect, useState } from 'react';
import Typography from '../../atoms/Typography';
import { Box, Stack } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import innovation from '../../../../public/assets/icons/innovation.svg';
import Icon from '../../atoms/Icon';
import { ABOUT_SECTION, ROLE_LIST } from '../../../utils/constants';
const AboutSection = () => {
    const [positionX2, setPositionX2] = useState(0);

    const [activeRole, setActiveRole] = useState(0);
    const [styles2, api2] = useSpring(() => ({
        from: { y: positionX2 },
        config: { duration: 1000 },
        onChange: (e) => {
            setPositionX2(e.value.x);
        }
    }));

    const [styles] = useSpring(() => ({
        from: { y: -100 },
        to: { y: 0 }
    }));

    const [styles3] = useSpring(() => ({
        from: { x: -100 },
        to: { x: 0 }
    }));

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRole((prevRole) => (prevRole + 1) % ROLE_LIST.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const AnimatedBox = animated(Box);
    const AnimatedText = animated(Typography);
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 30,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 40
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: 30,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '85%',
                    '@media (max-width :885px)': {
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }
                }}
            >
                <Box
                    sx={{
                        maxWidth: 570
                    }}
                >
                    <Stack direction={'column'} marginBottom={'10px'}>
                        <AnimatedText
                            variant="title2"
                            style={styles}
                            sx={{
                                marginBottom: '20px',
                                '@media (max-width :885px)': {
                                    fontSize: 40
                                }
                            }}
                        >
                            {ABOUT_SECTION.title}
                        </AnimatedText>

                        <Typography
                            variant="title"
                            color={ROLE_LIST[activeRole].color}
                            sx={{
                                '@media (max-width :575px)': {
                                    fontSize: 60
                                }
                            }}
                        >
                            {ROLE_LIST[activeRole].role} Developer
                        </Typography>
                    </Stack>

                    <AnimatedText
                        variant="h5"
                        color="text.lowEmphasis"
                        style={styles3}
                    >
                        Passionate about crafting impactful digital experiences
                        with a blend of design finesse and clean code.
                    </AnimatedText>
                </Box>

                <AnimatedBox
                    onMouseEnter={() => {
                        api2.start({
                            from: {
                                y: positionX2
                            },
                            to: {
                                y: 100
                            }
                        });
                    }}
                    onMouseLeave={() => {
                        api2.start({
                            from: {
                                y: positionX2
                            },
                            to: {
                                y: 0
                            }
                        });
                    }}
                    style={styles2}
                    sx={{
                        width: 300,
                        height: 300,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        background: ROLE_LIST[activeRole].color
                    }}
                >
                    <Icon src={innovation} sx={{ width: 330, height: 330 }} />
                </AnimatedBox>
            </Box>
        </Box>
    );
};

export default AboutSection;
