import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModificationInput, ModificationInputProps } from '../../parts';
import { TEXTS } from '../../const';

const TEST_ID = 'basicInput';
const INPUT_SELECTOR = 'input';

const props: ModificationInputProps = {
    onChange: jest.fn(),
    id: 'inputId',
    error: false,
    value: '',
};

describe('Input', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<ModificationInput {...props} />);

    test('Should render', () => {
        const element = renderElement();
        const result = element.getByTestId(TEST_ID);

        expect(result).toBeInTheDocument();
    });

    test('Should show placeholder', () => {
        const container = renderElement().container;
        const input = container.querySelector(INPUT_SELECTOR);

        expect(input).toHaveAttribute('placeholder', TEXTS.MODIFICATION_PLACEHOLDER);
    });

    test('Should handle onChange()', async () => {
        const expectedValue = { target: { value: 'Test value :)' } };
        const container = renderElement().container;
        const input = container.querySelector(INPUT_SELECTOR);

        fireEvent.change(input!, expectedValue);

        expect(props.onChange).toHaveBeenCalledWith(expectedValue.target.value);
    });

    describe('Label', () => {
        test('Should not show', () => {
            const element = renderElement();
            const result = element.queryByLabelText(TEXTS.MODIFICATION);

            expect(result).not.toBeInTheDocument();
        });

        test('Should show', () => {
            const element = render(<ModificationInput {...props} showLabel />);
            const result = element.queryByLabelText(TEXTS.MODIFICATION);

            expect(result).toBeInTheDocument();
        });
    });
});

export {};
