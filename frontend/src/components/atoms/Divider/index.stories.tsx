import { Meta, StoryFn } from '@storybook/react';
import Divider, { IDividerProps } from '.';
import React from 'react';
export default {
    title: 'atoms/Divider',
    component: Divider,
    decorators: [(Story) => <Story />],
    tags: ['autodocs']
} as Meta;

const template: StoryFn<IDividerProps> = (args) => <Divider {...args} />;

export const DividerStory = template.bind({});
