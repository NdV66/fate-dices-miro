type Props = {
    value: string | number;
};

export const Roll: React.FC<Props> = ({ value }) => <div className="app-roll">{value}</div>;
