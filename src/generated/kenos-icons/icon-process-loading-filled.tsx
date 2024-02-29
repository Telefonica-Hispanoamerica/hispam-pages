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

const IconProcessLoadingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.26 5.704a.74.74 0 001.48 0V2.74a.74.74 0 00-1.48 0v2.964zm0 15.556a.74.74 0 001.48 0v-2.964a.74.74 0 00-1.48 0v2.964zm4.296.036a.733.733 0 01-.668-.444l-1.148-2.74a.751.751 0 01.408-.964.751.751 0 01.964.408l1.148 2.74a.751.751 0 01-.408.964c-.062 0-.124.011-.18.021a.73.73 0 01-.116.015zm2.48-2.224a.739.739 0 00.52.224.714.714 0 00.516-.224.715.715 0 000-1.036l-2.112-2.112a.715.715 0 00-1.036 0 .715.715 0 000 1.036l2.112 2.112zm2.52-2.776c-.112 0-.184 0-.296-.076l-2.74-1.144a.751.751 0 01-.408-.964.751.751 0 01.964-.408l2.74 1.148a.751.751 0 01.408.964.714.714 0 01-.668.48zm-14.668-6.04c.112.076.184.076.296.076a.712.712 0 00.668-.484.751.751 0 00-.408-.964l-2.74-1.148a.751.751 0 00-.964.408.751.751 0 00.408.964l2.74 1.148zM21.26 12.74h-2.964a.74.74 0 010-1.48h2.964a.74.74 0 010 1.48zm-18.52 0h2.964a.74.74 0 000-1.48H2.74a.74.74 0 000 1.48zm15.076-2.408a.733.733 0 01-.668-.444.751.751 0 01.408-.964l2.74-1.148a.751.751 0 01.964.408.751.751 0 01-.408.964l-2.74 1.148c-.056 0-.104.01-.15.018a.726.726 0 01-.146.018zm-15.04 5.52c.112.26.372.444.668.444.056 0 .102-.009.148-.018a.731.731 0 01.148-.018l2.74-1.148a.751.751 0 00.408-.964.751.751 0 00-.964-.408l-2.74 1.148a.751.751 0 00-.408.964zm13.668-7.556a.739.739 0 01-.52-.224.715.715 0 010-1.036l2.112-2.112a.715.715 0 011.036 0 .715.715 0 010 1.036L16.96 8.072a.707.707 0 01-.516.224zM4.924 19.072a.707.707 0 001.036 0l2.076-2.076a.715.715 0 000-1.036.715.715 0 00-1.036 0l-2.076 2.076a.715.715 0 000 1.036zm9.484-12.148c-.112 0-.184 0-.296-.076a.751.751 0 01-.408-.964l1.148-2.74a.751.751 0 01.964-.408.751.751 0 01.408.964l-1.148 2.74a.712.712 0 01-.668.484zM8.148 21.22c.112.076.184.076.296.076.296 0 .592-.184.668-.484l1.148-2.74a.751.751 0 00-.408-.964.751.751 0 00-.964.408l-1.148 2.74a.751.751 0 00.408.964z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.155 12.001c0-6.443 3.403-9.846 9.84-9.846 6.443 0 9.846 3.403 9.846 9.846 0 6.437-3.406 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84zm10.49-4.174V4.802a.604.604 0 10-1.21 0v3.025a.604.604 0 101.21 0zm3.527 4.818h3.022a.604.604 0 100-1.21h-3.022a.604.604 0 100 1.21zm.46 4.902a.602.602 0 00.85-.003.604.604 0 000-.857l-2.136-2.137a.605.605 0 00-.855.854l2.14 2.143zM11.955 19.8a.604.604 0 00.605-.605V16.17a.604.604 0 10-1.21 0v3.025c0 .336.269.605.605.605zm-2.512-4.454a.6.6 0 000-.829.606.606 0 00-.855-.022L6.452 16.63a.605.605 0 00.854.854l2.138-2.14zm-4.642-3.994a.606.606 0 000 1.21h3.025a.604.604 0 100-1.21H4.802zm9.75-2.7a.608.608 0 00-.002.854.605.605 0 00.854 0l2.14-2.137a.605.605 0 00-.854-.854L14.553 8.65z"
                />
            </svg>
        );
    }
};

export default IconProcessLoadingFilled;
