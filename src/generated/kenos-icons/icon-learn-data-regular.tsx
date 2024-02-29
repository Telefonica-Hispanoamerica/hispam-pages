/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconLearnDataRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.871 2.16c1.63 0 3.185.202 4.367.56 1.732.521 2.605 1.367 2.605 2.502V18.79c0 1.13-.873 1.975-2.605 2.502-1.187.35-2.745.551-4.367.551-1.621 0-3.168-.198-4.358-.551-1.731-.527-2.605-1.373-2.605-2.502v-.151c-.849-.644-1.997-.952-2.812-1.095a1.308 1.308 0 01-1.082-1.297v-2.342l-1.131-.501a1.247 1.247 0 01-.723-1.132c0-.501.275-.927.723-1.137l5.025-2.252V5.222c0-.182.025-.367.076-.544.249-.868 1.098-1.53 2.529-1.958 1.182-.358 2.728-.56 4.358-.56zM10.87 3.92c-.9.265-1.482.627-1.653 1.021.092.21.3.418.625.594.274.166.622.308 1.039.434 1.064.325 2.487.502 4.003.502 1.507 0 2.93-.174 3.994-.502.717-.21 1.241-.484 1.499-.787a.688.688 0 00.16-.235c-.216-.485-.99-.818-1.656-1.028-1.073-.328-2.496-.504-4.011-.504-1.505 0-2.928.176-4 .504zm9.725 5.716V6.597a5.71 5.71 0 01-1.347.577c-1.19.359-2.737.552-4.359.552-1.63 0-3.179-.193-4.367-.552a5.787 5.787 0 01-1.364-.585v2.008c.073.017.149.042.224.076l5.499 2.467.023.013c.024.013.048.025.067.038 1.473-.009 2.862-.182 3.918-.502.967-.29 1.516-.725 1.706-1.053zm0 4.734v-3.078c-.384.24-.84.442-1.347.594-1.006.308-2.289.5-3.653.543a1.205 1.205 0 01-.714.972l-1.017.45v2.043c.333.025.684.034 1.025.034 1.504 0 2.928-.174 4-.502.975-.294 1.524-.737 1.706-1.056zm-1.714 5.717c.784-.235 1.714-.652 1.714-1.297h-.003v-2.75c-.383.232-.84.434-1.347.593-1.182.359-2.737.552-4.358.552-.465 0-.925-.017-1.373-.05a1.27 1.27 0 01-.731.409c-.849.148-2.048.476-2.905 1.162-.207.16-.44.26-.68.311.19.518.988.86 1.672 1.07 1.078.328 2.501.504 4 .504 1.507 0 2.93-.176 4.01-.504zM8.77 17.72a.273.273 0 00.334 0c1.067-.846 2.462-1.23 3.462-1.414l.034-1.883-3.221 1.44c-.16.076-.325.11-.502.11-.165 0-.342-.034-.498-.11l-3.12-1.398v1.782c1.041.244 2.447.627 3.512 1.473zm.11-7.899l-5.49 2.468 5.498 2.426 5.485-2.46L8.88 9.821z"
            />
        </svg>
    );
};

export default IconLearnDataRegular;
