/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDataRolloverFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.778 10.776a.69.69 0 00-1 0l-.928.936C19.706 6.888 15.743 3 10.923 3 6 2.996 2 7.03 2 11.998 2 16.967 6 21 10.927 21a.72.72 0 00.716-.722.72.72 0 00-.716-.722c-4.14 0-7.5-3.384-7.5-7.562 0-4.178 3.357-7.558 7.5-7.558 4.036 0 7.32 3.238 7.5 7.235l-.892-.9a.69.69 0 00-1 0 .703.703 0 000 1.01l2.643 2.665 2.644-2.666a.733.733 0 00-.044-1.004z"
            />
            <path
                fill={fillColor}
                d="M10.927 7.678c-2.356 0-4.283 1.944-4.283 4.32 0 2.376 1.927 4.32 4.283 4.32 2.356 0 4.284-1.945 4.284-4.32 0-2.376-1.928-4.32-4.284-4.32z"
            />
        </svg>
    );
};

export default IconDataRolloverFilled;
