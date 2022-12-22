import { TEXTS } from '../const/texts';
import { Button, ButtonProps } from './Button';

export type CleanButtonProps = Omit<ButtonProps, 'text'>;

export const CleanButton: React.FC<CleanButtonProps> = (props) => (
    <Button.Secondary {...props} text={TEXTS.CLEAN_BUTTON} />
);
