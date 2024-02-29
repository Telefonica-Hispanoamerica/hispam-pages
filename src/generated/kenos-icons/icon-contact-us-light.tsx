/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconContactUsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.992 19.601c0 .42-.326.761-.728.761-.402 0-.728-.34-.728-.76 0-.421.326-.762.728-.762.402 0 .728.34.728.761zm-9.93-15.387a5.685 5.685 0 014.305-1.71c3.1.109 5.625 2.798 5.633 5.972v.38c0 .862-.744 1.598-1.636 1.598h-.625a4.152 4.152 0 01-1.66 1.778c2.233.644 3.553 2.472 3.553 5.094 0 .213-.16.38-.364.38a.369.369 0 01-.364-.38c0-2.869-1.765-4.588-4.725-4.588-1.036 0-1.985.205-2.817.594a.344.344 0 01-.476-.188.373.373 0 01.18-.498 6.928 6.928 0 011.188-.414c-1.232-.711-2.072-2.091-2.072-3.664 0-2.3 1.796-4.178 3.997-4.178 2.2 0 3.997 1.878 3.997 4.178 0 .398-.056.778-.152 1.142h.34c.488 0 .908-.389.908-.836v-.381c0-2.79-2.209-5.144-4.921-5.236a5 5 0 00-3.78 1.497 5.103 5.103 0 00-1.481 3.614c0 .213-.16.38-.364.38a.369.369 0 01-.364-.38c0-1.565.6-3.045 1.7-4.154zm.84 4.375c0 1.886 1.465 3.417 3.269 3.417 1.136 0 2.136-.61 2.708-1.514h-2.72a.369.369 0 01-.364-.38c0-.214.16-.381.364-.381h3.084c.125-.356.197-.745.197-1.142 0-1.886-1.465-3.417-3.27-3.417-1.804 0-3.268 1.53-3.268 3.417zM9.61 16.88c1.312-.686 2.208-2.1 2.208-3.731 0-2.3-1.796-4.178-3.997-4.178-2.2 0-4 1.878-4 4.178 0 1.631.9 3.045 2.208 3.73C3.589 17.393 2 18.995 2 21.12c0 .214.16.381.364.381a.369.369 0 00.364-.38c0-2.159 2.097-3.673 5.093-3.673 2.997 0 5.093 1.506 5.093 3.672 0 .214.16.381.364.381a.369.369 0 00.364-.38c-.012-2.125-1.596-3.727-4.032-4.242zm-1.8-7.156c1.804 0 3.268 1.53 3.268 3.416 0 1.887-1.464 3.418-3.269 3.418-1.804 0-3.268-1.531-3.268-3.417 0-1.887 1.464-3.417 3.268-3.417z"
            />
        </svg>
    );
};

export default IconContactUsLight;
