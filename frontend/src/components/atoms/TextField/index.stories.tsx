import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import TextField, { ITextFieldProps } from '.';
import theme from '../../../theme';
import lock from '../../../../public/assets/icons/lock.svg';
export default {
    title: 'atoms/TextField',
    decorators: [(Story) => <Story />],
    tags: ['autodocs'],
    component: TextField
} as Meta;

const template: StoryFn<ITextFieldProps> = (args) => <TextField {...args} />;

export const PrimaryTextFieldStory = template.bind({});

PrimaryTextFieldStory.args = {
    placeholder: 'name',
    sx: { width: theme.spacing(113.75) }
};

export const SecondaryTextFieldStory = template.bind({});

SecondaryTextFieldStory.args = {
    placeholder: 'name',
    sx: { width: theme.spacing(113.75) },
    starticon: lock
};
