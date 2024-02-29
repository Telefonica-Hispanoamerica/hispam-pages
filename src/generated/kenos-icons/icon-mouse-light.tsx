/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconMouseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.252 11.723c0 .156.126.283.282.283.155 0 .28-.127.283-.283V8.762a.282.282 0 00-.283-.283.282.282 0 00-.282.283v2.96z"
            />
            <path
                fill={fillColor}
                d="M12.28 6.53v-.65a1.79 1.79 0 00-.185-.71c-.224-.43-.628-.649-1.194-.649H8.928c-1.804 0-2.97-.818-2.97-2.087a.283.283 0 11.566 0c0 .446.202.81.597 1.079.429.29 1.053.445 1.807.445h1.975c1 0 1.479.53 1.705.975.236.465.238.927.238.947v.651c3.401.107 5.196 1.979 5.196 5.433V16.4c0 1.873-.425 3.215-1.302 4.098-.9.902-2.272 1.338-4.205 1.338-3.602 0-5.506-1.879-5.506-5.436v-3.35a.275.275 0 010-.079v-1.008c0-3.473 1.814-5.347 5.252-5.434zm-4.69 6.8v3.072c0 3.233 1.664 4.872 4.944 4.872 1.776 0 3.02-.384 3.804-1.174.768-.773 1.14-1.983 1.14-3.7v-3.07c-1.614.21-3.26.313-4.89.313h-.112a38.54 38.54 0 01-4.885-.313zm9.889-.568v-.8c-.003-3.232-1.667-4.87-4.944-4.87-3.28 0-4.944 1.638-4.944 4.87v.801a38.29 38.29 0 004.938.317h.056a37.95 37.95 0 004.893-.318z"
            />
        </svg>
    );
};

export default IconMouseLight;
