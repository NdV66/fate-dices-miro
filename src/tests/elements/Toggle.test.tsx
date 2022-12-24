import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toggle, ToggleProps } from '../../elements/Toggle';

const TEXT = 'I like Lord of The Rings.';
const TEST_ID = 'toggle';
const INPUT_SELECTOR = 'input[type="checkbox"]';

const props: ToggleProps = {
    onChange: jest.fn(),
    checked: false,
    label: TEXT,
};

describe('Toggle', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<Toggle {...props} />);

    test('Should render', () => {
        const element = renderElement();
        const result = element.getByTestId(TEST_ID);

        expect(result).toHaveClass('toggle');
        expect(result).toBeInTheDocument();
    });

    test('Should have label with given text', () => {
        const element = renderElement();
        const result = element.getByText(TEXT);

        expect(result).toBeInTheDocument();
    });

    test('Should have special input for toggle', () => {
        const container = renderElement().container;
        const result = container.querySelector(INPUT_SELECTOR);

        expect(result).toBeInTheDocument();
        expect(result).toHaveAttribute('type', 'checkbox');
    });

    test('Should be checked by props', () => {
        const container = render(<Toggle {...props} checked />).container;
        const result = container.querySelector(INPUT_SELECTOR);

        expect(result).toBeChecked();
    });

    test('Should be not checked by props', () => {
        const container = render(<Toggle {...props} checked={false} />).container;
        const result = container.querySelector(INPUT_SELECTOR);

        expect(result).not.toBeChecked();
    });
});

export {};
