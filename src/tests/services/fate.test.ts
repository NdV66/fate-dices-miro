import { FATE } from '../../const';
import { rollFateDices, translateToFate } from '../../services';
import * as tools from '../../services/rolls';

describe('translateToFate', () => {
    const testCase = (rolls: number[], expectedNumber: number) => {
        for (let roll of rolls) {
            const result = translateToFate(roll);
            expect(result).toEqual(expectedNumber);
        }
    };

    test('Should translate to -1', () => {
        testCase(FATE.TRANSLATE_FOR_MINUS, FATE.MINUS);
    });

    test('Should translate to +1', () => {
        testCase(FATE.TRANSLATE_FOR_PLUS, FATE.PLUS);
    });

    test('Should translate to 0', () => {
        testCase(FATE.TRANSLATE_FOR_NEUTRAL, FATE.NEUTRAL);
    });
});

describe('rollFateDices', () => {
    test('Should roll Fate dice (only -1, 0 and 1 as result)', () => {
        const rolls = [1, 4, 6, 3];
        const expectedResult = [-1, 0, 1, 0];

        jest.spyOn(tools, 'rollDices').mockReturnValue(rolls);
        const result = rollFateDices();
        expect(result).toEqual(expectedResult);
    });
});

export {};
