import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as modificationsService from '../../services/testIfModIsOk';
import { RollPanel } from '../../page';
import { TEXTS } from '../../const';

const CHECKBOX_SELECTOR = 'input[type="checkbox"]';
const INPUT_SELECTOR = 'input[type="text"]';

describe('RollPanel', () => {
    beforeEach(() => {
        jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(true);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<RollPanel />);

    test('Should render Toggle element', () => {
        const result = renderElement().getByTestId('toggle');
        expect(result).toBeInTheDocument();
    });

    test('Should render RollPanelButtons element', () => {
        const result = renderElement().container.querySelector('.app-buttons');
        expect(result).toBeInTheDocument();
    });

    describe('Roll button behavior when input is showed', () => {
        const getButton = (value: string) => {
            const element = renderElement();
            const container = element.container;
            let button = element.getByText(TEXTS.ROLL_BUTTON);

            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value: '6' } });

            return button;
        };

        test('Should be able to click, if input value is ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(true);

            const element = renderElement();
            const container = element.container;
            let button = element.getByText(TEXTS.ROLL_BUTTON);

            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value: '6' } });

            fireEvent.click(button);
            button = element.getByText(TEXTS.ROLL_BUTTON);
            expect(button).not.toBeDisabled();
        });

        test('Should disabled, if input value is not ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(false);

            const element = renderElement();
            const container = element.container;
            let button = element.getByText(TEXTS.ROLL_BUTTON);

            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value: 'a6' } });

            fireEvent.click(button);
            button = element.getByText(TEXTS.ROLL_BUTTON);
            expect(button).toBeDisabled();
        });

        test('Should disabled, if input value is not ok - and be active, when value is changed to ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValueOnce(false);

            const element = renderElement();
            const container = element.container;
            let button = element.getByText(TEXTS.ROLL_BUTTON);

            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value: 'a6' } });

            fireEvent.click(button);
            button = element.getByText(TEXTS.ROLL_BUTTON);
            expect(button).toBeDisabled();

            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValueOnce(true);
        });
    });

    describe('RollPanelModificationInput', () => {
        test('Should NOT show input on enter', () => {
            const input = renderElement().container.querySelector(INPUT_SELECTOR);
            expect(input).not.toBeInTheDocument();
        });

        test('Should show input', () => {
            const element = renderElement();
            const container = element.container;
            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            expect(input).toBeInTheDocument();
        });

        test('Should show input and then hide', () => {
            const container = renderElement().container;
            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            let input = container.querySelector(INPUT_SELECTOR);
            expect(input).toBeInTheDocument();

            fireEvent.click(toggle!);

            input = container.querySelector(INPUT_SELECTOR);
            expect(input).not.toBeInTheDocument();
        });
    });
});

export {};

//rolls
