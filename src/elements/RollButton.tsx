import { TEXTS } from '../const/texts';
import { Button, ButtonProps } from './Button';

type Props = Omit<ButtonProps, 'text'>;

export const RollButton: React.FC<Props> = (props) => <Button.Primary {...props} text={TEXTS.MAIN_BUTTON} />;
