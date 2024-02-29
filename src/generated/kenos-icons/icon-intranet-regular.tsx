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

const IconIntranetRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12C2 6.464 6.464 2 12 2s10 4.464 10 10-4.464 10-10 10S2 17.536 2 12zm5.392-5.536c.288-.856.68-1.64 1.144-2.284-2.824 1.248-4.856 3.928-5.108 7.104H6.5c0-.356.036-.716.072-1.072-.68-.32-1.144-1-1.144-1.784 0-1.068.892-1.964 1.964-1.964zm.856 1.964a.89.89 0 00-.896-.896.89.89 0 00-.896.896c0 .5.396.896.896.896a.89.89 0 00.896-.896zm-1.784 4.288h-3c.248 3.176 2.248 5.852 5.072 7.108-1.176-1.68-1.964-4.18-2.072-7.108zm4.82 7.712v-7.716H7.892c.14 3.824 1.608 7.036 3.392 7.716zm-3.392-9.144h3.392V3.572c-1.072.392-2 1.676-2.608 3.428.392.356.644.856.644 1.428 0 .856-.572 1.604-1.356 1.856-.036.32-.072.644-.072 1zm12.676 0c-.248-3.176-2.284-5.856-5.104-7.104 1.176 1.68 1.964 4.18 2.072 7.104h3.032zm-4.46.004c-.14-3.824-1.608-7.036-3.392-7.716v7.716h3.392zm-3.392 9.14c1.784-.68 3.248-3.892 3.392-7.712h-3.392v7.712zm4.82-7.716c-.108 2.896-.892 5.428-2.072 7.108 2.82-1.252 4.856-3.928 5.108-7.108h-3.036z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.514 14.376a2.303 2.303 0 01-2.221-1.661H12.86v1.042h2.857c.337 0 .608.266.617.593l.042 4.437h.921a2.303 2.303 0 012.222-1.66c1.282 0 2.319 1.019 2.319 2.263 0 1.243-1.037 2.255-2.32 2.255a2.296 2.296 0 01-2.22-1.653h-1.533a.608.608 0 01-.616-.594l-.048-4.437h-2.238v6.28c0 .33-.269.602-.616.602-4.034 0-6.896-1.274-8.518-3.73-.005-.008-.011-.011-.02-.016a.087.087 0 01-.022-.016c-.017-.014-.026-.037-.035-.06l-.016-.035c-.963-1.524-1.465-3.49-1.481-5.89v-.098c0-6.435 3.49-9.838 10.09-9.838.344 0 .615.266.615.602v6.443h2.24l.047-4.432a.61.61 0 01.616-.602h1.53a2.306 2.306 0 012.221-1.652c1.283 0 2.32 1.01 2.32 2.254 0 1.253-1.037 2.264-2.32 2.264a2.303 2.303 0 01-2.221-1.661h-.922l-.042 4.44a.614.614 0 01-.616.593h-2.857v1.101h4.437a2.303 2.303 0 012.221-1.661c1.283 0 2.32 1.02 2.32 2.263 0 1.244-1.037 2.264-2.32 2.264zM11.624 3.45c-1.36.362-2.519 1.888-3.21 4.048a20.8 20.8 0 003.21.44V3.45zM7.227 7.177c.463-1.423 1.112-2.61 1.91-3.476-1.786.425-3.153 1.252-4.106 2.487.675.426 1.432.74 2.196.989zm-2.848.039c-.591 1.162-.922 2.583-.978 4.26H6.52c.033-1.106.173-2.156.386-3.137-.863-.271-1.736-.633-2.526-1.123zm2.15 5.465H3.41c.065 1.622.404 3.003.99 4.126.772-.482 1.646-.846 2.517-1.118a16.618 16.618 0 01-.386-3.008zm5.093 3.403a20.98 20.98 0 00-3.21.451c.692 2.143 1.86 3.659 3.21 4.012v-4.463zm8.98 3.306c0-.586-.487-1.06-1.086-1.06a1.07 1.07 0 00-1.079 1.06c0 .577.485 1.05 1.079 1.05.602 0 1.087-.473 1.087-1.05zM5.05 17.832c.952 1.221 2.311 2.048 4.081 2.47-.79-.865-1.44-2.047-1.902-3.45-.764.25-1.52.563-2.179.98zM8.091 8.66a16.202 16.202 0 00-.336 2.817h3.865V9.14a19.695 19.695 0 01-3.529-.481zm3.532 4.022H7.766c.031.947.146 1.854.336 2.689a22.32 22.32 0 013.521-.49V12.68zm8.98-7.908c0-.577-.487-1.05-1.086-1.05-.594 0-1.079.476-1.079 1.05a1.07 1.07 0 001.079 1.06c.602 0 1.087-.474 1.087-1.06zm-1.086 6.28a1.07 1.07 0 00-1.079 1.06 1.07 1.07 0 001.079 1.058c.602 0 1.087-.473 1.087-1.059 0-.585-.488-1.059-1.087-1.059z"
                />
            </svg>
        );
    }
};

export default IconIntranetRegular;