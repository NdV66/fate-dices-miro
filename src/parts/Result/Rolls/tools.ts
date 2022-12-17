const WIDTH = 2;
export const START_COLUMN = 1;
const MAX_COLUMN = 12;
const MAX_COLUMN_FOR_ELEMENT = MAX_COLUMN - WIDTH;
const BETWEEN_END_AND_NEXT_START = 1;

export const calcNextStart = (end: number) => {
    let start = end + BETWEEN_END_AND_NEXT_START;
    return start > MAX_COLUMN_FOR_ELEMENT ? START_COLUMN : end + BETWEEN_END_AND_NEXT_START;
};

export const calcEnd = (start: number) => start + WIDTH;
