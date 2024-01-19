import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Icon, { IIconProps } from '.';
import lock from '../../../../public/assets/icons/lock.svg';
export default {
    title: 'atoms/Icon',
    decorators: [(Story) => <Story />],
    tags: ['autodocs'],
    component: Icon
} as Meta;

const template: StoryFn<IIconProps> = (args) => <Icon {...args} />;

export const IconStory = template.bind({});

IconStory.args = {
    src: lock,
    filled: true
};
