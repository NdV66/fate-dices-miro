import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ButtonProps } from '../../elements/Button';

const TEXT = 'Button text';

const props: ButtonProps = {
    onClick: jest.fn(),
    text: TEXT,
    disabled: false,
};

describe('Button', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Primary', () => {
        test('Should render primary button', async () => {
            const { getByText } = render(<Button.Primary {...props} />);
            const result = getByText(TEXT);

            expect(result).toHaveClass('button');
            expect(result).toHaveClass('button-small');
            expect(result).toHaveClass('button-primary');
        });
    });

    describe('Secondary', () => {
        test('Should render secondary button', async () => {
            const { getByText } = render(<Button.Secondary {...props} />);
            const result = getByText(TEXT);

            expect(result).toHaveClass('button');
            expect(result).toHaveClass('button-small');
            expect(result).toHaveClass('button-secondary');
        });
    });
});

export {};
