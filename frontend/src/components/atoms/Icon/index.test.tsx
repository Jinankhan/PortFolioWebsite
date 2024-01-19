import { fireEvent, render, screen } from '@testing-library/react';
import Icon from '.';
import React from 'react';
import lock from '../../../../public/assets/icons/lock.svg';
const mockOnClick = jest.fn();
describe('Icon', () => {
    it('should render the component', () => {
        render(<Icon onClick={mockOnClick} src={lock} />);
        const component = screen.getByTestId('icon');
        expect(component).toBeDefined();
        fireEvent.click(component);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should render a coloured variant when providing filled prop', () => {
        render(<Icon filled src={lock} />);
        const component = screen.getByTestId('icon');
        expect(component).toBeDefined();
    });
});
