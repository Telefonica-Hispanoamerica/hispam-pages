/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconTagEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.769 8.391c.62 0 1.22.18 1.74.52a.708.708 0 00.984-.208.708.708 0 00-.208-.984 4.593 4.593 0 00-2.52-.752 4.619 4.619 0 00-4.26 2.84h-.704a.711.711 0 100 1.425h.368a5.29 5.29 0 000 .712h-.368a.711.711 0 00-.712.711c0 .397.32.705.712.705h.712a4.619 4.619 0 004.26 2.84c.896 0 1.768-.26 2.52-.752a.715.715 0 00.208-.984.715.715 0 00-.984-.208c-.52.34-1.124.52-1.74.52a3.2 3.2 0 01-2.656-1.42h2.656a.711.711 0 00.712-.713.708.708 0 00-.712-.712H9.601a3.474 3.474 0 01-.02-.355c0-.12.008-.24.02-.357h3.176a.711.711 0 100-1.424h-2.656a3.2 3.2 0 012.648-1.404z"
            />
            <path
                fill={fillColor}
                d="M20.789 2.207a.712.712 0 011.004 0 .712.712 0 010 1.004l-1.212 1.212v9.057c0 .564-.228 1.112-.624 1.508l-6.392 6.392c-.412.412-.96.62-1.504.62a2.135 2.135 0 01-1.508-.62l-7.932-7.932a2.137 2.137 0 010-3.013l6.392-6.392a2.152 2.152 0 011.508-.624h9.056l1.212-1.212zm-1.836 11.777a.718.718 0 00.208-.504V5.843l-.916.92a.705.705 0 01-.504.208.712.712 0 01-.504-1.212l.92-.92h-7.636a.718.718 0 00-.504.208L3.625 11.44a.712.712 0 000 1.004l7.936 7.932a.712.712 0 001.004 0l6.388-6.392z"
            />
        </svg>
    );
};

export default IconTagEuroRegular;
