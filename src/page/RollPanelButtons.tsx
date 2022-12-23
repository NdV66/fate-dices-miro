import { CleanButton, RollButton } from '../parts';

export type RollPanelButtonsProps = {
    onClickCleanButton: () => void;
    onClickButton: () => void;
    disabled: boolean;
};

export const RollPanelButtons: React.FC<RollPanelButtonsProps> = ({ onClickCleanButton, onClickButton, disabled }) => (
    <div className="grid app-buttons">
        <div className="cs1 ce3">
            <CleanButton onClick={onClickCleanButton} />
        </div>
        <div className="cs5 ce12">
            <RollButton onClick={onClickButton} disabled={disabled} />
        </div>
    </div>
);
