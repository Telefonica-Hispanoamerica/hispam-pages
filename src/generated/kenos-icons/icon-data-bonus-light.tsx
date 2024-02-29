/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDataBonusLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.528 19.822V3.82c0-1-.79-1.815-1.761-1.82H4.245C3.27 2 2.48 2.82 2.48 3.82v15.997c0 1.005.795 1.82 1.765 1.82h11.64a.358.358 0 00.351-.363c0-.2-.158-.363-.352-.363H4.245c-.582 0-1.056-.489-1.056-1.09V3.82c0-.6.474-1.09 1.056-1.09h15.517c.583 0 1.057.49 1.057 1.09v16.002c0 .493-.325.926-.795 1.052a.362.362 0 00-.253.442.35.35 0 00.43.26c.78-.204 1.327-.926 1.327-1.754zm-3.17-12h1.409a.354.354 0 00.348-.362c0-.2-.159-.363-.353-.363h-1.408V5.644c0-.2-.158-.363-.352-.363a.358.358 0 00-.352.363v1.453h-1.405a.358.358 0 00-.352.363c0 .2.158.363.352.363h1.409v1.452c0 .2.158.363.352.363a.358.358 0 00.352-.363V7.823zm-12.7 3.999c0 1.405 1.106 2.546 2.47 2.546 1.241 0 2.27-.95 2.442-2.183H8.48a.358.358 0 01-.352-.363c0-.2.158-.363.352-.363h2.47c.194 0 .352.163.352.363 0 1.806-1.422 3.272-3.174 3.272s-3.174-1.466-3.174-3.272c0-1.806 1.422-3.272 3.174-3.272a3.15 3.15 0 011.986.717.37.37 0 01.055.512.345.345 0 01-.497.055 2.41 2.41 0 00-1.544-.558c-1.364 0-2.47 1.14-2.47 2.546zm10.583-1.452c0-1.001-.79-1.82-1.765-1.82h-2.118a.358.358 0 00-.352.363v5.818c0 .2.158.363.352.363h2.47c.97 0 1.765-.815 1.765-1.82 0-.684-.375-1.275-.916-1.582.343-.331.564-.801.564-1.322zm-3.53-1.094h1.765c.582 0 1.056.489 1.056 1.089s-.474 1.09-1.056 1.09H12.71v-2.18zm3.173 3.998c0 .6-.474 1.09-1.056 1.09H12.71v-2.184h2.118v.005c.582 0 1.056.489 1.056 1.089zm2.822 8a.717.717 0 01-.704.727.716.716 0 01-.705-.726c0-.4.316-.726.705-.726.388 0 .704.326.704.726z"
            />
        </svg>
    );
};

export default IconDataBonusLight;
