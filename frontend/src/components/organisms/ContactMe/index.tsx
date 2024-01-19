import { Box } from '@mui/material';
import { ACTIONS, CONTACT_ME_FIELDS } from '../../../utils/constants';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import React from 'react';
import ControlledOpenSpeedDial from '../SpeedDial';
import { IFormStateProps, useSignUpValidation } from './hook';
import Typography from '../../atoms/Typography';

const ContactMe = () => {
    const { handleFieldChange, formState, validateButton, handleSubmit } =
        useSignUpValidation();

    console.log(formState);
    console.log(validateButton());

    const ErrorState = ['😊', ' 😞'];

    return (
        <>
            <Box
                sx={{
                    gap: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '80px'
                }}
            >
                <Box>
                    <Typography variant="h6">
                        Fill the form carefully!
                        {validateButton() ? ErrorState[0] : ErrorState[1]}
                    </Typography>
                </Box>
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
                                placeholder={field.placeholder}
                                key={field.id}
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
                            />
                        );
                    })}
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            variant="contained"
                            disabled={!validateButton()}
                            onClick={handleSubmit}
                        >
                            Launch message
                        </Button>
                    </Box>
                </Box>
            </Box>
            <ControlledOpenSpeedDial content={ACTIONS} />
        </>
    );
};

export default ContactMe;
