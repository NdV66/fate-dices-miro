import cn from 'classnames';

export type InputProps = {
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
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

    return (
        <div className={formGroupCss}>
            {label && <label htmlFor={id}>{label}</label>}
            <input className="input" type="text" placeholder={placeholder} id={id} onChange={onChange} value={value} />

            {statusText && <div className="status-text">{statusText}</div>}
        </div>
    );
};
