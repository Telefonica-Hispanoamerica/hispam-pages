/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconSafetyBeltRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.855 8.464a.538.538 0 00.04-.042l.94-.947a.605.605 0 000-.851l-2.377-2.378a.607.607 0 00-.41-.177l-1.857-.056-1.689-1.686a.602.602 0 00-.851 0l-3.32 3.32a.605.605 0 000 .853l1.695 1.698.123 1.798a.612.612 0 00.177.387l2.378 2.378a.604.604 0 00.852 0l4.3-4.297zm-.854-.857c-.014.014-.028.028-.04.045L7.13 11.48 5.34 9.69l-.123-1.796a.612.612 0 00-.177-.386L3.612 6.077 6.077 3.61l1.431 1.428c.11.11.255.174.409.177l1.857.056 1.782 1.781-.555.555zm10.84 10.308c0-.16-.061-.31-.176-.426l-1.807-1.807-.182-1.87a.61.61 0 00-.174-.368l-2.518-2.518a.605.605 0 00-.854 0l-.552.552-1.543-1.543a.621.621 0 00-.855 0l-3.32 3.319a.602.602 0 000 .851l1.542 1.541-.555.555a.602.602 0 000 .851l2.518 2.518a.612.612 0 00.392.177l1.933.112 1.804 1.804a.6.6 0 00.852 0l3.319-3.322a.604.604 0 00.176-.426zm-1.454 0l-2.467 2.468-1.547-1.54a.599.599 0 00-.389-.177l-1.933-.112-1.93-1.93.555-.555a.605.605 0 000-.854l-1.54-1.54 2.467-2.469 1.54 1.54a.603.603 0 00.857 0l.553-.55 1.938 1.938.182 1.87a.61.61 0 00.174.37l1.54 1.541z"
            />
        </svg>
    );
};

export default IconSafetyBeltRegular;
