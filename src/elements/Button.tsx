export type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    text: string | React.ReactNode;
};

type InsideButtonProps = ButtonProps & {
    className: string;
};

type Wrapper = {
    Primary: React.FC<ButtonProps>;
    Secondary: React.FC<ButtonProps>;
};

const InsideButton: React.FC<InsideButtonProps> = ({ text, className, ...props }) => (
    <button className={`button button-small ${className}`} {...props}>
        {text}
    </button>
);

const PrimaryButton: React.FC<ButtonProps> = (props) => <InsideButton {...props} className="button-primary" />;

const SecondaryButton: React.FC<ButtonProps> = (props) => <InsideButton {...props} className="button-secondary" />;

export const Button: Wrapper = {
    Primary: PrimaryButton,
    Secondary: SecondaryButton,
};
