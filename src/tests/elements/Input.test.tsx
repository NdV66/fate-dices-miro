import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Input, InputProps } from '../../elements/Input';

const LABEL = 'I like Lord of The Rings.';
const TEST_ID = 'basicInput';
const INPUT_SELECTOR = 'input';

const props: InputProps = {
    onChange: jest.fn(),
    id: 'inputId',
    error: false,
    value: '',
    label: LABEL,
};

describe('Input', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<Input {...props} />);

    test('Should render', () => {
        const element = renderElement();
        const result = element.getByTestId(TEST_ID);

        expect(result).toHaveClass('form-group');
        expect(result).toBeInTheDocument();
    });

    test('Should have additional class for success', () => {
        const element = render(<Input {...props} success />);
        const result = element.getByTestId(TEST_ID);

        expect(result).toHaveClass('form-group');
        expect(result).toHaveClass('success');
    });

    test('Should have additional class for error', () => {
        const element = render(<Input {...props} error />);
        const result = element.getByTestId(TEST_ID);

        expect(result).toHaveClass('form-group');
        expect(result).toHaveClass('error');
    });

    test('Should handle onChange()', async () => {
        const expectedValue = { target: { value: 'Test value :)' } };
        const container = renderElement().container;
        const input = container.querySelector(INPUT_SELECTOR);

        fireEvent.change(input!, expectedValue);

        expect(props.onChange).toHaveBeenCalledWith(expectedValue.target.value);
    });

    test('Should render value from props', async () => {
        const text = 'Test value :)';
        const container = render(<Input {...props} value={text} />).container;
        const input = container.querySelector(INPUT_SELECTOR);

        expect(input).toHaveValue(text);
    });

    describe('Label', () => {
        const labelText = 'Label text';

        test('Should render, if text is provided', () => {
            const element = render(<Input {...props} label={labelText} />);
            const result = element.getByText(labelText);

            expect(result).toBeInTheDocument();
        });

        test('Should not render, if text is not provided', () => {
            const element = renderElement();
            const result = element.queryByText(labelText);

            expect(result).not.toBeInTheDocument();
        });
    });

    describe('Placeholder', () => {
        const placeholderText = 'Placeholder text';

        test('Should render, if text is provided', () => {
            const container = render(<Input {...props} placeholder={placeholderText} />).container;
            const result = container.querySelector(INPUT_SELECTOR);

            expect(result).toHaveAttribute('placeholder', placeholderText);
        });

        test('Should not render, if text is not provided', () => {
            const container = renderElement().container;
            const result = container.querySelector(INPUT_SELECTOR);

            expect(result).not.toHaveAttribute('placeholder', placeholderText);
        });
    });

    describe('Status Text', () => {
        const statusText = 'Label text';

        test('Should render, if text is provided', () => {
            const element = render(<Input {...props} statusText={statusText} />);
            const result = element.getByText(statusText);

            expect(result).toHaveClass('status-text');
            expect(result).toBeInTheDocument();
        });

        test('Should not render, if text is not provided', () => {
            const element = renderElement();
            const result = element.queryByText(statusText);

            expect(result).not.toBeInTheDocument();
        });
    });
});

export {};
