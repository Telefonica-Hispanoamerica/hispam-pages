/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconPayAsYouGoEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.598 17.966l-2.166.34a10.231 10.231 0 002.13-6.266C21.562 6.49 17.269 2 12 2a9.288 9.288 0 00-5.125 1.55c-.18.113-.217.339-.108.527.108.189.324.227.504.114A8.443 8.443 0 0112 2.758c4.87 0 8.841 4.15 8.841 9.248 0 2.19-.72 4.302-2.094 5.965l-.36-2.492c-.036-.189-.217-.34-.397-.302-.18.038-.324.226-.288.415l.504 3.656 3.5-.528c.18-.037.325-.226.288-.414-.036-.23-.216-.381-.396-.34zm-4.188 2.338c0 .416-.323.754-.721.754-.398 0-.72-.338-.72-.754 0-.417.322-.754.72-.754.398 0 .72.337.72.754zm-2.743.527a9.194 9.194 0 01-2.671.415c-4.87 0-8.841-4.15-8.841-9.248 0-2.228.757-4.302 2.094-5.964l.36 2.492c.036.188.18.339.36.339h.037c.18-.038.324-.226.288-.415L5.79 4.79l-3.496.527c-.18.038-.324.226-.288.415.036.188.216.34.396.302l2.166-.34a10.323 10.323 0 00-2.13 6.304C2.438 17.51 6.73 22 12 22c.973 0 1.95-.15 2.887-.452.18-.076.288-.264.252-.49-.04-.23-.288-.302-.472-.227z"
            />
            <path
                fill={fillColor}
                d="M7.13 13.133c0 .226.145.377.361.377h.973c.613 1.738 2.203 3.02 4.077 3.02a4.37 4.37 0 002.166-.603c.18-.113.216-.34.144-.528-.108-.188-.324-.226-.505-.15-.54.339-1.153.49-1.805.49-1.482 0-2.743-.943-3.284-2.267h3.32c.216 0 .36-.15.36-.377 0-.226-.144-.377-.36-.377H9.04a4.845 4.845 0 01-.072-.754c0-.263.036-.49.072-.753h3.536c.216 0 .36-.151.36-.377 0-.227-.144-.377-.36-.377h-3.32c.54-1.32 1.838-2.266 3.32-2.266.612 0 1.26.188 1.806.527.18.114.396.038.504-.15a.39.39 0 00-.144-.528c-.649-.415-1.41-.603-2.166-.603-1.878 0-3.464 1.248-4.077 3.02h-.973c-.216 0-.36.15-.36.377 0 .226.144.377.36.377h.793c-.036.226-.072.49-.072.753 0 .264.036.528.072.754h-.793c-.256.034-.396.189-.396.415z"
            />
        </svg>
    );
};

export default IconPayAsYouGoEuroLight;