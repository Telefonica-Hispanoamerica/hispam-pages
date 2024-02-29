/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconCommentLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.906 10.877a.37.37 0 01.363-.375c.2 0 .363.164.363.37 0 1.738-1.275 3.168-2.909 3.355v2.27a.364.364 0 01-.363.374.358.358 0 01-.256-.11l-2.439-2.515h-3.849c-1.806 0-3.272-1.512-3.272-3.374v-3H5.272c-1.406 0-2.546 1.176-2.546 2.626V15c0 1.45 1.14 2.626 2.546 2.626.2 0 .363.168.363.374v1.718l1.922-1.982a.343.343 0 01.256-.11h3.999c1.056 0 2.01-.687 2.383-1.704a.364.364 0 01.47-.221c.19.077.284.293.214.485-.475 1.31-1.704 2.188-3.063 2.188h-3.85L5.529 20.89a.358.358 0 01-.396.081.372.372 0 01-.223-.345v-2.27C3.275 18.162 2 16.732 2 15v-4.502c0-1.863 1.466-3.375 3.272-3.375h3.272v-.749C8.544 4.512 10.01 3 11.816 3h6.544c1.806 0 3.272 1.512 3.272 3.374a.37.37 0 01-.363.375.37.37 0 01-.363-.375c0-1.45-1.14-2.625-2.546-2.625h-6.544c-1.405 0-2.546 1.176-2.546 2.625v4.503c0 1.45 1.14 2.625 2.546 2.625h3.998a.364.364 0 01.26.11l1.923 1.983v-1.718a.37.37 0 01.363-.375c1.406 0 2.546-1.176 2.546-2.625zm.368-1.503c.4 0 .726-.336.726-.748a.739.739 0 00-.726-.75.74.74 0 00-.726.75c0 .412.326.748.726.748z"
            />
        </svg>
    );
};

export default IconCommentLight;
