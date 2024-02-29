/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconHotlineRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.686 12.338a.733.733 0 01-.175-.023l-2.432-.68a4.576 4.576 0 01-1.811.374c-2.641 0-4.785-2.244-4.785-5C2.483 4.254 4.623 2 7.263 2c2.642 0 4.785 2.245 4.785 5a5.1 5.1 0 01-.358 1.898l.65 2.54a.746.746 0 01-.174.69.653.653 0 01-.48.21zm-7.208 8.284C5.373 21.553 6.548 22 7.883 22c2.637 0 5.911-1.743 8.989-4.986 4.61-4.868 5.968-10.192 3.3-12.952L18.85 2.694a2.191 2.191 0 00-1.476-.69 1.92 1.92 0 00-1.497.598l-1.982 2.09c-.389.41-.585.967-.555 1.57a2.4 2.4 0 00.672 1.536l1.384 1.433c.459.474.385 1.209.24 1.738-.248.908-.89 1.944-1.811 2.915-1.746 1.843-3.62 2.56-4.449 1.702l-1.384-1.433c-.85-.88-2.187-.921-2.973-.09l-1.982 2.089c-.388.41-.584.967-.554 1.569.03.57.27 1.118.672 1.533l1.323 1.368zm1.506-5.56a.576.576 0 01.428-.179.87.87 0 01.616.283L8.412 16.6c1.436 1.482 3.998.793 6.378-1.716 1.095-1.158 1.838-2.377 2.152-3.53.345-1.274.13-2.387-.594-3.14l-1.384-1.432a.96.96 0 01-.27-.602.648.648 0 01.161-.488l1.982-2.09a.57.57 0 01.463-.173c.21.01.419.11.58.278l1.323 1.369c2.096 2.167.738 6.665-3.309 10.935-4.064 4.288-8.364 5.766-10.46 3.6l-1.323-1.37a.96.96 0 01-.27-.601.648.648 0 01.161-.488l1.982-2.09zm3.213-4.873l1.524.424-.406-1.592a.722.722 0 01.043-.488c.219-.48.328-.995.328-1.533 0-1.97-1.537-3.577-3.423-3.577C5.377 3.423 3.841 5.03 3.841 7s1.536 3.577 3.422 3.577a3.29 3.29 0 001.467-.342.657.657 0 01.467-.046zM7.25 4.673a.52.52 0 00-.51.534.52.52 0 00.51.534.52.52 0 00.511-.534.52.52 0 00-.51-.534zm.511 2.318v1.784a.52.52 0 01-.51.533.52.52 0 01-.512-.533V6.99a.52.52 0 01.511-.534.52.52 0 01.511.534z"
            />
        </svg>
    );
};

export default IconHotlineRegular;
