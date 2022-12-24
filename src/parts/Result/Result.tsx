import { TEXTS } from '../../const';
import { Rolls } from './Rolls/Rolls';

export type ResultProps = {
    summary: number;
    rolls: (string | number)[];
};

export const Result: React.FC<ResultProps> = ({ summary, rolls }) => (
    //@ts-ignore
    <div className="app-card" style={{ '--accent-color': 'var(--blue100)' }}>
        <h1 className="app-card--title">{summary}</h1>
        <h1 className="app-card--description p-medium">{TEXTS.RESULT_DESCRIPTION}</h1>

        <div className="app-card--body">
            <Rolls rolls={rolls} />
        </div>
    </div>
);
