/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconLightningFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.131 11.45a.601.601 0 00-.434-.428l-4.504-1.11 2.723-6.904a.625.625 0 00-.23-.745.582.582 0 00-.754.092l-8.916 9.569a.628.628 0 00-.142.597.6.6 0 00.43.422l4.113 1.017-2.697 7.05a.622.622 0 00.23.737.58.58 0 00.747-.08l9.286-9.617a.627.627 0 00.148-.6z"
            />
        </svg>
    );
};

export default IconLightningFilled;
