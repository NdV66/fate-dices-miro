import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TEXTS } from '../../const';
import { RollButton, RollButtonProps } from '../../parts/RollButton';

const props: RollButtonProps = {
    onClick: jest.fn(),
    disabled: false,
};

describe('RollButton', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => {
        const { getByText } = render(<RollButton {...props} />);
        return getByText(TEXTS.MAIN_BUTTON);
    };

    test('Should render (with correct text)', async () => {
        const result = renderElement();
        expect(result).toBeInTheDocument();
    });

    test('Should call onClick()', async () => {
        const result = renderElement();

        await fireEvent.click(result);
        expect(props.onClick).toBeCalled();
    });

    test('Should be disabled (onClick is not called)', async () => {
        const { getByText } = render(<RollButton {...props} disabled />);
        const result = getByText(TEXTS.MAIN_BUTTON);

        await fireEvent.click(result);
        expect(props.onClick).not.toBeCalled();
    });
});

export {};
