import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
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
import theme from '../../../theme';
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

    const navStyles = useSpring({
        from: { y: -100 },
        to: { y: 0 }
    });

    const [state, setState] = React.useState(false);
    const isMaxWidth1500 = useMediaQuery('(min-width:1500px)');

    const [activeItem, setActiveItem] = useState('about');
    const toggleDrawer = (open: boolean) => {
        setState(open);
    };

    const handleNavigation = (path: string) => {
        setActiveItem((prev) => (prev === path ? prev : path));
    };
    const list = () => (
        <Box
            sx={{
                width: 250
            }}
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
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
                                offset={-165}
                                onClick={() => setState(false)}
                            >
                                <Typography
                                    variant="h6"
                                    color={
                                        activeItem === item.path
                                            ? 'text.highEmphasis'
                                            : 'text.lowEmphasis'
                                    }
                                    onClick={() => handleNavigation(item.path)}
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
                open={state}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
                sx={{
                    '& .MuiDrawer-paper': {
                        background: '#19181C',
                        color: 'text.highEmphasis',
                        padding: '40px'
                    }
                }}
            >
                {list()}
            </SwipeableDrawer>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.9)',
                    color: 'white',
                    position: 'sticky',
                    zIndex: 999,
                    top: 0
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
                                                activeItem === item.path
                                                    ? theme.palette.primary
                                                          .alphaPurple500
                                                    : 'rgba(255, 255, 255, 0.1)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() =>
                                            handleNavigation(item.path)
                                        }
                                    >
                                        <Typography variant="h3">
                                            <Link
                                                to={item.path}
                                                smooth={true}
                                                duration={1000}
                                                offset={-165}
                                                onClick={() =>
                                                    handleNavigation(item.path)
                                                }
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
                        <Button onClick={() => toggleDrawer(true)}>
                            <Icon src={menu} sx={{ width: 40, height: 40 }} />
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Navbar;
