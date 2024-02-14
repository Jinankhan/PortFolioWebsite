import React, { useState } from 'react';
import {
    EMAIL_API,
    FORM_ERRORS,
    RECIPIENT_EMAIL,
    SERVICE_ID,
    TEMPLATE_ID,
    USER_ID
} from '../../../utils/constants';
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
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: USER_ID,
        template_params: {
            from_name: formState.name,
            from_email: formState.email,
            message: formState.message,
            to_name: RECIPIENT_EMAIL
        }
    };
    const handleSubmit = () => {
        axios.post(EMAIL_API, data);
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
