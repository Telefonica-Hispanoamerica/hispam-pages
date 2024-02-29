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

const Icon5GRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.4 6A1.6 1.6 0 0119 4.4h1A1.6 1.6 0 0121.6 6v14a1.6 1.6 0 01-1.6 1.6h-1a1.6 1.6 0 01-1.6-1.6V6zm1.6-.4a.4.4 0 00-.4.4v14c0 .22.18.4.4.4h1a.4.4 0 00.4-.4V6a.4.4 0 00-.4-.4h-1zM12.4 11A1.6 1.6 0 0114 9.4h1a1.6 1.6 0 011.6 1.6v9a1.6 1.6 0 01-1.6 1.6h-1a1.6 1.6 0 01-1.6-1.6v-9zm1.6-.4a.4.4 0 00-.4.4v9c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-9a.4.4 0 00-.4-.4h-1zM7.4 14A1.6 1.6 0 019 12.4h1a1.6 1.6 0 011.6 1.6v6a1.6 1.6 0 01-1.6 1.6H9A1.6 1.6 0 017.4 20v-6zm1.6-.4a.4.4 0 00-.4.4v6c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-6a.4.4 0 00-.4-.4H9zM2.4 18A1.6 1.6 0 014 16.4h1A1.6 1.6 0 016.6 18v2A1.6 1.6 0 015 21.6H4A1.6 1.6 0 012.4 20v-2zm1.6-.4a.4.4 0 00-.4.4v2c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-2a.4.4 0 00-.4-.4H4zM2 7.625c.59.579 1.439.92 2.564.92 1.648 0 2.687-.863 2.687-2.229 0-1.27-.963-2.049-2.049-2.049-.562 0-1.058.209-1.42.512v-1.3h3.03V2.105H2.2v3.71l1.134.275c.353-.323.753-.475 1.258-.475.658 0 .991.323.991.769 0 .408-.343.777-1.038.777-.61 0-1.23-.218-1.668-.626L2 7.625zm5.748-2.352c0 2.01 1.544 3.272 3.44 3.272 1.201 0 2.126-.483 2.812-1.233V4.836h-3.069v1.357h1.458v.531c-.257.209-.705.38-1.2.38-1.04 0-1.773-.797-1.773-1.831 0-1.034.734-1.831 1.773-1.831.6 0 1.086.332 1.343.75l1.373-.722C13.438 2.683 12.58 2 11.189 2c-1.897 0-3.44 1.262-3.44 3.273z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.64 15.572h1.428c1.252 0 2.18-1 2.184-2.284 0-1.32-.968-2.356-2.18-2.356h-.716V9.86H9.5c.392 0 .716-.32.716-.716a.718.718 0 00-.716-.716H5.928v3.928h2.14c.468 0 .752.464.752.928 0 .428-.216.856-.752.856H6.64a.72.72 0 00-.716.716c0 .392.32.716.716.716zM10.928 12a3.583 3.583 0 003.572 3.572A3.586 3.586 0 0018.072 12a.718.718 0 00-.716-.716h-2.284a.72.72 0 00-.716.716c0 .392.32.716.716.716h1.464c-.324.82-1.108 1.428-2.036 1.428A2.15 2.15 0 0112.356 12 2.15 2.15 0 0114.5 9.856c.572 0 1.104.212 1.5.608a.693.693 0 001 0 .693.693 0 000-1 3.504 3.504 0 00-2.5-1.036A3.583 3.583 0 0010.928 12z"
                />
                <path
                    fill={fillColor}
                    d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12zm1.428 0c0-4.716 3.856-8.572 8.572-8.572 4.712 0 8.572 3.856 8.572 8.572 0 4.716-3.856 8.572-8.572 8.572-4.716 0-8.572-3.856-8.572-8.572z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.982 19.093A9.86 9.86 0 0012.001 22a9.86 9.86 0 007.018-2.907 9.86 9.86 0 002.907-7.018 9.915 9.915 0 00-6.039-9.135.528.528 0 10-.414.971 8.861 8.861 0 015.397 8.164c0 4.891-3.979 8.87-8.87 8.87-4.89 0-8.869-3.979-8.869-8.87a8.861 8.861 0 015.397-8.164.528.528 0 10-.414-.97 9.915 9.915 0 00-6.039 9.134 9.86 9.86 0 002.907 7.018z"
                />
                <path
                    fill={fillColor}
                    d="M7.825 16.14c1.519 0 2.818-1.021 2.818-2.599 0-1.554-1.241-2.389-2.633-2.389h-.95V9.459h2.995a.554.554 0 00.558-.552.542.542 0 00-.557-.55H6.48a.626.626 0 00-.626.626v2.87c0 .195.159.354.355.354h1.408c1.136 0 1.763.488 1.763 1.358 0 .87-.673 1.45-1.59 1.45-.742 0-1.229-.372-1.623-.847a.569.569 0 00-.43-.21.585.585 0 00-.568.57c0 .115.047.231.105.324.533.754 1.403 1.288 2.552 1.288zm10.283-6.636a.598.598 0 01.162.482.58.58 0 01-.248.425l-.01.01a.594.594 0 01-.426.117.583.583 0 01-.39-.198 2.608 2.608 0 00-2.002-.876c-.75 0-1.39.265-1.92.795a2.623 2.623 0 00-.796 1.926c0 .753.265 1.395.796 1.926.53.527 1.17.79 1.92.79a2.63 2.63 0 001.769-.653c.503-.433.799-.914.887-1.445h-2.53a.595.595 0 01-.435-.182.586.586 0 01-.177-.43v-.011a.604.604 0 01.613-.613h3.218c.169 0 .314.059.436.177a.623.623 0 01.182.436v.005c0 1.091-.387 2.024-1.16 2.797-.777.774-1.712 1.161-2.803 1.161s-2.024-.387-2.797-1.16c-.774-.774-1.16-1.707-1.16-2.798s.386-2.024 1.16-2.797a3.81 3.81 0 012.797-1.16c1.159 0 2.13.425 2.914 1.276zM12 2a.678.678 0 110 1.356A.678.678 0 0112 2z"
                />
            </svg>
        );
    }
};

export default Icon5GRegular;
