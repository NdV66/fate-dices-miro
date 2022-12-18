import { FATE } from '../../const';
import { FateDicesType } from '../../types';
import { translateFateRolls } from '../../views';

describe('translateFateRolls', () => {
    test('Should translate to -, + or neutral (space)', () => {
        const rolls: FateDicesType = [-1, 1, 0, 1];
        const expectedResult = [FATE.TEXTS.MINUS, FATE.TEXTS.PLUS, FATE.TEXTS.NEUTRAL, FATE.TEXTS.PLUS];
        const result = translateFateRolls(rolls);

        expect(result).toEqual(expectedResult);
    });
});

export {};
