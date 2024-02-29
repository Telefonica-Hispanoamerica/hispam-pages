/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconInvoicePlanFileFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.752 8.252V2H19.5v20h-15V8.252h6.252zm-2.68 9.64h7.856a.547.547 0 00.536-.536.552.552 0 00-.536-.536H8.072a.552.552 0 00-.536.536c0 .284.252.536.536.536zm7.856-3.572a.55.55 0 00.536-.536.552.552 0 00-.536-.536H8.072a.552.552 0 00-.536.536c0 .284.252.536.536.536h7.856z"
                />
                <path fill={fillColor} d="M4.752 7.18L9.68 2.248V7.18H4.752z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.08 7.491L13.616 2.31a.56.56 0 00-.384-.154h-7.38c-.57 0-1.107.538-1.107 1.106v17.48c0 .588.518 1.106 1.107 1.106h12.296c.589 0 1.107-.518 1.107-1.107V7.898a.56.56 0 00-.177-.406zm-3.536 11.345h-7.1a.562.562 0 01-.56-.56.56.56 0 01.56-.56h7.1a.561.561 0 010 1.12zm-7.1-3.006a.562.562 0 01-.56-.56c0-.308.251-.56.56-.56h7.1c.308 0 .56.252.56.56 0 .308-.252.56-.56.56h-7.1zm7.1-3.003h-7.1a.562.562 0 01-.56-.56c0-.308.251-.56.56-.56h7.1c.308 0 .56.252.56.56 0 .308-.252.56-.56.56zm-1.442-5.532c-.384-.384-.588-.933-.588-1.583V3.754l4.352 4.13h-2.181c-.653 0-1.2-.205-1.583-.589z"
                />
            </svg>
        );
    }
};

export default IconInvoicePlanFileFilled;
