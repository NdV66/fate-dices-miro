import * as tools from '../../services/rolls';

describe('rollDices', () => {
    const numberRolls = 4;
    const min = 1;
    const max = 6;

    test('Should return given number of rolls', () => {
        const mockRandom = 3;
        const expectedResult = [mockRandom, mockRandom, mockRandom, mockRandom];

        jest.spyOn(tools, 'rollRandomBetween').mockReturnValue(mockRandom);
        const result = tools.rollDices(numberRolls, min, max);

        expect(result).toEqual(expectedResult);
    });
});

export {};
