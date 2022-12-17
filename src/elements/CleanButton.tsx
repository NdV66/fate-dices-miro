import { TEXTS } from '../const/texts';
import { Button, ButtonProps } from './Button';

type Props = Omit<ButtonProps, 'text'>;

export const CleanButton: React.FC<Props> = (props) => <Button.Secondary {...props} text={TEXTS.CLEAN_BUTTON} />;
