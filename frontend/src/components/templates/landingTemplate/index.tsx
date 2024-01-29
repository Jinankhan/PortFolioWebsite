import { Box, Paper } from '@mui/material';
import React from 'react';
import Navbar from '../../organisms/Navbar';
import Footer from '../../molecules/Footer';
interface ILandingTempLateProps {
    slots: { content: React.ReactNode; id: number }[];
}
const LandingTemplate = ({ ...props }: ILandingTempLateProps) => {
    return (
        <Paper
            sx={{
                width: '100%',
                height: '100%',
                background: '#19181C',
                color: 'white',
                borderRadius: 0
            }}
        >
            <Navbar />
            {props.slots.map((slot) => {
                return <Box key={slot.id}>{slot.content}</Box>;
            })}
            <Footer />
        </Paper>
    );
};

export default LandingTemplate;
