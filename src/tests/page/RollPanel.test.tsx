import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as modificationsService from '../../services/testIfModIsOk';
import { RollPanel } from '../../page';

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

    describe('RollPanelModificationInput', () => {
        test('Should show input', () => {
            const container = renderElement().container;
            const toggle = container.querySelector('input[type="checkbox"]');
            fireEvent.click(toggle!);

            const input = container.querySelector('input');
            expect(input).toBeInTheDocument();
        });
    });
});

export {};
