/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconCopyLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.218 7.899h4.367c.692 0 1.252.56 1.252 1.252v11.437c0 .691-.56 1.252-1.252 1.252H9.145c-.691 0-1.251-.56-1.251-1.252v-4.311c0-.062.016-.124.044-.18H3.403c-.692 0-1.252-.56-1.252-1.252V3.408c0-.689.56-1.252 1.252-1.252h11.44c.692 0 1.252.56 1.252 1.252v4.516a.46.46 0 01.123-.025zm-13.246 6.95c0 .237.193.43.431.43h11.44a.436.436 0 00.434-.434V3.408a.435.435 0 00-.434-.434H3.403a.434.434 0 00-.431.434v11.44zm18.045 5.741h.003V9.153a.435.435 0 00-.435-.434h-4.367a.46.46 0 01-.123-.025v6.154c0 .692-.56 1.252-1.252 1.252H8.67a.404.404 0 01.045.18v4.31c0 .241.194.435.432.435h11.437a.436.436 0 00.434-.435z"
            />
        </svg>
    );
};

export default IconCopyLight;
