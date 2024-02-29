/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconStarFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.748 21.834c-.353 0-.697-.09-1.005-.26l-3.56-1.953c-.138-.064-.253-.081-.39.008l-3.546 1.944a2.08 2.08 0 01-2.216-.128 2.218 2.218 0 01-.899-2.19l.664-4.029c.064-.317.011-.392-.18-.591l-2.812-2.857a2.234 2.234 0 01-.52-2.291 2.152 2.152 0 011.714-1.468l3.896-.591c.238-.045.308-.079.457-.381l1.722-3.636a2.111 2.111 0 011.922-1.238c.826 0 1.563.476 1.924 1.238l1.731 3.655c.14.264.185.323.49.367l3.858.586c.795.12 1.45.683 1.714 1.468.272.8.07 1.689-.521 2.29l-2.712 2.732c-.31.31-.322.339-.271.714l.65 4.031a2.223 2.223 0 01-.9 2.19c-.352.253-.775.39-1.21.39z"
            />
        </svg>
    );
};

export default IconStarFilled;
