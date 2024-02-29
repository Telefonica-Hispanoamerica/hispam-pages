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

const IconPersonalComputerRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.642 6a.667.667 0 00-.666-.667h-16A.667.667 0 003.309 6v10c0 .367.299.666.667.666h16a.667.667 0 00.666-.666V6zm-7.078 13.333L12.897 18h-1.843l-.666 1.333h3.176zM21.975 6v10a2.002 2.002 0 01-1.999 2h-5.588l1.333 2.666h-7.49L9.564 18H3.976c-1.103 0-2-.897-2-1.999V6c0-1.103.897-2 2-2h16c1.102 0 1.999.897 1.999 2zm-3.999 9.333h1.333V14h-1.333v1.333z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 2.5h19.995v14.908h-6.247l.854 3.162a.673.673 0 01-.105.634.73.73 0 01-.571.296H8.069a.73.73 0 01-.57-.296c-.106-.186-.18-.41-.106-.634l.86-3.167H2V2.5zm18.57 10.807V3.993H3.43v9.314h17.14zm-5.572 6.705l-.676-2.609H9.678l-.676 2.609h5.996zM3.431 14.427v1.488H20.57v-1.487H3.43z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.186 13.297c0 1.592.916 2.502 2.513 2.502l2.11-.001-.549.574-3.536.001a.55.55 0 000 1.098l13.11-.005a.55.55 0 000-1.098l-3.622.001-.557-.574 2.204-.002c1.596 0 2.512-.913 2.512-2.501v-4.28c0-.776-.213-1.387-.636-1.815-.434-.443-1.067-.667-1.877-.667l-9.16.006c-.809 0-1.442.224-1.876.666-.423.429-.636 1.04-.636 1.815v4.28zm7.941 2.499h-1.8l-.548.575 2.905-.001-.557-.574zM4.7 7.61l9.16-.005c1.008 0 1.437.42 1.437 1.406v4.28c0 1-.43 1.426-1.438 1.426l-9.16.005c-1.005 0-1.436-.426-1.436-1.426v-4.28c0-.986.428-1.406 1.437-1.406zm13.682 9.839h1.997c.435 0 1.449-.196 1.449-2.017l-.003-6.88c0-1.82-1.014-2.016-1.448-2.016H18.38c-.474 0-.872.218-1.12.61-.217.34-.32.799-.32 1.406l.005 6.88c0 .608.104 1.067.317 1.406.25.395.647.61 1.12.61zm-.003-9.852V7.6h1.998c.129 0 .182.042.23.118.058.092.156.322.156.837l.003 6.88c0 .512-.098.742-.157.835-.05.075-.1.117-.23.117h-1.997c-.126 0-.173-.039-.221-.115-.059-.092-.154-.322-.154-.84l-.003-6.88c0-.518.095-.747.154-.84.045-.076.095-.115.221-.115z"
                />
            </svg>
        );
    }
};

export default IconPersonalComputerRegular;
