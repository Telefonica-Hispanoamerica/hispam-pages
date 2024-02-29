/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconWaitClockRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.17 17.383a.747.747 0 01.819.62.68.68 0 01-.61.799l-3.805.582-.533-3.89c-.069-.403.212-.763.605-.837a.747.747 0 01.818.619l.217 1.562A8.856 8.856 0 0020.14 12c0-4.727-3.742-8.549-8.361-8.549-4.62 0-8.357 3.822-8.357 8.549 0 4.727 3.738 8.549 8.353 8.508 1.243 0 2.454-.255 3.556-.8a.754.754 0 01.963.36c.144.366 0 .804-.353.985A9.686 9.686 0 0111.78 22C6.375 22 2 17.531 2 12S6.37 2 11.78 2c5.41 0 9.784 4.469 9.784 10 0 2-.606 3.928-1.672 5.564l1.279-.18z"
            />
            <path
                fill={fillColor}
                d="M11.066 5.456c0-.401.32-.73.714-.73a.71.71 0 01.706.726v6.253l2.634 2.694a.712.712 0 010 1.016.694.694 0 01-.497.222.694.694 0 01-.497-.222l-2.843-2.907a.725.725 0 01-.217-.508V5.456z"
            />
        </svg>
    );
};

export default IconWaitClockRegular;
