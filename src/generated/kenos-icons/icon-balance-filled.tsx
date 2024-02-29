/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconBalanceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.328 16.83c.58.143.666.415.666.695 0 .384-.246.655-.666.756V16.83zm-1.339-1.647c0 .232.07.479.498.63v-1.32c-.319.107-.498.348-.498.69z"
            />
            <path
                fill={fillColor}
                d="M19.078 7.491L13.616 2.31a.56.56 0 00-.383-.154H5.851c-.57 0-1.107.538-1.107 1.106v17.48c0 .588.518 1.106 1.107 1.106h12.296c.589 0 1.107-.518 1.107-1.107V7.897a.56.56 0 00-.177-.406zM8.711 19.074c0 .308-.252.56-.56.56a.562.562 0 01-.56-.56V7.648c0-.308.252-.56.56-.56.308 0 .56.252.56.56v11.426zm2.2.574a.562.562 0 01-.56-.56v-7.056a.561.561 0 011.12 0v7.056c0 .308-.252.56-.56.56zm5.406-.966c-.253.218-.589.36-.99.42v.308a.42.42 0 11-.84 0v-.3a2.966 2.966 0 01-1.257-.49.432.432 0 01-.2-.37.42.42 0 01.421-.414.5.5 0 01.269.087c.232.16.493.277.765.347v-1.577c-1.093-.233-1.334-.919-1.334-1.474 0-.834.51-1.417 1.334-1.565v-.309a.42.42 0 11.84 0v.3c.364.05.7.163.975.33.207.127.238.295.238.385a.406.406 0 01-.406.406.528.528 0 01-.241-.068l-.006-.002a2.24 2.24 0 00-.56-.219v1.49c1.238.202 1.504.933 1.504 1.524.003.488-.176.9-.512 1.19zM14.1 7.295c-.384-.384-.588-.933-.588-1.583V3.754l4.353 4.13h-2.182c-.653 0-1.2-.205-1.583-.589z"
            />
        </svg>
    );
};

export default IconBalanceFilled;
