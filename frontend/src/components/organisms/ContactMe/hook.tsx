import React, { useState } from 'react';
import { FORM_ERRORS } from '../../../utils/constants';
import axios from 'axios';

export interface IFormStateProps {
    name: string;
    email: string;
    message: string;
    nameError: string;
    emailError: string;
    messageError: string;
}

export const useSignUpValidation = () => {
    const SLACK_API = process.env.REACT_APP_SLACK_API as string;
    const defaultFormValues = {
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: ''
    };
    const validatedFields = ['name', 'email', 'message'];
    const [formState, setFormState] =
        useState<IFormStateProps>(defaultFormValues);
    const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const handleFieldChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));

        switch (name) {
            case 'name':
                return setFormState((prev) => ({
                    ...prev,
                    nameError: value.length >= 3 ? '' : FORM_ERRORS.nameError
                }));

            case 'email':
                return setFormState((prev) => ({
                    ...prev,
                    emailError: new RegExp(EMAIL_REGEX).test(value)
                        ? ''
                        : FORM_ERRORS.emailError
                }));

            case 'message':
                return setFormState((prev) => ({
                    ...prev,
                    messageError:
                        formState.message.length <= 150 &&
                        formState.message.length >= 5
                            ? ''
                            : FORM_ERRORS.messageEror
                }));
        }
    };

    const data = {
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: `*:pilot:${formState.name}. ${formState.email}*\n ${formState.message}.`
                }
            }
        ]
    };
    const handleSubmit = () => {
        axios.post(SLACK_API, JSON.stringify(data));
    };

    const validateButton = () => {
        return validatedFields.every((field) => {
            switch (field) {
                case 'name':
                    return formState.name.length >= 3;
                case 'email':
                    return new RegExp(EMAIL_REGEX).test(formState.email);

                case 'message':
                    return (
                        formState.message.length <= 150 &&
                        formState.message.length >= 5
                    );
            }
        });
    };
    return {
        formState,
        validateButton,
        handleFieldChange,
        handleSubmit
    };
};
