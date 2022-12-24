import { Roll } from './Roll';
import { calcEnd, calcNextStart, START_COLUMN } from './tools';

export type RollsProps = {
    rolls: (string | number)[];
};

export const Rolls: React.FC<RollsProps> = ({ rolls }) => {
    let start = START_COLUMN;
    let end = calcEnd(start);

    const updateCalcStartAndEnd = () => {
        start = calcNextStart(end);
        end = calcEnd(start);
    };

    return (
        <div className="app-rolls">
            <div className="grid">
                {rolls.map((el, index) => {
                    const element = (
                        <div key={`${el}_${index}`} className={`cs${start} ce${end} app-roll-wrapper`}>
                            <Roll value={el} />
                        </div>
                    );

                    updateCalcStartAndEnd();
                    return element;
                })}
            </div>
        </div>
    );
};
