/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconConnectedCarLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2.714 17.536a.714.714 0 100 1.428.714.714 0 000-1.428zm9.228-11.587a3.54 3.54 0 00-2.544-.921.357.357 0 00-.243.11.357.357 0 00-.09.258.357.357 0 00.111.246.36.36 0 00.257.089 2.787 2.787 0 012.03.714 2.757 2.757 0 01.897 1.927.357.357 0 00.114.25c.055.047.121.08.192.096h.047a.357.357 0 00.335-.357 3.472 3.472 0 00-1.106-2.412z"
            />
            <path
                fill={fillColor}
                d="M13.113 4.268a5.292 5.292 0 00-4-1.36.328.328 0 00-.243.114.357.357 0 00.024.5.357.357 0 00.243.079 4.64 4.64 0 013.483 1.18 4.582 4.582 0 011.513 3.37.357.357 0 00.714-.03 5.305 5.305 0 00-1.734-3.853zM4.14 12.165H2.357a.357.357 0 010-.714H4.14a.357.357 0 010 .714zm2.498 2.141H2.357a.357.357 0 110-.713h4.282a.357.357 0 110 .713z"
            />
            <path
                fill={fillColor}
                d="M21.927 14.717l-.321-1.028a1.342 1.342 0 00-1.07-.885l-8.348-2.034-3.618-3.6H2.357a.357.357 0 000 .713h5.92l3.533 3.53 8.565 2.087h.042a.622.622 0 01.496.414l.322 1.024a.624.624 0 01-.025.474l-.778 2.48h-3.619a3.04 3.04 0 00-6.066 0H4.498a.357.357 0 000 .714h6.284a3.044 3.044 0 005.988 0h4.2l.91-2.912a1.31 1.31 0 00.047-.977zm-8.15 5.656a2.334 2.334 0 01-2.263-1.785 2.174 2.174 0 01-.05-.256 2.333 2.333 0 114.64-.021.046.046 0 00-.001.02c0 .086-.029.172-.05.258a2.333 2.333 0 01-2.277 1.784z"
            />
        </svg>
    );
};

export default IconConnectedCarLight;