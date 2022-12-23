import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RollPanelModificationInput, RollPanelModificationInputProps } from '../../page/RollPanelModificationInput';
import { TEXTS } from '../../const';
import * as modificationsService from '../../services/testIfModIsOk';

const TEST_ID = 'basicInput';
const INPUT_SELECTOR = 'input';

const props: RollPanelModificationInputProps = {
    setValue: jest.fn(),
    errorMessage: '',
    setErrorMessage: jest.fn(),
    value: '',
};

describe('RollPanelModificationInput', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<RollPanelModificationInput {...props} />);

    const renderInput = () => {
        const container = renderElement().container;
        return container.querySelector(INPUT_SELECTOR);
    };

    test('Should render', () => {
        const result = renderElement().getByTestId(TEST_ID);
        expect(result).toBeInTheDocument();
    });

    test('Should set status text to error, if provided', () => {
        const text = 'error here';
        const element = render(<RollPanelModificationInput {...props} errorMessage={text} />).getByText(text);

        expect(element).toHaveClass('status-text');
    });

    test('Should display status text, if error value is not provided', () => {
        const text = 'text here';
        const element = render(<RollPanelModificationInput {...props} defaultStatusText={text} />).getByText(text);

        expect(element).toHaveClass('status-text');
    });

    describe('setErrorMessage', () => {
        test('Should set error message, when value from user is wrong', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(false);

            const input = renderInput();
            fireEvent.change(input!, { target: { value: 'lotr' } });

            expect(props.setErrorMessage).toBeCalledWith(TEXTS.MODIFICATION_ERROR);
        });

        test('Should clean error, when value is ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(true);

            const input = renderInput();
            fireEvent.change(input!, { target: { value: '4' } });

            expect(props.setErrorMessage).toBeCalledWith('');
        });
    });

    describe('setValue', () => {
        test('Should call, even if value is wrong', () => {
            const value = 'lotr';
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(false);

            const input = renderInput();
            fireEvent.change(input!, { target: { value } });

            expect(props.setValue).toBeCalledWith(value);
        });

        test('Should call, if value is ok', () => {
            const value = '4';
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(true);

            const input = renderInput();
            fireEvent.change(input!, { target: { value } });

            expect(props.setValue).toBeCalledWith(value);
        });
    });
});

export {};
