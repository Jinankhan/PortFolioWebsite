import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '../../atoms/Typography';
import { Box } from '@mui/material';
import Icon from '../../atoms/Icon';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import leftArrow from '../../../../public/assets/Images/downArrow.svg';
interface ICardProps {
    icon: string;
    title: string;
    description: string;
    about: string;
    sx?: React.CSSProperties;
    background?: string;
}
const Cards = ({ ...props }: ICardProps) => {
    return (
        <Card
            sx={{
                overflow: 'visible',
                ...props.sx,
                paddingTop: '30px',
                background: props.background
            }}
        >
            <CardContent
                sx={{
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '30px',
                    boxShadow: 'none'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        alignItems: 'center'
                    }}
                >
                    <Icon
                        src={props.icon}
                        sx={{
                            height: 100,
                            width: 100
                        }}
                    />
                    <Typography variant="title">{props.title}</Typography>
                </Box>

                <Accordion
                    sx={{
                        '&.MuiAccordion-root:before': {
                            background: 'none'
                        },
                        '&.MuiAccordion-root.MuiPaper-root': {
                            boxShadow: 'none',
                            background: 'transparent'
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<Icon src={leftArrow} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant="h3">{props.about}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            '&.MuiAccordionDetails-root': {
                                padding: 0,
                                background: 'transparent'
                            }
                        }}
                    >
                        <Typography variant="body1" sx={{ lineHeight: 1 }}>
                            {props.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    );
};

export default Cards;
