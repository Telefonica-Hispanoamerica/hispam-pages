/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconEmailVirusRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.452 18.959c.431-.518.403-1.157.378-1.364l.003-9.031c-.023-.936-.415-1.412-.768-1.661l-6.778-4.28a2.842 2.842 0 00-1.558-.468 2.82 2.82 0 00-1.515.448L4.51 6.836l-.13.084c-.324.235-.716.708-.739 1.658v.89c-.762.973-1.3 2.25-1.445 3.905-.028.317-.042.648-.042.995 0 7.017 5.975 7.456 7.174 7.476.072.003.145.003.218.003.151 0 .303-.003.431-.006.852-.014 3.566-.235 5.404-2.238 1.916 0 4.17-.003 4.543-.008.838-.014 1.291-.353 1.527-.636zM11.889 3.612l.003-.002c.036-.023.384-.242.857-.245.479 0 .837.24.865.26l6.698 4.227.078.05c.13.093.205.298.227.57l-4.092 2.551C15.306 8.15 12.499 7.01 9.956 6.948c-.207-.006-.454-.009-.672-.006-1.507.014-3.098.417-4.392 1.342.036-.177.095-.306.173-.362l6.824-4.31zm3.036 14.641c-1.468 2.163-4.174 2.375-4.969 2.39-.182.002-.403.005-.608 0-1.403-.02-5.98-.533-5.98-6.272 0-.309.014-.605.039-.888.437-4.913 4.62-5.328 5.89-5.34h.15c.162 0 .333.004.481.006 1.26.034 5.412.496 5.952 5.177.04.344.06.708.06 1.087 0 1.56-.342 2.851-1.015 3.84zm-1.608-4.246a.52.52 0 01.524.523v.773a.522.522 0 01-.524.521.52.52 0 01-.523-.52v-.253h-.13c-.005.569-.05 1.118-.184 1.608l.736.222c.233.07.387.285.373.526l-.062 1.165a.523.523 0 01-.523.493h-.028a.525.525 0 01-.496-.549l.042-.756-.493-.148c-.44.568-1.171.932-2.373.932-1.204 0-1.935-.364-2.375-.938l-.513.154.042.756a.523.523 0 01-.495.55h-.028a.523.523 0 01-.524-.494L5.7 17.407a.516.516 0 01.373-.526l.756-.227c-.134-.49-.176-1.037-.182-1.603h-.129v.252a.522.522 0 01-.524.521.52.52 0 01-.524-.52v-.774c0-.288.236-.523.524-.523h.687c.042-.46.134-.905.305-1.306l-.91-.271a.522.522 0 01-.373-.53l.062-1.165c.014-.289.26-.476.551-.493a.52.52 0 01.496.549l-.042.756.54.163a2.02 2.02 0 01-.024-.297c0-1.69 1.666-1.69 2.375-1.69.711 0 2.375 0 2.375 1.69 0 .1-.01.196-.022.288l.51-.151-.042-.756a.523.523 0 01.495-.55c.3.017.538.205.552.494l.062 1.165c.014.24-.14.46-.373.53l-.893.265c.173.398.266.85.308 1.311h.683v-.002zm-4.986-2.594l.002.025.001.022a3.998 3.998 0 011.32-.199c.518 0 .952.07 1.324.202l.002-.025.001-.025c0-.359 0-.645-1.325-.645s-1.325.286-1.325.645zm3.286 3.49c0-1.275-.188-1.958-.625-2.283-.285-.21-.722-.314-1.338-.314-.622 0-1.062.104-1.348.32-.434.327-.619 1.008-.619 2.277 0 2.04.423 2.597 1.967 2.597 1.54 0 1.963-.558 1.963-2.597zm-1.473-1.238a.52.52 0 00-.524-.521.522.522 0 00-.524.52v2.897c0 .289.235.521.524.521a.522.522 0 00.524-.52v-2.897zm10.37 4.532c-.132.154-.407.193-.611.19-.317.006-2.009.009-3.684.009.603-1.107.927-2.434.927-3.989 0-.42-.022-.835-.067-1.224a8.586 8.586 0 00-.176-.98l3.72-2.317-.006 7.745.008.095v.002c.003.024.031.302-.111.469z"
            />
        </svg>
    );
};

export default IconEmailVirusRegular;
