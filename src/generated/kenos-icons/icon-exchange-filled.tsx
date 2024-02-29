/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconExchangeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.144 4.002l2.575 2.605a.525.525 0 01.058.575.529.529 0 01-.481.308l-1.026.008c-.131 1.048-.641 3.216-2.59 4.852 3.79 2.092 3.834 6.213 3.834 6.255 0 .882-.711 1.596-1.588 1.596a1.595 1.595 0 01-1.588-1.585c-.003-.384-.202-3.482-4.283-4.123l-.045.058c-.037.05-.074.098-.118.14-.445.429-1.084.645-1.904.645-.818 0-1.457-.216-1.9-.645-.043-.04-.078-.09-.114-.138l-.054-.072c-4.196.617-4.392 3.748-4.397 4.14a1.599 1.599 0 01-1.589 1.575 1.597 1.597 0 01-1.588-1.591c0-.043.048-4.2 3.91-6.28-1.918-1.65-2.417-3.86-2.543-4.827l-1.03-.005a.528.528 0 01-.48-.309.551.551 0 01.073-.582l2.6-2.636a.493.493 0 01.322-.163c.14-.02.28.023.392.112l.087.09 2.529 2.569c.16.193.188.423.098.613a.532.532 0 01-.482.308l-.919.006c.174.938.818 2.583 3.154 3.308l.015-.018a.115.115 0 01.014-.018c.442-.429 1.084-.647 1.902-.647.82 0 1.459.218 1.904.647l.01.01a.067.067 0 00.016.018c2.344-.74 2.986-2.426 3.16-3.3l-.917-.006a.53.53 0 01-.476-.305.557.557 0 01.067-.583l2.591-2.638c.286-.233.62-.194.801.033zm-5.818 10.104c.132-.132.233-.3.306-.499.09-.243.137-.53.137-.862 0-.404-.07-.731-.196-.998a1.241 1.241 0 00-.25-.37 1.376 1.376 0 00-.54-.308 2.582 2.582 0 00-.793-.109c-.305 0-.568.037-.795.11-.216.07-.392.17-.532.305-.104.1-.183.23-.25.372-.123.267-.193.594-.193.998 0 .336.048.624.134.862.073.2.171.37.306.502.126.12.291.213.482.28.235.084.518.132.848.132.33 0 .608-.048.846-.132.196-.067.362-.16.49-.283z"
            />
        </svg>
    );
};

export default IconExchangeFilled;
