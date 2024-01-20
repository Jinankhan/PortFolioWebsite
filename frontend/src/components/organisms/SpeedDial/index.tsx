import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Icon from '../../atoms/Icon';
import chat from '../../../../public/assets/icons/chat.svg';

interface ISpeedDialProps {
    content: { icon: React.ReactNode; name: string; link: string }[];
}
const ControlledOpenSpeedDial = ({ ...props }: ISpeedDialProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleIconClick = (link: string) => {
        window.open(link, '_blank');
        handleClose();
    };

    return (
        <Box sx={{ height: 20, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<Icon src={chat} sx={{ width: 40, height: 40 }} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {props.content.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleIconClick(action.link)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
};

export default ControlledOpenSpeedDial;
