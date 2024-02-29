/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDocumentOtherLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.348 7.907l.007.024a.48.48 0 01.026.141v12.56c0 .653-.566 1.208-1.218 1.208H5.838c-.647 0-1.219-.563-1.219-1.208l.042-3.358L4.62 9.13V3.364c0-.63.583-1.208 1.219-1.208h7.504a.68.68 0 01.473.2l5.362 5.229c.087.09.137.207.17.322zm-.787.854h-2.547c-.974 0-1.81-.322-2.423-.918-.613-.606-.94-1.423-.94-2.384V2.985H5.834c-.18 0-.4.208-.4.381v5.76l.042 8.15-.043 3.368c0 .182.205.372.401.372H18.16c.204 0 .4-.182.4-.38V8.76zm-5.09-3.305c0 .728.238 1.35.697 1.787.451.445 1.098.686 1.85.686h2.321l-4.868-4.764v2.291zm1.014 10.76c.417 0 .728-.315.728-.754a.738.738 0 00-.745-.745.73.73 0 00-.728.745v.016c0 .423.31.737.745.737zm-2.014-.754c0 .44-.32.753-.737.753a.722.722 0 01-.745-.737v-.016c0-.415.32-.745.737-.745a.74.74 0 01.745.745zm-3.485.753c.418 0 .737-.314.737-.753a.738.738 0 00-.745-.745.738.738 0 00-.737.745v.016c0 .423.32.737.745.737z"
            />
        </svg>
    );
};

export default IconDocumentOtherLight;
