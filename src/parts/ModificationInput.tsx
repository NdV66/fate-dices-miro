import * as React from 'react';
import { Input, InputProps } from '../elements/Input';
import { TEXTS } from '../const';

type Props = Pick<InputProps, 'error' | 'statusText' | 'success' | 'id' | 'value'> & {
    onChange: (value: string) => void;
    showLabel?: boolean;
};

const REGEXP = /(\+|\-){0,1}\d+/g;

export const testIfModIsOk = (value: string) => REGEXP.test(value);

export const ModificationInput: React.FC<Props> = ({ onChange, showLabel, ...props }) => {
    const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => onChange(event.currentTarget.value);

    return (
        <Input
            onChange={onChangeInput}
            label={showLabel ? TEXTS.MODIFICATION : undefined}
            placeholder={TEXTS.MODIFICATION_PLACEHOLDER}
            {...props}
        />
    );
};
