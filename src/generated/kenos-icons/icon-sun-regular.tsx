/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconSunRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.751 11.345h2.468c.34 0 .622.28.622.613 0 .34-.283.62-.622.62h-2.468c-.024 0-.047-.007-.07-.014-.014-.004-.029-.009-.044-.012-.068 1.74-.547 3.011-1.227 3.927a.73.73 0 00.037.023c.028.015.055.03.078.053l1.557 1.552c.25.238.25.636 0 .874a.575.575 0 01-.437.182.619.619 0 01-.44-.182l-1.557-1.552a.166.166 0 01-.034-.052.267.267 0 00-.017-.03c-1.383 1.172-3.106 1.438-3.986 1.485 0 .005.002.007.005.009.002.002.004.004.004.008v2.375a.62.62 0 01-.622.62.615.615 0 01-.622-.62v-2.392c-.91-.056-2.569-.33-3.902-1.476a.273.273 0 00-.035.051.426.426 0 01-.015.025l-1.566 1.552a.61.61 0 01-.25.148.592.592 0 01-.77-.076.604.604 0 010-.874l1.706-1.7a.22.22 0 01.04-.03c.01-.007.02-.013.027-.02-.655-.905-1.1-2.16-1.176-3.869a.196.196 0 00-.047.008c-.017.005-.034.01-.051.01h-2.56a.625.625 0 01-.622-.62c0-.339.283-.619.622-.619h2.56c.025 0 .047.007.07.014l.045.011c.115-1.7.63-2.921 1.325-3.787-.017-.017-.034-.026-.05-.035A.348.348 0 016.7 7.53L4.978 5.813a.619.619 0 010-.874.615.615 0 01.88 0L7.58 6.656a.096.096 0 01.033.039c.005.01.01.019.017.025 1.316-1.022 2.882-1.26 3.745-1.31V2.78a.62.62 0 01.622-.62c.339 0 .622.28.622.62v2.64c.846.06 2.437.314 3.77 1.353l.017-.029a.155.155 0 01.025-.038l1.773-1.764a.615.615 0 01.88 0 .603.603 0 010 .873l-1.773 1.768a.215.215 0 01-.04.03 1.148 1.148 0 00-.02.012c.712.866 1.236 2.07 1.368 3.745l.034-.009a.364.364 0 01.097-.016zm-7.002 6.272h.563c1.535-.034 5.103-.62 5.103-5.471 0-4.852-3.596-5.462-5.137-5.504h-.588c-4.546.042-5.037 3.837-5.037 5.462 0 1.636.496 5.448 5.096 5.513z"
            />
        </svg>
    );
};

export default IconSunRegular;
