import { Box } from '@mui/material';
import {
    ACTIONS,
    CONTACT_ME,
    CONTACT_ME_FIELDS,
    EMOTICON_STATE
} from '../../../utils/constants';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import React from 'react';
import ControlledOpenSpeedDial from '../SpeedDial';
import { IFormStateProps, useSignUpValidation } from './hook';
import Typography from '../../atoms/Typography';

const ContactMe = () => {
    const { handleFieldChange, formState, validateButton, handleSubmit } =
        useSignUpValidation();

    return (
        <>
            <Box
                sx={{
                    gap: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '80px 0 260px 0'
                }}
            >
                <Box
                    sx={{
                        gap: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        width: 600,
                        '@media ( max-width : 643px)': {
                            width: 300
                        }
                    }}
                >
                    {CONTACT_ME_FIELDS.map((field) => {
                        return (
                            <TextField
                                key={field.id}
                                placeholder={field.placeholder}
                                multiline={field.name === 'message'}
                                rows={field.name === 'message' ? 5 : 0}
                                name={field.name}
                                onChange={(e) => handleFieldChange(e)}
                                value={
                                    formState[
                                        field.name as keyof IFormStateProps
                                    ]
                                }
                                error={Boolean(
                                    formState[
                                        `${field.name}Error` as keyof IFormStateProps
                                    ]
                                )}
                                helperText={
                                    formState[
                                        `${field.name}Error` as keyof IFormStateProps
                                    ]
                                }
                                endAdornment={
                                    <Typography variant="h6">
                                        {formState[
                                            `${field.name}Error` as keyof IFormStateProps
                                        ] === ''
                                            ? EMOTICON_STATE[0]
                                            : EMOTICON_STATE[1]}
                                    </Typography>
                                }
                            />
                        );
                    })}
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            variant="contained"
                            disabled={!validateButton()}
                            onClick={handleSubmit}
                        >
                            {CONTACT_ME.message}
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ControlledOpenSpeedDial content={ACTIONS} />
        </>
    );
};

export default ContactMe;
