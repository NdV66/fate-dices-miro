import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as modificationsService from '../../services/testIfModIsOk';
import * as fateDicesService from '../../services/fateDices';
import * as rollsService from '../../services/rolls';
import * as translateFateRollsView from '../../views/translateFateRolls';

import { RollPanel } from '../../page';
import { FATE, TEXTS } from '../../const';
import { FateDicesType } from '../../types';

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
        const prepareGivenStep = (value: string) => {
            const element = renderElement();
            const container = element.container;
            const button = element.getByText(TEXTS.ROLL_BUTTON);

            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value } });

            return { button, element, input };
        };

        test('Should be able to click, if input value is ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(true);
            const { button } = prepareGivenStep('6');

            expect(button).not.toBeDisabled();
        });

        test('Should disabled, if input value is not ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(false);
            const { button } = prepareGivenStep('a6');

            expect(button).toBeDisabled();
        });

        test('Should disabled, if an input value is not ok - and be active, when the value is changed to ok', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValueOnce(false);
            const { button, input } = prepareGivenStep('a6');

            expect(button).toBeDisabled();

            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValueOnce(true);
            fireEvent.change(input!, { target: { value: '6' } });

            expect(button).not.toBeDisabled();
        });

        test('Should be active if an input value is ok - and be disabled,  when the value is changed to the wrong one', () => {
            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValueOnce(true);
            const { button, element } = prepareGivenStep('6');

            expect(button).not.toBeDisabled();

            jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValueOnce(false);
            const input = element.container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value: '+6' } });

            expect(button).toBeDisabled();
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

            const input = container.querySelector(INPUT_SELECTOR);
            expect(input).toBeInTheDocument();

            fireEvent.click(toggle!);
            expect(input).not.toBeInTheDocument();
        });

        test('Should clean input after click then clean button', () => {
            const element = renderElement();
            const container = element.container;
            const cleanButton = element.getByText(TEXTS.CLEAN_BUTTON);
            const toggle = container.querySelector(CHECKBOX_SELECTOR);
            fireEvent.click(toggle!);

            const input = container.querySelector(INPUT_SELECTOR);
            fireEvent.change(input!, { target: { value: '6' } });
            fireEvent.click(cleanButton);

            expect(input).toHaveValue('');
        });
    });

    describe('Result', () => {
        const mockRolls = () => {
            const rollValues: FateDicesType = [1, 0, -1, 0];
            const fateRollValues = [FATE.TEXTS.PLUS, FATE.TEXTS.NEUTRAL, FATE.TEXTS.MINUS, FATE.TEXTS.NEUTRAL];

            jest.spyOn(fateDicesService, 'rollFateDices').mockReturnValueOnce(rollValues);
            jest.spyOn(rollsService, 'calcSummaryRolls').mockReturnValueOnce(2);
            jest.spyOn(translateFateRollsView, 'translateFateRolls').mockReturnValueOnce(fateRollValues);
        };

        test('Should be not showed on enter', () => {
            const result = renderElement().container.querySelector('.app-card');
            expect(result).not.toBeInTheDocument();
        });

        test('Should display rolls (Result element)', () => {
            mockRolls();

            const element = renderElement();
            const button = element.getByText(TEXTS.ROLL_BUTTON);
            fireEvent.click(button);

            const rolls = element.container.querySelector('.app-card');
            expect(rolls).toBeInTheDocument();
        });

        test('Should display rolls (Result element) and then hide, when the clean button is clicked', () => {
            mockRolls();

            const element = renderElement();
            const button = element.getByText(TEXTS.ROLL_BUTTON);
            const cleanButton = element.getByText(TEXTS.CLEAN_BUTTON);
            fireEvent.click(button);

            const rolls = element.container.querySelector('.app-card');
            expect(rolls).toBeInTheDocument();

            fireEvent.click(cleanButton);
            expect(rolls).not.toBeInTheDocument();
        });
    });
});

export {};
