import { TEXTS } from '../../const';
import { Rolls } from './Rolls/Rolls';

type Props = {
    value: number;
    rolls: string[];
};

export const Result: React.FC<Props> = ({ value, rolls }) => (
    //@ts-ignore
    <div className="app-card" style={{ '--accent-color': 'var(--blue100)' }}>
        <h1 className="app-card--title">{value}</h1>
        <h1 className="app-card--description p-medium">{TEXTS.RESULT_DESCRIPTION}</h1>

        <div className="app-card--body">
            <Rolls rolls={rolls} />
        </div>
    </div>
);
