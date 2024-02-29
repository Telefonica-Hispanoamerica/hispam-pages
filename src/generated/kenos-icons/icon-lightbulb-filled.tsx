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

const IconLightbulbFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.309 3.427c0 .393.31.713.691.713.381 0 .691-.32.691-.713v-.714A.703.703 0 0012 2a.703.703 0 00-.691.713v.714zm9 7.146c.38 0 .691.32.691.714 0 .393-.31.713-.691.713h-.519a.703.703 0 01-.691-.713c0-.394.31-.714.691-.714h.519zM4.9 11.287a.703.703 0 00-.691-.714H3.69a.703.703 0 00-.691.714c0 .393.31.713.691.713h.519c.38 0 .691-.32.691-.713zm.87-4.537a.723.723 0 01.252.974.691.691 0 01-.598.356.681.681 0 01-.346-.096l-.616-.365a.723.723 0 01-.252-.974.678.678 0 01.944-.261l.616.366zM8.54 5.1a.724.724 0 00.252-.975l-.346-.617a.679.679 0 00-.944-.26.724.724 0 00-.252.973l.345.617a.686.686 0 00.599.357.694.694 0 00.345-.096zm8.21-.879l-.354.636a.686.686 0 01-.598.356.682.682 0 01-.346-.096.728.728 0 01-.253-.974l.355-.635a.678.678 0 01.944-.26.728.728 0 01.252.973zm2.172 3.763l.616-.365a.725.725 0 00.252-.974.675.675 0 00-.944-.261l-.616.366a.725.725 0 00-.252.974.686.686 0 00.598.356.67.67 0 00.346-.096zm-4.152 9.017H9.23a6.316 6.316 0 01-3.288-5.537c0-3.448 2.717-6.25 6.058-6.25 3.341 0 6.058 2.802 6.058 6.25a6.31 6.31 0 01-3.288 5.537zm.69 1.784a.703.703 0 00-.69-.714H9.23a.703.703 0 00-.69.713c0 .394.31.714.69.714h5.54c.38.004.69-.316.69-.713zm-.69 1.787c.38 0 .69.32.69.714 0 .398-.31.718-.69.713H9.23a.704.704 0 01-.69-.713c0-.394.31-.714.69-.714h5.54z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.3 4.205a.625.625 0 001.25 0V2.771a.622.622 0 00-.626-.616.622.622 0 00-.625.616v1.434zm3.389 14.704c.344 0 .624.277.624.616 0 .339-.28.616-.624.616H9.397a.622.622 0 01-.624-.616c0-.34.28-.616.624-.616h5.292zm-.715 1.7c.345 0 .625.277.625.616 0 .339-.28.616-.625.616H9.95a.622.622 0 01-.624-.616c0-.339.28-.616.624-.616h4.025zm3.054-14.137a.619.619 0 01-.44-.18.61.61 0 010-.87l1.028-1.015a.629.629 0 01.882 0 .61.61 0 010 .871L17.47 6.292a.63.63 0 01-.442.18zm-10.286.176c.157 0 .32-.059.44-.18a.61.61 0 000-.87L6.154 4.584a.629.629 0 00-.883 0 .61.61 0 000 .87L6.3 6.47a.647.647 0 00.443.179zm-1.686 3.46c.344 0 .624.277.624.616 0 .339-.28.616-.624.616H3.602a.622.622 0 01-.625-.616c0-.34.28-.617.625-.617h1.454zm15.972.543a.622.622 0 00-.625-.617h-1.451a.622.622 0 00-.625.617c0 .339.28.616.625.616h1.451a.622.622 0 00.625-.616zm-5.866 1.252a.619.619 0 01-.655-.583c-.13-2.476-2.107-2.787-2.953-2.804-.052-.002-.104-.002-.155-.002-.062 0-.124.001-.186-.003a.622.622 0 01-.625-.616c0-.34.28-.617.625-.617.123 0 .26 0 .378.006 1.907.042 4.01 1.106 4.162 3.972a.618.618 0 01-.59.647zm2.454-.894c0-5.134-4.311-5.568-5.415-5.593-.17-.006-.364-.006-.54-.003-1.135.005-5.353.392-5.353 5.568 0 2.614 1.087 4.014 2.305 4.754l.009 1.112c0 .512.15.91.453 1.173.286.255.723.387 1.891.387h1.997c1.196 0 1.63-.129 1.913-.387.297-.263.443-.66.443-1.173l-.008-1.12c1.218-.746 2.305-2.135 2.305-4.718z"
                />
            </svg>
        );
    }
};

export default IconLightbulbFilled;