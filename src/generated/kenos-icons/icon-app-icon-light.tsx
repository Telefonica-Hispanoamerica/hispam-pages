/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconAppIconLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.97 15.22c-2.273 0-3.84-1.844-3.84-4.064 0-2.36 1.54-4.064 3.84-4.064 2.29 0 3.827 1.704 3.827 4.064 0 2.22-1.564 4.064-3.826 4.064zm0-6.972c-1.49 0-2.362 1.432-2.362 2.908 0 1.388.725 2.908 2.363 2.908 1.626 0 2.347-1.524 2.347-2.908 0-1.476-.869-2.908-2.347-2.908zm5.899 8.72v-.54h-1.362c.547-.552 1.257-1.22 1.257-1.952 0-.676-.407-1.004-1.048-1.004a2.15 2.15 0 00-.99.248l.055.572c.217-.148.485-.276.768-.276.272 0 .547.148.547.46 0 .632-1.133 1.608-1.443 1.916v.576h2.216z"
            />
            <path
                fill={fillColor}
                d="M14.481 21.636H7.062c-2.526 0-4.582-2.12-4.582-4.724V6.724C2.48 4.12 4.536 2 7.062 2h9.883c2.526 0 4.583 2.12 4.583 4.724v10.188c0 1.856-1.064 3.548-2.705 4.308a.345.345 0 01-.465-.184c-.082-.184 0-.4.178-.48 1.39-.644 2.29-2.072 2.29-3.644V6.724c0-2.204-1.739-3.996-3.877-3.996H7.062c-2.138 0-3.876 1.792-3.876 3.996v10.188c0 2.204 1.738 3.996 3.876 3.996h7.42a.36.36 0 01.352.364.36.36 0 01-.353.364z"
            />
            <path
                fill={fillColor}
                d="M15.886 21.272c0-.4.318-.728.706-.728a.72.72 0 01.706.728.72.72 0 01-.706.728.717.717 0 01-.706-.728z"
            />
        </svg>
    );
};

export default IconAppIconLight;
