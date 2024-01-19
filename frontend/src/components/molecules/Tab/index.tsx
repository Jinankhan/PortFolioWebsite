import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

interface ITabProps {
    tabs: { id: number; content: React.ReactNode; label: string }[];
    onChange: (value: number) => void;
    value: number;
}
const TabComponent = ({ ...props }: ITabProps) => {
    return (
        <Tabs
            onChange={(
                event: React.SyntheticEvent<Element, Event>,
                value: number
            ) => props.onChange(value)}
            value={props.value}
        >
            {props.tabs.map((item) => {
                return <Tab key={item.id} label={item.label}></Tab>;
            })}
        </Tabs>
    );
};

export default TabComponent;
