import { FATE } from '../const';
import { FateDicesType } from '../types';

const translate = (roll: number) => {
    if (roll === FATE.MINUS) {
        return FATE.TEXTS.MINUS;
    } else if (roll === FATE.PLUS) {
        return FATE.TEXTS.PLUS;
    }
    return FATE.TEXTS.NEUTRAL;
};

export const translateFateRolls = (rolls: FateDicesType) => rolls.map(translate);
