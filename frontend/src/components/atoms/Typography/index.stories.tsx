import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Typography, { TypographyProps } from '.';

export default {
    title: 'atoms/Typography',
    component: Typography,
    argTypes:{
        variant:{
            control:'select',
            options:['h1','h2','h3','body1','body2','caption','title','logo','button1','button2']
            
        }
      }
  } as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is the default typography component.'
};

export const Heading = Template.bind({});
Heading.args = {
    variant: 'h1',
    children: 'This is body text.'
};
