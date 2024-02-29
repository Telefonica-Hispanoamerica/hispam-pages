/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconTowTruckFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.717 6.241c.437.605 2.997 3.992 3.333 4.426.28.361.804 1.04.796 1.829v3.342c0 .571-.252 1.154-.695 1.594-.44.44-1.025.692-1.6.692h-.223c-.454 1.05-1.446 1.669-2.821 1.669-1.376 0-2.367-.616-2.82-1.67h-3.86c-.455 1.05-1.446 1.67-2.822 1.67-1.392 0-2.394-.63-2.84-1.709a2.343 2.343 0 01-1.308-.652c-.443-.44-.695-1.02-.695-1.594v-4.4a.6.6 0 01.603-.6h4.154L5.154 7.286 5.15 8.975c.006.028.04.69-.4 1.165-.182.2-.521.44-1.076.443H3.66c-.583 0-.927-.247-1.115-.457-.45-.501-.384-1.201-.375-1.28a.604.604 0 011.199.14c-.009.093.01.27.075.34.027.028.068.032.117.037.032.004.067.007.105.018.098 0 .165-.017.198-.053.076-.081.087-.269.084-.311l.009-4.196c0-.238.143-.437.342-.535l.01-.008a.692.692 0 01.132-.034l.05-.016a.328.328 0 01.107-.023h.006l1.443.01a.604.604 0 01.492.261l4.2 6.079v-4.76a.6.6 0 01.602-.599h4.302c.801 0 1.616.41 2.073 1.045zM7.011 18.59c1.258 0 1.896-.636 1.896-1.891s-.638-1.891-1.896-1.891-1.896.636-1.896 1.89c0 1.256.638 1.892 1.896 1.892zm9.504 0c1.258 0 1.897-.636 1.897-1.891s-.639-1.891-1.897-1.891c-1.257 0-1.896.636-1.896 1.89 0 1.256.639 1.892 1.896 1.892z"
            />
        </svg>
    );
};

export default IconTowTruckFilled;
