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

const IconUserSupportRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.893 14.69c-.38 0-.693-.327-.693-.727a4.29 4.29 0 011.177-2.983l.933-.98c.347-.363.278-1.163 0-1.563-.278-.4-.762-.655-1.211-.655h-.175c-.484 0-.934.292-1.178.727-.205.364-.624.472-.933.256a.71.71 0 01-.244-.98 2.732 2.732 0 012.389-1.455h.175c.903 0 1.768.436 2.32 1.2.66.907.762 2.543-.103 3.454l-.933.98a2.82 2.82 0 00-.762 1.963c-.069.436-.381.764-.762.764zm.659 1.384c0 .402-.31.728-.693.728-.383 0-.694-.326-.694-.728 0-.402.31-.727.694-.727.383 0 .693.325.693.727z"
                />
                <path
                    fill={fillColor}
                    d="M3.165 22a.664.664 0 01-.484-.216.718.718 0 01-.175-.692l1.455-5.565a9.948 9.948 0 01-.796-3.89C3.165 6.326 7.287 2 12.346 2c5.06 0 9.182 4.326 9.182 9.636s-4.122 9.636-9.182 9.636c-1.283 0-2.53-.292-3.706-.8l-5.303 1.492C3.302 22 3.234 22 3.165 22zm9.178-18.545c-4.298 0-7.795 3.675-7.795 8.181 0 1.236.244 2.4.762 3.49.069.145.069.329.034.508l-1.211 4.623 4.362-1.24c.175-.036.347-.036.484.036 1.04.508 2.183.8 3.326.8 4.331-.036 7.828-3.707 7.828-8.217 0-4.51-3.497-8.18-7.79-8.18z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.766 6.25a.418.418 0 00.417.423c.003 0 .006 0 .011-.003a.417.417 0 00.41-.429v-.17c0-.153.15-.285.255-.375.026-.023.05-.043.066-.06l.092-.089c.183-.172.37-.35.37-.757 0-.557-.481-1.157-1.201-1.157-.768 0-1.255.454-1.255 1.154a.418.418 0 00.835 0c0-.134.14-.358.417-.358.277 0 .345.25.345.364 0 .146-.129.255-.219.331-.02.018-.039.033-.053.047l-.03.029c-.194.188-.46.444-.46.873v.177zm.869 1.15a.44.44 0 11-.88 0 .44.44 0 01.88 0z"
                />
                <path
                    fill={fillColor}
                    d="M14.755 11.743a.754.754 0 01-.113-.009c-.414-.061-.75-.462-.75-.888v-1.56h-.11c-.87 0-1.529-.695-1.529-1.613v-3.9c0-.89.723-1.613 1.614-1.613h6.366c.891 0 1.614.723 1.614 1.613v3.902c0 .891-.723 1.614-1.614 1.614h-3.288c-.314.496-.978 1.54-1.11 1.74-.29.445-.705.714-1.08.714zm-.889-8.463a.494.494 0 00-.492.493v3.902c0 .247.125.493.409.493h.669c.308 0 .56.253.56.56v1.51a450.24 450.24 0 001.151-1.81.56.56 0 01.474-.26h3.596a.494.494 0 00.493-.493V3.773a.494.494 0 00-.493-.493h-6.367zm-5.14 12.009c-1.215 0-2.162-.35-2.817-1.045-.62-.653-.93-1.563-.93-2.703s.313-2.05.93-2.703C6.564 8.143 7.51 7.79 8.726 7.79c1.216 0 2.163.353 2.818 1.045.617.653.93 1.563.93 2.703s-.313 2.05-.93 2.703c-.655.698-1.605 1.048-2.818 1.048zm0-6.378c-1.745 0-2.627.885-2.627 2.627 0 1.742.885 2.628 2.627 2.628 1.743 0 2.628-.886 2.628-2.628s-.885-2.627-2.628-2.627zM2.715 21.843h12.02c.31 0 .56-.249.56-.56v-1.039c0-1.345-.356-2.38-1.059-3.09-.703-.708-1.736-1.067-3.075-1.067H6.289c-1.336 0-2.372.361-3.075 1.067-.703.706-1.059 1.745-1.059 3.09v1.04c0 .307.252.56.56.56zm.56-1.12v-.479c0-1.036.25-1.81.734-2.3.485-.49 1.252-.736 2.28-.736h4.874c1.028 0 1.796.249 2.28.736.485.488.732 1.264.732 2.3v.48h-10.9z"
                />
            </svg>
        );
    }
};

export default IconUserSupportRegular;
