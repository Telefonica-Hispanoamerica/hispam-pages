/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconSportBallLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2.151 11.994c0-5.431 4.412-9.843 9.843-9.843 5.432 0 9.843 4.412 9.843 9.843 0 5.429-4.411 9.843-9.843 9.843-5.431 0-9.843-4.414-9.843-9.843zm6.776-.459h2.658V2.98a8.995 8.995 0 00-4.627 1.524c1.216 1.824 1.922 4.35 1.97 7.031zm8.07-7.045a8.907 8.907 0 00-4.594-1.51v8.555h2.603c.056-2.697.77-5.224 1.991-7.045zm.765 14.434a9.03 9.03 0 003.25-6.571h-5.186c.073 2.535.787 4.938 1.936 6.571zm-5.359 2.084a8.954 8.954 0 004.709-1.59c-1.263-1.771-2.036-4.356-2.11-7.062h-2.599v8.652zm8.605-9.473a9.014 9.014 0 00-3.353-6.555c-1.106 1.684-1.773 4.037-1.829 6.555h5.182zm-9.425 9.473v-8.655H8.924c-.086 2.692-.851 5.266-2.09 7.04a8.978 8.978 0 004.749 1.615zm-3.48-8.652H2.979a9.034 9.034 0 003.207 6.537c1.132-1.633 1.837-4.027 1.919-6.537zm-1.809-7.35a9.043 9.043 0 00-3.314 6.529h5.126c-.047-2.501-.697-4.84-1.812-6.53z"
            />
        </svg>
    );
};

export default IconSportBallLight;