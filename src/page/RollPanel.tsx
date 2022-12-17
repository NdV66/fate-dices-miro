import * as React from 'react';
import { TEXTS } from '../const';
import { Toggle } from '../elements/Toggle';
import { Result } from '../parts';
import { rollFateDices } from '../services';
import { calcSummaryRolls } from '../services/tools';
import { translateFateRolls } from '../views/translateFateRolls';
import { RollPanelButtons } from './RollPanelButtons';
import { RollPanelModificationInput } from './RollPanelModificationInput';

export const RollPanel: React.FC = () => {
    const [value, setValue] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [displayRolls, setDisplayRolls] = React.useState<string[] | null>(null);
    const [result, setResult] = React.useState(0);
    const [showInput, setShowInput] = React.useState(false);

    const onClickCleanButton = () => {
        setValue('');
        setErrorMessage('');
        setDisplayRolls(null);
    };

    const onClickButton = async () => {
        const rolls = rollFateDices();
        const summary = calcSummaryRolls(rolls, value);
        const displayRolls = translateFateRolls(rolls);

        setDisplayRolls(displayRolls);
        setResult(summary);
    };

    const onChangeModificationToggle = () => setShowInput(!showInput);

    return (
        <>
            <Toggle label={TEXTS.TOGGLE_MODIFICATION_LABEL} onChange={onChangeModificationToggle} checked={showInput} />

            {showInput && (
                <RollPanelModificationInput
                    setValue={setValue}
                    setErrorMessage={setErrorMessage}
                    errorMessage={errorMessage}
                    value={value}
                />
            )}

            <RollPanelButtons
                onClickCleanButton={onClickCleanButton}
                disabled={!!errorMessage}
                onClickButton={onClickButton}
            />

            {displayRolls && <Result value={result} rolls={displayRolls} />}
        </>
    );
};