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

const IconFootballBallFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.05 7.992L7.352 6.214l.383-3.158A9.143 9.143 0 0111.99 2c.426 0 .84.032 1.25.087l1.563 2.916L13.74 7.2l-4.69.79zm5.518-5.617l1.14 2.13 2.095-.42a9.319 9.319 0 00-3.235-1.71zM6.355 5.976l.274-2.235A9.784 9.784 0 004.064 6.47l2.29-.494zm12.907 6.554l2.1-2.33a10.173 10.173 0 00-2.592-5.22l-3.114.626-1.006 2.08 2.165 4.442 2.447.402zm-3.405-.018L13.793 8.28l-4.473.75-.7 4.698 4.04 2.152 3.197-3.368zM4.508 18.17a10.215 10.215 0 01-1.642-3.318l1.925.923-.283 2.395zm16.444-2.774a10.394 10.394 0 00.557-3.798l-1.485 1.65.928 2.148zm-12.895-.763l4.216 2.244.213 2.687-2.077 2.29c-1.92-.338-3.65-1.284-5-2.642l.401-3.377 2.247-1.203zm3.641 7.357l1.48-1.63 2.052 1.046a9.081 9.081 0 01-3.236.594c-.096 0-.188-.004-.284-.009h-.012zm4.956-8.802l2.39.393 1.35 3.122c-.897 1.755-2.277 3.2-3.95 4.132l-2.956-1.504-.205-2.591 3.37-3.552zM5.366 14.87l2.23-1.197.736-4.927L6.664 7l-3.27.708a10.321 10.321 0 00-.924 4.287c0 .522.04 1.038.113 1.54l2.783 1.335z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.298 2.156l.15.002c1.976.028 9.393.742 9.393 9.874 0 9.115-7.347 9.793-9.322 9.81h-.199c-.25 0-.51-.003-.734-.01-1.93-.047-9.431-.809-9.431-9.859 0-9.073 7.515-9.779 9.392-9.812.182-.003.39-.006.597-.006l.154.001zm.316 4.15V7.74c.263.07.516.18.731.342l2.18 1.583c.226.16.409.358.557.58l1.154-.485a2.18 2.18 0 01.104-.851l.832-2.56c.07-.222.179-.426.31-.611a7.06 7.06 0 00-2.604-1.709l-.029.031c-.1.111-.202.224-.327.314L13.34 5.959c-.213.16-.463.274-.726.347zM8.471 4.371a2.173 2.173 0 01-.344-.336c-.916.353-1.832.89-2.616 1.705.109.169.204.348.266.541l.832 2.566c.092.269.123.563.1.857l1.194.552c.15-.227.339-.434.571-.6l2.182-1.585c.21-.16.46-.269.726-.339V6.303a2.147 2.147 0 01-.734-.352L8.47 4.37zm-.423 11.907l.661-1-.022-.03a.346.346 0 01-.022-.031h-.05l-.976-3.003a2.228 2.228 0 01-.109-.773l-1.23-.569a2.18 2.18 0 01-.526.532l-2.177 1.583c-.03.02-.064.038-.097.056a.746.746 0 00-.062.034c.1 1.22.364 2.24.742 3.1.126-.022.255-.036.387-.036H7.28c.26-.003.52.048.767.137zm8.524-.095h2.731c.18 0 .356.028.532.067.367-.851.625-1.865.723-3.081-.028-.018-.058-.033-.087-.048a.841.841 0 01-.12-.07l-2.182-1.588a2.123 2.123 0 01-.53-.543l-1.173.493c.008.266-.023.537-.11.8l-.834 2.567a2.38 2.38 0 01-.278.56l.597.972a2.25 2.25 0 01.731-.129zm-2.986 4.143l.835-2.566c.081-.266.227-.515.409-.734l-.535-.874c-.291.132-.61.21-.947.21h-2.734c-.353 0-.683-.095-.983-.246l-.583.88c.177.218.317.464.4.73l.833 2.564c.013.038.02.079.026.118a.77.77 0 00.016.086c.482.067.924.1 1.291.11.216.005.465.008.706.008h.185c.302-.003.653-.02 1.036-.06.007-.03.012-.06.017-.09a.988.988 0 01.028-.136z"
                />
            </svg>
        );
    }
};

export default IconFootballBallFilled;
