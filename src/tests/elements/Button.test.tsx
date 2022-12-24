import { fireEvent, render } from '@testing-library/react';
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
        const renderElement = () => {
            const { getByText } = render(<Button.Primary {...props} />);
            return getByText(TEXT);
        };

        test('Should render primary button', () => {
            const result = renderElement();

            expect(result).toHaveClass('button');
            expect(result).toHaveClass('button-small');
            expect(result).toHaveClass('button-primary');
        });

        test('Should call onClick()', async () => {
            const result = renderElement();

            await fireEvent.click(result);
            expect(props.onClick).toBeCalled();
        });

        test('Should be disabled', async () => {
            const { getByText } = render(<Button.Primary {...props} disabled />);
            const result = getByText(TEXT);

            await fireEvent.click(result);

            expect(result).toBeDisabled();
            expect(props.onClick).not.toBeCalled();
        });
    });

    describe('Secondary', () => {
        const renderElement = () => {
            const { getByText } = render(<Button.Secondary {...props} />);
            return getByText(TEXT);
        };

        test('Should render secondary button', () => {
            const result = renderElement();

            expect(result).toHaveClass('button');
            expect(result).toHaveClass('button-small');
            expect(result).toHaveClass('button-secondary');
        });

        test('Should call onClick()', async () => {
            const result = renderElement();

            await fireEvent.click(result);
            expect(props.onClick).toBeCalled();
        });

        test('Should be disabled', async () => {
            const { getByText } = render(<Button.Secondary {...props} disabled />);
            const result = getByText(TEXT);

            await fireEvent.click(result);

            expect(result).toBeDisabled();
            expect(props.onClick).not.toBeCalled();
        });
    });
});

export {};
