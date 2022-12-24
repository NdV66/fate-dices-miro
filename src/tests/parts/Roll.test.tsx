import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Roll, RollProps } from '../../parts/Result/Rolls/Roll';

const props: RollProps = {
    value: 6,
};

describe('Roll', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const renderElement = () => render(<Roll {...props} />);

    test('Should render with value from props', () => {
        const element = renderElement().getByText(props.value);

        expect(element).toHaveClass('app-roll');
        expect(element).toBeInTheDocument();
    });
});

export {};
