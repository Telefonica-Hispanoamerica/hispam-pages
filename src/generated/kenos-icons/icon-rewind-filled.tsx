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

const IconRewindFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 2C6.488 2 2 6.488 2 12s4.488 10 10 10 10-4.488 10-10S17.512 2 12 2zm-1.051 14.264a.535.535 0 11-.759.759l-4.639-4.644a.535.535 0 010-.758l4.644-4.644a.535.535 0 11.759.759L6.688 12l4.26 4.264zm6.07.759a.532.532 0 01-.38.155.532.532 0 01-.38-.155l-4.638-4.644a.535.535 0 010-.758l4.643-4.644a.536.536 0 11.759.759L12.759 12l4.26 4.264c.21.21.21.549 0 .759z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.999 2.145c3.131 0 5.565.818 7.238 2.429 1.736 1.675 2.616 4.173 2.616 7.425s-.88 5.751-2.616 7.423c-1.673 1.61-4.11 2.429-7.238 2.429-3.13 0-5.563-.818-7.236-2.429C3.03 17.75 2.15 15.254 2.15 12s.88-5.75 2.616-7.425c1.67-1.612 4.101-2.43 7.234-2.43zm5.042 13.092a.56.56 0 00.56-.56V8.711a.56.56 0 00-.849-.479l-4.989 2.997a.57.57 0 00-.213.232V8.705a.56.56 0 00-.849-.479l-4.988 2.997a.56.56 0 00.003.96l4.989 2.97a.56.56 0 00.846-.482v-2.716a.56.56 0 00.215.235l4.989 2.969a.57.57 0 00.286.078z"
                />
            </svg>
        );
    }
};

export default IconRewindFilled;
