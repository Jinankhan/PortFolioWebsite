import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { NAVBAR_ELEMENTS } from '../../../utils/constants';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icon';
import logo from '../../../../public/assets/icons/HeaderLogo.svg';
import logo2 from '../../../../public/assets/icons/headerlogo2.svg';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '../../atoms/Button';
import { animated, useSpring } from '@react-spring/web';
import { Link } from 'react-scroll';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import menu from '../../../../public/assets/icons/menu.svg';

const Navbar = () => {
    const AnimatedBox = animated(Box);
    const [styles, api] = useSpring(() => ({
        from: { x: -100, scale: 1 },
        to: { x: 0, scale: 1 }
    }));

    const handleMouseEnter = () => {
        api.start({ scale: 1.2 });
    };

    const handleMouseLeave = () => {
        api.start({ scale: 1 });
    };
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const navStyles = useSpring({
        from: { y: -100 },
        to: { y: 0 }
    });

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const isMaxWidth1500 = useMediaQuery('(min-width:1500px)');
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {NAVBAR_ELEMENTS.map((item) => (
                    <ListItem
                        key={item.id}
                        disablePadding
                        sx={{ marginBottom: '47px' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon
                                    src={item.icon}
                                    sx={{ width: 24, height: 24 }}
                                />
                            </ListItemIcon>
                            <Link
                                to={item.path}
                                smooth={true}
                                duration={1000}
                                onClick={() =>
                                    setState({ ...state, right: false })
                                }
                            >
                                <Typography
                                    variant="h6"
                                    color="text.lowEmphasis"
                                >
                                    {item.name}
                                </Typography>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <SwipeableDrawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
                sx={{
                    '& .MuiDrawer-paper': {
                        background: '#19181C',
                        color: 'text.highEmphasis',
                        padding: '40px'
                    }
                }}
            >
                {list('right')}
            </SwipeableDrawer>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'black',
                    color: 'white'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '50px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '80%'
                    }}
                >
                    <AnimatedBox
                        style={{
                            ...styles
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Icon src={logo} sx={{ width: 100, height: 156 }} />
                        <Icon src={logo2} sx={{ width: 60, height: 100 }} />
                    </AnimatedBox>
                    {isMaxWidth1500 && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '15px',
                                justifyContent: 'space-between'
                            }}
                        >
                            {NAVBAR_ELEMENTS.map((item) => {
                                return (
                                    <AnimatedBox
                                        style={navStyles}
                                        key={item.id}
                                        sx={{
                                            borderBottom:
                                                '1px solid transparent',
                                            padding: '14px',
                                            borderRadius: '10px',
                                            background:
                                                'rgba(255, 255, 255, 0.1)'
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <Link
                                                to={item.path}
                                                smooth={true}
                                                duration={1000}
                                            >
                                                {item.name}
                                            </Link>
                                        </Typography>
                                    </AnimatedBox>
                                );
                            })}
                        </Box>
                    )}

                    {!isMaxWidth1500 && (
                        <Button onClick={toggleDrawer('right', true)}>
                            <Icon src={menu} sx={{ width: 40, height: 40 }} />
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Navbar;
