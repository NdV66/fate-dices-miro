export const rollRandomBetween = (min: number, max: number) => Math.floor(Math.random() * max) + min;

export const rollDices = (number: number, min: number, max: number) => {
    const array = [...Array(number)];
    return array.map(() => rollRandomBetween(min, max));
};

export const summaryRolls = (rolls: number[]) => rolls.reduce((prev, current) => prev + current, 0);

export const calcSummaryRolls = (rolls: number[], mod?: string) => summaryRolls(rolls) + (mod ? parseInt(mod, 10) : 0);
