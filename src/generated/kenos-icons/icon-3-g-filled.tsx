/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const Icon3GFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2 7.55c.492.569 1.401.995 2.613.995 1.571 0 2.613-.768 2.613-1.878 0-.91-.814-1.432-1.487-1.499.748-.123 1.383-.683 1.383-1.423 0-1.043-.9-1.736-2.51-1.736-1.164 0-1.997.427-2.527 1.025l.767.996c.445-.389 1.013-.626 1.59-.626.606 0 1.06.209 1.06.607 0 .351-.368.54-1.022.54-.236 0-.729 0-.852-.009v1.404c.095-.01.578-.019.852-.019.862 0 1.127.209 1.127.579s-.36.654-1.06.654c-.55 0-1.269-.237-1.723-.683L2 7.55zm5.79-2.277c0 2.01 1.533 3.272 3.417 3.272 1.193 0 2.111-.483 2.793-1.233V4.836h-3.048v1.357H12.4v.531c-.255.209-.7.38-1.193.38-1.032 0-1.76-.797-1.76-1.831 0-1.034.728-1.831 1.76-1.831.597 0 1.08.332 1.335.75l1.363-.722C13.441 2.683 12.59 2 11.207 2 9.323 2 7.79 3.262 7.79 5.273zM3 18a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm5-4a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7zm5-3a1 1 0 011-1h1a1 1 0 011 1v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V11zm5-5a1 1 0 011-1h1a1 1 0 011 1v15a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z"
            />
        </svg>
    );
};

export default Icon3GFilled;
