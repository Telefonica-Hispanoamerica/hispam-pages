/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconMobileShieldRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.186 5.214c-1.204 0-2.17-.759-2.318-.877C17.375 2.974 16.095 2 14.59 2H8.996C7.066 2 5.5 3.6 5.5 5.571V18.43C5.5 20.399 7.067 22 8.996 22h5.595c1.93 0 3.496-1.6 3.496-3.571v-5.226c1.423-.645 2.798-1.985 2.798-3.7V5.214h-.699zM8.996 3.427h5.595c.828 0 1.54.498 1.88 1.211-.425.256-1.101.572-1.88.572H6.928c.17-1.01 1.03-1.783 2.068-1.783zm0 17.146c-1.039 0-1.898-.772-2.068-1.787h9.727c-.166 1.015-1.025 1.787-2.064 1.787H8.996zm-2.1-3.219V6.641h6.992V9.5c0 1.715 1.374 3.059 2.798 3.699v4.156h-9.79zM17.39 11.95c-.891-.375-2.1-1.28-2.1-2.451V6.586c.91-.146 1.652-.549 2.1-.846.447.297 1.186.7 2.1.846V9.5c0 1.17-1.21 2.08-2.1 2.45z"
            />
        </svg>
    );
};

export default IconMobileShieldRegular;
