import '@testing-library/jest-dom';
import { calcEnd, calcNextStart, MAX_COLUMN, START_COLUMN, WIDTH } from '../../parts/Result/Rolls/tools';

describe('Tools for Rolls', () => {
    test('Should calc end column', () => {
        const start = 1;
        const expectedResult = start + WIDTH;

        const result = calcEnd(start);
        expect(result).toEqual(expectedResult);
    });

    describe('Should calc next start column...', () => {
        test('when there is a place for a new element', () => {
            const end = 3;
            const expectedResult = end + 1;

            const result = calcNextStart(end);
            expect(result).toEqual(expectedResult);
        });

        test('when there is no place for a new element', () => {
            const end = MAX_COLUMN;
            const expectedResult = START_COLUMN;

            const result = calcNextStart(end);
            expect(result).toEqual(expectedResult);
        });
    });
});

export {};
