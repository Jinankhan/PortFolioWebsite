import { render, screen } from '@testing-library/react';
import Divider from '.';
import React from 'react';
import '@testing-library/jest-dom';

describe('Divider', () => {
    it('should render the component', () => {
        render(<Divider />);
        const component = screen.getByTestId('divider');
        expect(component).toBeInTheDocument();
    });
});
