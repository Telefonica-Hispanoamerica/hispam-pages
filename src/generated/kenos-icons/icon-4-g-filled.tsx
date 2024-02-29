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

const Icon4GFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3 18a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm5-4a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7zm5-3a1 1 0 011-1h1a1 1 0 011 1v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V11zm5-5a1 1 0 011-1h1a1 1 0 011 1v15a1 1 0 01-1 1h-1a1 1 0 01-1-1V6zM5 8.432h1.626V7.274h.762V5.842h-.762V2.104H4.38L2 6.004v1.27h3v1.158zm0-4.905v2.315H3.57L5 3.527zm2.832 1.746c0 2.01 1.523 3.272 3.394 3.272 1.185 0 2.097-.483 2.774-1.233V4.836h-3.028v1.357h1.439v.531c-.254.209-.696.38-1.185.38-1.025 0-1.749-.797-1.749-1.831 0-1.034.724-1.831 1.75-1.831.591 0 1.071.332 1.325.75l1.354-.722c-.46-.787-1.307-1.47-2.68-1.47-1.871 0-3.394 1.262-3.394 3.273z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path fill={fillColor} d="M9.144 12.891v-2.619l-1.966 2.62h1.966z" />
                <path
                    fill={fillColor}
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm-1.248 11.965h-.535v.892a.532.532 0 01-.534.534.532.532 0 01-.535-.534v-.892H6.113a.538.538 0 01-.43-.859l3.214-4.282a.53.53 0 01.43-.215h.356c.297 0 .534.238.534.535v3.747h.535c.297 0 .535.238.535.535a.54.54 0 01-.535.54zM11.643 12a3.396 3.396 0 015.768-2.422.54.54 0 01.01.758.535.535 0 01-.76.01 2.325 2.325 0 00-3.949 1.66 2.325 2.325 0 002.323 2.32 2.323 2.323 0 002.258-1.787h-1.687a.532.532 0 01-.535-.534c0-.297.238-.535.535-.535h2.285c.297 0 .535.238.535.535a3.395 3.395 0 01-3.391 3.386 3.396 3.396 0 01-3.392-3.39z"
                />
            </svg>
        );
    }
};

export default Icon4GFilled;
