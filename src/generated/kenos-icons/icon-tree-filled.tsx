/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconTreeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.97 8.155c0-2.339-1.602-3.347-3.243-3.543-.74-1.802-2.684-2.457-4.336-2.457-2.045 0-4.418 1.008-4.625 3.874-1.095.465-1.695 1.417-1.695 2.728 0 .967.32 1.614.71 2.04-.505.596-.76 1.378-.76 2.324 0 2.353 1.602 3.356 3.244 3.541.585 1.423 1.924 2.123 3.274 2.356v2.224c0 .33.283.6.63.6.348 0 .63-.27.63-.6v-2.135s-.459-.02-.688-.036a18.928 18.928 0 01-.569-.053v-2.426l-2.493-2.387a.582.582 0 01.003-.848.656.656 0 01.89.003l1.603 1.532V9.78c0-.33.283-.6.63-.6.347 0 .63.27.63.6v1.818l1.244-1.6a.65.65 0 01.88-.126.58.58 0 01.131.838l-2.232 2.876c-.006.009-.017.012-.023.02v5.507c1.998-.064 4.224-1.095 4.423-3.865.77-.325 1.695-1.062 1.695-2.729 0-.966-.32-1.613-.709-2.039.502-.605.757-1.381.757-2.325z"
            />
        </svg>
    );
};

export default IconTreeFilled;
