import * as tools from '../../services/tools';

describe('calcSummaryRolls', () => {
    const rolls = [1, 2, 3];
    const mockSummary = 6;

    const testCalc = (modify: string) => {
        const expectedResult = mockSummary + parseInt(modify, 10);

        jest.spyOn(tools, 'summaryRolls').mockReturnValue(mockSummary);
        const result = tools.calcSummaryRolls(rolls, modify);

        expect(result).toEqual(expectedResult);
    };

    test('Should summary rolls in a correct way with modifiers (no sign)', () => {
        const modify = '2';
        testCalc(modify);
    });

    test('Should summary rolls in a correct way with modifiers (with -)', () => {
        const modify = '-2';
        testCalc(modify);
    });

    test('Should summary rolls in a correct way with modifiers (with +)', () => {
        const modify = '+2';
        testCalc(modify);
    });
});

export {};
