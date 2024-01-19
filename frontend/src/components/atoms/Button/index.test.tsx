import { render, screen } from '@testing-library/react';
import Button from '.';
import React from 'react';
import Typography from '../Typography';
import '@testing-library/jest-dom';

describe('Button Component', () => {
    test('should verify component render', () => {
        render(
            <Button>
                <Typography variant="button1"> Review Credit</Typography>
            </Button>
        );
        const buttonComponent = screen.getByTestId('button');
        expect(buttonComponent).toBeInTheDocument();
        expect(screen.getByText(/review credit/i)).toBeInTheDocument();
    });

    test('should verify component in disabled manner', () => {
        render(
            <Button disabled>
                <Typography variant="button1"> Review Credit</Typography>
            </Button>
        );
        const buttonComponent = screen.getByTestId('button');
        expect(buttonComponent).toBeDisabled();
        expect(screen.getByText(/review credit/i)).toBeInTheDocument();
    });
});
