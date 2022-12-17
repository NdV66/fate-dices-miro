import { RollButton } from '../elements';
import { CleanButton } from '../elements/CleanButton';

type Props = {
    onClickCleanButton: () => void;
    onClickButton: () => void;
    disabled: boolean;
};

export const RollPanelButtons: React.FC<Props> = ({ onClickCleanButton, onClickButton, disabled }) => (
    <div className="grid app-buttons">
        <div className="cs1 ce3">
            <CleanButton onClick={onClickCleanButton} />
        </div>
        <div className="cs5 ce12">
            <RollButton onClick={onClickButton} disabled={disabled} />
        </div>
    </div>
);
