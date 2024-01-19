import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';
import React from 'react';
import lock from '../../../../public/assets/icons/lock.svg';
describe('TextField', () => {
    it('should render the component', () => {
        render(<TextField />);
        const component = screen.getByTestId('textField');
        expect(component).toBeDefined();
    });

    it('should be able to reflect the text being typed', async () => {
        render(<TextField placeholder="enter name" />);
        const component = screen.getByTestId('textField');
        expect(component).toBeDefined();

        const Textfield: HTMLInputElement =
            screen.getByPlaceholderText('enter name');
        fireEvent.change(Textfield, {
            target: { value: 'John' }
        });
        expect(Textfield.value).toBe('John');
    });

    it('should be able to render the start icon when provided', async () => {
        render(<TextField placeholder="enter name" starticon={lock} />);
        const component = screen.getByTestId('textField');
        expect(component).toBeDefined();
        expect(screen.getByTestId('icon')).toBeDefined();
    });
});
