import cn from 'classnames';

export type InputProps = {
    onChange: (value: string) => void;
    id: string;
    error: boolean;
    value: string;

    label?: string;
    success?: boolean;
    placeholder?: string;
    statusText?: string;
};

export const Input: React.FC<InputProps> = ({
    onChange,
    id,
    label,
    placeholder,
    statusText,
    error,
    success,
    value,
}) => {
    const formGroupCss = cn('form-group', { success, error });

    const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value);

    return (
        <div className={formGroupCss} data-testid="basicInput">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className="input"
                type="text"
                placeholder={placeholder}
                id={id}
                onChange={handleOnChange}
                value={value}
            />

            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};
