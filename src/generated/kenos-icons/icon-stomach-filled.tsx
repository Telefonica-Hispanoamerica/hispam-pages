/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconStomachFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.623 21.836c-.894 0-1.74-.162-2.507-.498-.589-.26-1.023-.762-1.294-1.493-.224-.608-.286-1.308-.177-2.084.093-.65.006-1.009-.252-1.073-.146-.037-.26.022-.465.132l-.123.067c-.661.339-1.09.955-1.544 1.605-.1.145-.201.291-.308.437-.73 1.008-1.526.846-2.064.532-.869-.504-.79-1.33-.625-1.695a6.342 6.342 0 013.303-3.577 6.244 6.244 0 012.958-.566c.664-.03 1.725.124 2.423.28.19.051.355.099.507.146.918.031 1.198-.143 1.294-.246.151-.168.098-.538.042-.933-.048-.342-.104-.725-.04-1.095a3.66 3.66 0 01.051-.605c.157-1.18.563-2.115 1.205-2.785a7 7 0 01-.255-.423 6.42 6.42 0 01-.519-4.888c.188-.54.846-1.176 1.93-.806.538.185.773.498.874.73.182.415.062.808.017.93a3.466 3.466 0 00.283 2.606c.134.244.294.47.473.666.359-.016.664.009.869.034.131.02.26.042.37.05 2.103.348 4.17 1.877 3.742 5.143a6.86 6.86 0 01-.174.874l-.008.031c-.393 2.384-1.748 4.577-3.821 6.182-1.992 1.516-4.185 2.322-6.165 2.322z"
            />
        </svg>
    );
};

export default IconStomachFilled;
