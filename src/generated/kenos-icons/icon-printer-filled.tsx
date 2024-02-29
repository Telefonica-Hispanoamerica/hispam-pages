/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconPrinterFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 7.925c0-1.224-.964-2.224-2.144-2.224h-2.5V2H6.644v3.705h-2.5C2.964 5.705 2 6.705 2 7.93v9.631h4.64V22h10.715v-4.444h4.641v-9.63H22zM8.073 3.481h7.858v2.225H8.073V3.48zm0 17.038v-7.407h7.858v7.407H8.073z"
            />
        </svg>
    );
};

export default IconPrinterFilled;
