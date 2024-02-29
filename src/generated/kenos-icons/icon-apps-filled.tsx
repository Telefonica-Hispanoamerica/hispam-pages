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

const IconAppsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.925 2H9.31c1.052 0 1.917.864 1.92 1.925v5.374c0 1.06-.864 1.925-1.924 1.925H3.925A1.926 1.926 0 012 9.307V3.925C2 2.865 2.864 2 3.925 2zm10.768 0h5.386c1.053 0 1.917.864 1.921 1.925v5.382c0 1.06-.864 1.925-1.925 1.925h-5.382a1.928 1.928 0 01-1.925-1.925V3.925c0-1.06.865-1.925 1.925-1.925zM9.311 12.768H3.925c-1.06 0-1.925.865-1.925 1.925v5.382c0 1.053.864 1.917 1.925 1.917h5.382c1.06 0 1.925-.864 1.925-1.925v-5.382a1.93 1.93 0 00-1.921-1.917zm5.382 0h5.386c1.053 0 1.917.865 1.921 1.925v5.382c0 1.06-.864 1.925-1.925 1.925h-5.382a1.928 1.928 0 01-1.925-1.925v-5.382c0-1.06.865-1.925 1.925-1.925z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.36 2.155H3.134c-.54 0-.98.44-.98.98V6.36c0 .541.44.98.98.98H6.36a.98.98 0 00.98-.98V3.135c0-.54-.44-.98-.98-.98zm4.027 0h3.224c.541 0 .98.44.98.98V6.36a.98.98 0 01-.98.98h-3.224a.98.98 0 01-.98-.98V3.135c0-.54.437-.98.98-.98zm7.25 0h3.224c.54 0 .98.44.98.98V6.36a.98.98 0 01-.98.98h-3.224a.98.98 0 01-.98-.98V3.135c0-.54.439-.98.98-.98zm0 7.252h3.224c.54 0 .98.44.98.98v3.225c0 .54-.44.98-.98.98h-3.224a.98.98 0 01-.98-.98v-3.225c0-.543.439-.98.98-.98zm-4.026 0h-3.224a.978.978 0 00-.98.98v3.225c0 .54.44.98.98.98h3.224a.98.98 0 00.98-.98v-3.225a.98.98 0 00-.98-.98zm-10.476 0H6.36c.54 0 .98.44.98.98v3.225c0 .54-.44.98-.98.98H3.135c-.54 0-.98-.44-.98-.98v-3.225c0-.543.44-.98.98-.98zm10.476 7.25h-3.224a.98.98 0 00-.98.98v3.224c0 .54.44.98.98.98h3.224a.98.98 0 00.98-.98v-3.224a.98.98 0 00-.98-.98zm4.003 0h3.224c.54 0 .98.44.98.98v3.224c0 .54-.44.98-.98.98h-3.224c-.54 0-.98-.44-.98-.98v-3.224c0-.54.437-.98.98-.98zm-11.255 0H3.135c-.54 0-.98.44-.98.98v3.224c0 .54.44.98.98.98H6.36c.54 0 .98-.44.98-.98v-3.224c0-.54-.44-.98-.98-.98z"
                />
            </svg>
        );
    }
};

export default IconAppsFilled;
