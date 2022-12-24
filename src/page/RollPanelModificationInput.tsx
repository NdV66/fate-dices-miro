import * as React from 'react';
import { TEXTS } from '../const';
import { ModificationInput } from '../parts';
import { testIfModIsOk } from '../services';

export type RollPanelModificationInputProps = {
    setValue: (value: string) => void;
    errorMessage: string;
    setErrorMessage: (value: string) => void;
    value: string;

    defaultStatusText?: string;
};

export const RollPanelModificationInput: React.FC<RollPanelModificationInputProps> = ({
    setValue,
    errorMessage,
    setErrorMessage,
    value,
    defaultStatusText,
}) => {
    const resetErrorMessage = () => setErrorMessage('');

    const onChangeInput = (value: string) => {
        const isOkValue = testIfModIsOk(value);
        setValue(value);

        if (!value || isOkValue) {
            resetErrorMessage();
        } else {
            setErrorMessage(TEXTS.MODIFICATION_ERROR);
        }
    };

    return (
        <ModificationInput
            onChange={onChangeInput}
            error={!!errorMessage}
            statusText={errorMessage || defaultStatusText}
            id="modification"
            showLabel={false}
            value={value}
        />
    );
};
