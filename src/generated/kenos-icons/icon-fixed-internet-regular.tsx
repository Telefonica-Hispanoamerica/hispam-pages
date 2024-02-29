/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconFixedInternetRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 2L2.91 7.4V22h18.182V7.4L12 2zm7.574 18.443H4.428V8.297L12 3.797l7.573 4.5v12.146zM6.318 13.228c0-3.224 2.55-5.849 5.683-5.849.002 0 .005.003.005.003s.002.002.005.002h.014c3.123 0 5.663 2.615 5.663 5.829a5.96 5.96 0 01-.446 2.265c-.853 2.11-2.88 3.598-5.241 3.598-3.132 0-5.683-2.625-5.683-5.848zm8.616-.584h1.571a4.669 4.669 0 00-2.37-3.543c.45.918.736 2.14.8 3.543zm-4.674 1.172c.097 1.847.626 3.16 1.174 3.733v-3.733H10.26zm-.005-1.172h1.174V8.87c-.548.58-1.081 1.906-1.174 3.773zm-1.134 0c.063-1.408.354-2.64.805-3.558a4.675 4.675 0 00-2.39 3.558H9.12zm0 1.172H7.54a4.675 4.675 0 002.385 3.523c-.446-.913-.742-2.13-.805-3.523zm3.447-.005v3.783c.567-.544 1.125-1.877 1.227-3.783h-1.227zm0-1.167h1.227c-.092-1.921-.66-3.269-1.227-3.818v3.818zm2.366 1.167c-.063 1.393-.359 2.615-.805 3.523a4.649 4.649 0 002.07-2.315 4.74 4.74 0 00.311-1.208h-1.576z"
            />
        </svg>
    );
};

export default IconFixedInternetRegular;
