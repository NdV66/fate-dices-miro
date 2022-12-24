import * as React from 'react';
import { Input, InputProps } from '../elements/Input';
import { TEXTS } from '../const';

export type ModificationInputProps = Pick<InputProps, 'error' | 'statusText' | 'success' | 'id' | 'value'> & {
    onChange: (value: string) => void;
    showLabel?: boolean;
};

export const ModificationInput: React.FC<ModificationInputProps> = ({ onChange, showLabel, ...props }) => (
    <Input
        onChange={onChange}
        label={showLabel ? TEXTS.MODIFICATION : undefined}
        placeholder={TEXTS.MODIFICATION_PLACEHOLDER}
        {...props}
    />
);
