import * as React from 'react';
import { FATE, TEXTS } from '../const';
import { Toggle } from '../elements/Toggle';
import { Result } from '../parts';
import { rollFateDices } from '../services';
import { calcSummaryRolls } from '../services';
import { translateFateRolls } from '../views/translateFateRolls';
import { RollPanelButtons } from './RollPanelButtons';
import { RollPanelModificationInput } from './RollPanelModificationInput';

export const RollPanel: React.FC = () => {
    const [value, setValue] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [displayRolls, setDisplayRolls] = React.useState<string[] | null>(null);
    const [result, setResult] = React.useState(0);
    const [showInput, setShowInput] = React.useState(false);

    const cleanInput = () => {
        setValue('');
        setErrorMessage('');
    };

    const onClickCleanButton = () => {
        cleanInput();
        setDisplayRolls(null);
    };

    const onClickButton = async () => {
        const rolls = rollFateDices();

        const summary = calcSummaryRolls(rolls, value);
        const displayRolls = translateFateRolls(rolls);

        setDisplayRolls(displayRolls);
        setResult(summary);
    };

    const onChangeModificationToggle = () => {
        setShowInput(!showInput);
        cleanInput();
    };

    return (
        <>
            <Toggle
                label={TEXTS.TOGGLE_MODIFICATION_LABEL}
                onChange={onChangeModificationToggle}
                checked={showInput}
                data-testid="modificationInputToggle"
            />

            {showInput && (
                <RollPanelModificationInput
                    setValue={setValue}
                    setErrorMessage={setErrorMessage}
                    errorMessage={errorMessage}
                    value={value}
                    defaultStatusText={FATE.TEXTS.MODIFICATION_STATUS}
                    data-testid="modificationInput"
                />
            )}

            <RollPanelButtons
                onClickCleanButton={onClickCleanButton}
                disabled={!!errorMessage}
                onClickButton={onClickButton}
            />

            {displayRolls && <Result summary={result} rolls={displayRolls} />}
        </>
    );
};
