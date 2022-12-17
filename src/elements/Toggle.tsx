export type ToggleProps = {
    label: string;
    onChange: () => void;
    checked: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({ label, onChange, checked }) => (
    <label className="toggle">
        <input type="checkbox" tabIndex={0} onChange={onChange} checked={checked} />
        <span>{label}</span>
    </label>
);
