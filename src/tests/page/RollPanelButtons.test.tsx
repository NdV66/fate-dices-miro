import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RollPanelButtons, RollPanelButtonsProps } from '../../page/RollPanelButtons';
import { TEXTS } from '../../const';

const props: RollPanelButtonsProps = {
    onClickCleanButton: jest.fn(),
    onClickButton: jest.fn(),
    disabled: false,
};

describe('RollPanelButton', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<RollPanelButtons {...props} />);

    test('Should render', () => {
        const result = renderElement().container.querySelector('.app-buttons');
        expect(result).toBeInTheDocument();
    });

    test('Should render clean button', () => {
        const result = renderElement().getByText(TEXTS.CLEAN_BUTTON);
        expect(result).toBeInTheDocument();
    });

    test('Should render roll button', () => {
        const result = renderElement().getByText(TEXTS.ROLL_BUTTON);
        expect(result).toBeInTheDocument();
    });
});

export {};
