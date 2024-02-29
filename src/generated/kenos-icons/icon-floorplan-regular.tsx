/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconFloorplanRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.772 14.445l-3.48-3.48v-8.59H2v19.254h16.291v-4.444a.743.743 0 00-.74-.74.743.743 0 00-.74.74v2.963H3.48v-8.516h1.11a.743.743 0 00.741-.741.743.743 0 00-.74-.74H3.48V3.855h6.665v6.294h-1.48a.743.743 0 00-.74.741c0 .407.332.74.74.74h2.962V3.857h5.183v7.553c0 .037 0 .037.038.074 0 .037 0 .037.037.074 0 .037.037.037.037.075 0 .037.037.037.037.074l3.813 3.813a.704.704 0 00.482.185.73.73 0 00.518-.222.716.716 0 000-1.037z"
            />
        </svg>
    );
};

export default IconFloorplanRegular;
