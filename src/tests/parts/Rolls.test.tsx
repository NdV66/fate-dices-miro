import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Rolls, RollsProps } from '../../parts/Result/Rolls';

const props: RollsProps = {
    rolls: [6, 1, 5, 3],
};

describe('Rolls', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<Rolls {...props} />);

    test('Should render ', async () => {
        const result = renderElement().container.querySelector('.app-rolls');
        expect(result).toBeInTheDocument();
    });

    test('Should render every roll', () => {
        const result = renderElement().container.querySelectorAll('.app-roll-wrapper');
        expect(result.length).toEqual(props.rolls.length);
    });
});

export {};
