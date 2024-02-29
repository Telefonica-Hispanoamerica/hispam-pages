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

const IconBellFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.993 11.644c0 2.144.7 4.284 1.957 6 .173.212.177.504.07.752-.105.248-.351.392-.63.392H3.613c-.282 0-.524-.14-.63-.392-.106-.252-.106-.536.07-.752a10.251 10.251 0 001.958-6v-2.5C5.01 5.216 8.157 2 12 2c3.845 0 6.992 3.216 6.992 7.144v2.5zM12.006 22c-1.296 0-2.38-.928-2.694-2.144H14.7C14.382 21.072 13.3 22 12.005 22z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.045 3.84c1.938-1.759 4.627-1.678 4.96-1.658.334-.02 3.023-.104 4.956 1.655 1.283 1.166 1.935 2.86 1.935 5.037v3.874c-.003.061-.199 3.658 1.975 5.392a.407.407 0 01.129.456.42.42 0 01-.395.272h-1.726l-1.126-.003h-2.776c-.005.51-.114 1.415-.745 2.101-.52.569-1.271.857-2.232.857-.964 0-1.714-.288-2.235-.86-.63-.689-.734-1.596-.737-2.098H3.4a.421.421 0 01-.395-.271.4.4 0 01.13-.457c1.762-1.406 1.966-4.036 1.979-5v-.17a4.172 4.172 0 00-.005-.197v-3.9c0-1.223.216-2.29.625-3.2l.417-.774a5.46 5.46 0 01.894-1.056zm6.828 15.123h-3.74c.028.35.129.837.454 1.19.31.34.773.502 1.414.502.639 0 1.101-.166 1.412-.502.325-.352.429-.837.46-1.19z"
                />
            </svg>
        );
    }
};

export default IconBellFilled;
