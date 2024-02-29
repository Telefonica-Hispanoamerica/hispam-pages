/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconGuruFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.002 2C9.14 2 6.712 3.868 5.854 6.447h4.48c.502 0 .948.308 1.161.74h1.01c.213-.432.659-.74 1.161-.74h4.485C17.293 3.867 14.866 2 12.002 2zm1.484 5.74c0-.085.1-.184.185-.184h2.034v.924c0 .474-.261.74-.74.74h-.924c-.232 0-.555 0-.555-.74v-.74zM8.3 7.557v.924c0 .479.266.74.74.74h.924c.232 0 .555 0 .555-.74v-.74c0-.085-.1-.184-.185-.184H8.3zm10.187.924a6.492 6.492 0 01-3.977 5.978c4.304.83 7.49 3.73 7.49 7.172V22H2v-.37c0-3.446 3.19-6.347 7.495-7.172A6.485 6.485 0 015.517 8.48c0-.313.034-.62.076-.924h1.593v.924c0 1.09.763 1.854 1.854 1.854h.924c1.048 0 1.669-.692 1.669-1.854v-.185h.74v.185c0 1.162.625 1.854 1.668 1.854h.924c1.09 0 1.854-.763 1.854-1.854v-.924h1.593c.047.303.075.611.075.924z"
            />
        </svg>
    );
};

export default IconGuruFilled;
