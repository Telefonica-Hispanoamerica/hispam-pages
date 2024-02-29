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

const IconTimeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 22C6.484 22 2 17.516 2 12S6.484 2 12 2s10 4.484 10 10a9.982 9.982 0 01-1.54 5.328.35.35 0 01-.492.112.35.35 0 01-.112-.492A9.212 9.212 0 0021.288 12c0-5.116-4.16-9.288-9.288-9.288-5.116 0-9.288 4.172-9.288 9.288 0 5.116 4.16 9.288 9.288 9.288a9.222 9.222 0 004.948-1.432.356.356 0 11.38.604A9.982 9.982 0 0112 22z"
                />
                <path
                    fill={fillColor}
                    d="M12 12.504L6.744 7.256a.362.362 0 010-.504.362.362 0 01.504 0l4.744 4.744L14.6 8.888a.362.362 0 01.504 0 .362.362 0 010 .504L12 12.504zm6.784 6.992a.712.712 0 100-1.424.712.712 0 000 1.424z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.997 2.155c6.22 0 9.848 3.14 9.848 9.848 0 6.707-3.628 9.842-9.848 9.842-6.22 0-9.842-3.135-9.842-9.842 0-6.707 3.623-9.848 9.842-9.848zm0 18.87c5.99 0 9.027-3.035 9.027-9.022 0-5.99-3.037-9.027-9.027-9.027-5.987 0-9.021 3.037-9.021 9.027 0 5.987 3.034 9.021 9.021 9.021zm3.323-6.013L12.412 12.1l-.006-3.93a.41.41 0 00-.818 0v4.1c0 .11.045.214.12.292l3.032 3.029c.157.154.41.154.569 0a.408.408 0 00.011-.58z"
                />
            </svg>
        );
    }
};

export default IconTimeLight;
