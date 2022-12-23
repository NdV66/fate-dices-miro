import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import * as modificationsService from '../../services/testIfModIsOk';
import { RollPanel } from '../../page';

const TEST_ID = 'basicInput';

describe('RollPanel', () => {
    beforeEach(() => {
        jest.spyOn(modificationsService, 'testIfModIsOk').mockReturnValue(true);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<RollPanel />);

    test('Should render', () => {
        const result = renderElement().getByTestId(TEST_ID);
        expect(result).toBeInTheDocument();
    });
});

export {};
