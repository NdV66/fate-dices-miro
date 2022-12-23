import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CleanButton, CleanButtonProps } from '../../parts/CleanButton';
import { TEXTS } from '../../const';

const props: CleanButtonProps = {
    onClick: jest.fn(),
    disabled: false,
};

describe('CleanButton', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => {
        const { getByText } = render(<CleanButton {...props} />);
        return getByText(TEXTS.CLEAN_BUTTON);
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
        const { getByText } = render(<CleanButton {...props} disabled />);
        const result = getByText(TEXTS.CLEAN_BUTTON);

        await fireEvent.click(result);
        expect(props.onClick).not.toBeCalled();
    });
});

export {};
