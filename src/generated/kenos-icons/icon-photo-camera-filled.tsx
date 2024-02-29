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

const IconPhotoCameraFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.248 12.712a3.753 3.753 0 013.748-3.748 3.753 3.753 0 013.748 3.748 3.75 3.75 0 01-3.748 3.748 3.75 3.75 0 01-3.748-3.748z"
                />
                <path
                    fill={fillColor}
                    d="M17.648 6.288h2.204c1.18 0 2.144.96 2.144 2.144v10c0 1.184-.96 2.144-2.144 2.144H4.14a2.144 2.144 0 01-2.144-2.144v-10c0-1.184.96-2.144 2.144-2.144h2.2L8.992 3.64a.69.69 0 01.504-.212h5c.188 0 .372.076.508.212l2.644 2.648zM7.176 12.716c0 2.66 2.164 4.82 4.82 4.82s4.82-2.16 4.82-4.82-2.164-4.82-4.82-4.82a4.825 4.825 0 00-4.82 4.82z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.597 11.36h.806a1.327 1.327 0 011.329 1.33v.805a1.33 1.33 0 01-1.33 1.33h-.805a1.327 1.327 0 01-1.33-1.33v-.806a1.33 1.33 0 011.33-1.329z"
                />
                <path
                    fill={fillColor}
                    d="M9.603 5.36a1.636 1.636 0 011.468-.913h1.69c.597 0 1.146.324 1.434.847l.722 1.313h5.345c.96 0 1.738.779 1.738 1.739v9.461c0 .96-.778 1.739-1.738 1.739H3.331A1.331 1.331 0 012 18.214V8.346c0-.96.778-1.739 1.738-1.739h5.25l.615-1.247zm1.994 4.773a2.556 2.556 0 00-2.556 2.556v.806a2.556 2.556 0 002.556 2.556h.806a2.556 2.556 0 002.556-2.556v-.806a2.556 2.556 0 00-2.556-2.556h-.806z"
                />
            </svg>
        );
    }
};

export default IconPhotoCameraFilled;
