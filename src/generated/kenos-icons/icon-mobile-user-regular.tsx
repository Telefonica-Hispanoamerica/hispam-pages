/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconMobileUserRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.839 2h6.316c1.936 0 3.508 1.605 3.508 3.576v12.853c0 1.97-1.572 3.571-3.508 3.571H8.839c-1.937 0-3.509-1.6-3.509-3.571V5.57C5.33 3.601 6.902 2 8.839 2zM6.732 6.646v10.718h10.53V6.646H6.732zM8.839 3.43c-1.043 0-1.905.773-2.076 1.788H17.23c-.17-1.015-1.033-1.788-2.075-1.788H8.839zm0 17.147h6.316c1.042 0 1.905-.773 2.075-1.788H6.763c.17 1.015 1.033 1.788 2.076 1.788zm4.977-8.427c.499-.49.813-1.175.813-1.934 0-1.477-1.181-2.68-2.632-2.68s-2.633 1.203-2.633 2.68c0 .759.315 1.445.813 1.934-1.15.462-1.869 1.376-1.869 2.533v1.07c0 .297.234.535.526.535a.528.528 0 00.526-.535v-1.07c0-1.052 1.082-1.788 2.632-1.788s2.633.736 2.633 1.788v1.07a.528.528 0 101.055 0v-1.07c0-1.157-.714-2.071-1.864-2.533zm-1.82-3.544c.872 0 1.582.723 1.582 1.61 0 .887-.71 1.61-1.581 1.61-.872 0-1.582-.723-1.582-1.61 0-.887.71-1.61 1.582-1.61z"
            />
        </svg>
    );
};

export default IconMobileUserRegular;
