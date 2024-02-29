/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDataRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12 2.155c1.63 0 3.183.196 4.367.555 1.732.523 2.608 1.367 2.605 2.507v13.568c0 1.135-.88 1.978-2.607 2.502-1.194.358-2.743.554-4.367.554-1.622 0-3.171-.196-4.362-.554-1.73-.527-2.607-1.367-2.607-2.505V5.214c0-.185.025-.364.075-.538.25-.871 1.101-1.532 2.532-1.966 1.185-.356 2.737-.555 4.365-.555zm-4.002 1.76c-.9.27-1.462.632-1.642 1.019.168.39.745.756 1.653 1.03 1.07.323 2.49.502 4.003.502 1.512 0 2.932-.18 4.003-.501.899-.272 1.476-.634 1.65-1.02-.216-.496-.99-.832-1.659-1.034-1.073-.322-2.493-.501-4.005-.501-1.51 0-2.93.18-4.003.504zm9.728 5.716h.003V6.595a6.06 6.06 0 01-1.353.574c-1.182.356-2.731.555-4.362.555-1.63 0-3.179-.196-4.36-.555a5.807 5.807 0 01-1.373-.588v3.07c.179.308.711.723 1.73 1.033 1.07.325 2.494.502 4.004.502 1.51 0 2.932-.177 4.002-.502.972-.296 1.513-.734 1.709-1.053zm0 4.728h.003v-3.07c-.387.236-.838.44-1.35.594-1.182.359-2.731.555-4.362.555-1.63 0-3.179-.196-4.364-.555a6.221 6.221 0 01-1.372-.59v3.094c.176.311.708.726 1.73 1.034 1.07.325 2.494.504 4.004.504 1.51 0 2.932-.176 4.002-.501.986-.3 1.521-.745 1.709-1.065zm-1.717 5.723c.781-.238 1.717-.655 1.717-1.3v-2.747a5.86 5.86 0 01-1.35.593c-1.182.359-2.731.555-4.362.555-1.63 0-3.179-.199-4.364-.558a6.091 6.091 0 01-1.372-.588v2.748c0 .644.935 1.062 1.72 1.3 1.075.322 2.498.501 4.003.501 1.507 0 2.93-.179 4.008-.504z"
            />
        </svg>
    );
};

export default IconDataRegular;
