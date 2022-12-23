import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Result, ResultProps } from '../../parts';
import { TEXTS } from '../../const';

const props: ResultProps = {
    rolls: [1, 4],
    summary: 5,
};

describe('Rolls', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<Result {...props} />);

    test('Should render', () => {
        const result = renderElement().container.querySelector('.app-card');
        expect(result).toBeInTheDocument();
    });

    test('Should render title (summary)', () => {
        const result = renderElement().getByText(props.summary);

        expect(result).toBeInTheDocument();
        expect(result).toHaveClass('app-card--title');
    });

    test('Should render description', () => {
        const result = renderElement().getByText(TEXTS.RESULT_DESCRIPTION);

        expect(result).toBeInTheDocument();
        expect(result).toHaveClass('app-card--description');
        expect(result).toHaveClass('p-medium');
    });

    test('Should render body', () => {
        const result = renderElement().container.querySelector('.app-card--body');
        expect(result).toBeInTheDocument();
    });

    test('Should render rolls', () => {
        const result = renderElement().container.querySelector('.app-rolls');
        expect(result).toBeInTheDocument();
    });
});

export {};
