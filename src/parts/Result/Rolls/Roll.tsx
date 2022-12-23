export type RollProps = {
    value: string | number;
};

export const Roll: React.FC<RollProps> = ({ value }) => <div className="app-roll">{value}</div>;
