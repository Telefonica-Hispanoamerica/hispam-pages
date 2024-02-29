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

const IconControlsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.055 14.18V2.356c0-.216-.143-.356-.352-.356-.214 0-.352.144-.352.356v11.82a2.141 2.141 0 000 4.216v3.252c0 .216.142.356.352.356.213 0 .352-.144.352-.356v-3.252a2.141 2.141 0 001.762-2.108 2.134 2.134 0 00-1.762-2.104zm-.352 3.536a1.425 1.425 0 01-1.411-1.428c0-.784.636-1.428 1.41-1.428.775 0 1.412.644 1.412 1.428 0 .784-.637 1.428-1.411 1.428zm5.643-10.68v-4.68c0-.216-.142-.356-.352-.356s-.352.144-.352.356v4.68a2.141 2.141 0 000 4.216v7.892c0 .216.143.356.352.356.21 0 .352-.144.352-.356v-7.892a2.141 2.141 0 000-4.216zm-.352 13.532c.39 0 .708.32.708.716a.712.712 0 01-.708.716.712.712 0 01-.707-.716c0-.395.317-.716.707-.716zM6.994 2c.21 0 .352.14.352.356v4.68a2.141 2.141 0 010 4.216v10.363c0 .212-.142.356-.352.356s-.351-.14-.351-.356V11.252a2.141 2.141 0 010-4.216v-4.68c0-.212.142-.356.351-.356zm10 5.716c.775 0 1.411.644 1.411 1.428 0 .784-.636 1.428-1.41 1.428a1.426 1.426 0 01-1.412-1.428c0-.784.637-1.428 1.411-1.428zm-10 0c-.774 0-1.41.644-1.41 1.428 0 .784.636 1.428 1.41 1.428.775 0 1.411-.644 1.411-1.428 0-.784-.636-1.428-1.41-1.428z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.204 5.56c0 .22.182.4.41.4H3.86l.01.088a.92.92 0 00.018.13A2.785 2.785 0 005.15 7.932a2.885 2.885 0 002.16.364 2.84 2.84 0 001.787-1.24 2.74 2.74 0 00.406-1.096h11.905c.227 0 .409-.18.409-.4a.404.404 0 00-.41-.401H9.497a1.45 1.45 0 01-.01-.088c-.004-.043-.008-.087-.018-.13a2.785 2.785 0 00-1.264-1.754 2.872 2.872 0 00-2.157-.364A2.844 2.844 0 004.26 4.06c-.215.339-.35.714-.406 1.098h-1.24a.404.404 0 00-.41.4zm2.48.44a1.959 1.959 0 01.265-1.514 2.035 2.035 0 011.278-.885 2.061 2.061 0 011.54.26c.46.287.782.732.902 1.253a1.97 1.97 0 01-.266 1.513 2.035 2.035 0 01-1.277.885 2.065 2.065 0 01-1.54-.26 2.001 2.001 0 01-.903-1.253zm12.596 8.005c-1.126 0-2.045-.9-2.045-2.006 0-1.106.919-2.006 2.045-2.006s2.042.9 2.042 2.006c0 1.106-.916 2.006-2.042 2.006zm4.512-2.006c0-.221-.182-.4-.408-.4h-1.286a2.838 2.838 0 00-2.818-2.407 2.838 2.838 0 00-2.818 2.406H2.588a.404.404 0 00-.409.401c0 .221.182.4.409.4h11.874a2.838 2.838 0 002.818 2.407 2.838 2.838 0 002.818-2.406h1.286c.226 0 .409-.18.409-.4zM9.42 20.436c-1.126 0-2.042-.9-2.045-2.006 0-1.106.919-2.005 2.045-2.005s2.042.899 2.042 2.005c0 1.107-.916 2.006-2.042 2.006zm12.37-2.006c0-.22-.182-.4-.41-.4h-9.142a2.838 2.838 0 00-2.818-2.406 2.838 2.838 0 00-2.818 2.406H2.585a.404.404 0 00-.409.4c0 .222.182.401.41.401h4.016a2.838 2.838 0 002.818 2.406 2.838 2.838 0 002.818-2.406h9.143c.227 0 .409-.18.409-.4z"
                />
            </svg>
        );
    }
};

export default IconControlsLight;
