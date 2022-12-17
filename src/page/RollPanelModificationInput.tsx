import * as React from 'react';
import { FATE, TEXTS } from '../const';
import { ModificationInput, testIfModIsOk } from '../parts';

type Props = {
    setValue: (value: string) => void;
    errorMessage: string;
    setErrorMessage: (value: string) => void;
    value: string;
};

export const RollPanelModificationInput: React.FC<Props> = ({ setValue, errorMessage, setErrorMessage, value }) => {
    const resetErrorMessage = () => setErrorMessage('');

    const onChangeInput = (value: string) => {
        setValue(value);

        if (!value) {
            resetErrorMessage();
        } else if (testIfModIsOk(value)) {
            resetErrorMessage();
        } else {
            setErrorMessage(TEXTS.MODIFICATION_ERROR);
        }
    };

    return (
        <ModificationInput
            onChange={onChangeInput}
            error={!!errorMessage}
            statusText={errorMessage || FATE.TEXTS.MODIFICATION_STATUS}
            id="modification"
            showLabel={false}
            value={value}
        />
    );
};