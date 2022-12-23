import { TEXTS } from '../const/texts';
import { Button, ButtonProps } from '../elements/Button';

export type RollButtonProps = Omit<ButtonProps, 'text'>;

export const RollButton: React.FC<RollButtonProps> = (props) => <Button.Primary {...props} text={TEXTS.MAIN_BUTTON} />;
