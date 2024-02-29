/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconErrorFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.847 8.04a.799.799 0 00-.034-.182c-.008-.008-.017-.025-.011-.028a.17.17 0 01-.007-.016.636.636 0 00-.15-.216l-4.97-4.832-.417-.412h-.008a.636.636 0 00-.196-.14h-.017c0-.009-.008-.009-.017-.009a.691.691 0 00-.246-.05H8.228c-.64 0-1.219.577-1.219 1.21V8.19l-4.731 9.364c-.073.148-.115.31-.115.484.008.544.451.98.983.98h.009l3.854.01v1.613c0 .641.571 1.201 1.219 1.201H20.62c.66 0 1.227-.552 1.227-1.201V8.04zm-1.031-.106h-2.35c-.762 0-1.41-.241-1.866-.68-.448-.446-.695-1.065-.695-1.796V3.16l4.91 4.773zm-11.63 7.09a.616.616 0 01-.614-.617V9.934a.614.614 0 111.227 0v4.473a.614.614 0 01-.614.616zm.005 1.607a.644.644 0 010-1.288.644.644 0 010 1.288zm-1.793 1.16h-.392l-3.462-.009L9.16 6.64l5.533 11.184-7.295-.033z"
            />
        </svg>
    );
};

export default IconErrorFilled;
