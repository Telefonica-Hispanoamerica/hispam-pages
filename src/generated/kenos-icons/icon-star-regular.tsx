/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconStarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.747 21.568a2.087 2.087 0 002.218-.126 2.223 2.223 0 00.9-2.19l-.712-4.328a.096.096 0 01.025-.087l3.014-3.062a2.24 2.24 0 00.524-2.291 2.152 2.152 0 00-1.714-1.468l-4.165-.63a.062.062 0 01-.045-.034c-.003-.003-.003-.003-.003-.005L13.926 3.41a2.122 2.122 0 00-1.924-1.238c-.824 0-1.563.473-1.922 1.24L8.218 7.35a.021.021 0 00-.003.003v.003a.062.062 0 01-.045.034l-4.165.63c-.796.12-1.454.68-1.715 1.465a2.234 2.234 0 00.521 2.291l3.014 3.062c.02.022.031.053.026.087l-.712 4.324a2.213 2.213 0 00.9 2.19 2.08 2.08 0 002.215.13l3.728-2.042a.042.042 0 01.037 0l3.728 2.042zm-3.202-2.995a1.118 1.118 0 00-1.084 0l-3.728 2.042a.98.98 0 01-1.064-.061 1.14 1.14 0 01-.454-1.126l.711-4.325a1.19 1.19 0 00-.319-1.025l-.003-.003L3.59 11.01a1.162 1.162 0 01-.266-1.184c.132-.401.448-.676.843-.734l4.168-.63h.006c.378-.062.697-.303.86-.65l1.862-3.933c.183-.387.533-.617.939-.617.406 0 .759.23.941.617l1.863 3.932c.16.348.482.589.86.65h.005l4.168.633c.395.06.71.334.844.734.109.33.098.815-.267 1.185L17.4 14.078l-.003.002a1.188 1.188 0 00-.32 1.023l.712 4.325c.087.532-.177.93-.454 1.126a.982.982 0 01-1.064.061l-3.726-2.042z"
            />
        </svg>
    );
};

export default IconStarRegular;
