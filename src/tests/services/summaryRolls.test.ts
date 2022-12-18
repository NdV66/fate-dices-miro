import { summaryRolls } from '../../services/tools';

describe('summaryRolls', () => {
    test('Should summary rolls in a correct way', () => {
        const rolls = [1, 2, 3];
        const expectedSummary = 6;

        const result = summaryRolls(rolls);
        expect(result).toEqual(expectedSummary);
    });
});

export {};
