/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconInvoiceDigitalFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.194 7.771v.675c0 .723.387 1.171 1.006 1.171h.84v4.415H9.96v-6.26h2.233zm-1.515 5.311h2.647a.283.283 0 00.283-.28.28.28 0 00-.28-.28h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28zm2.647-1.134a.283.283 0 00.283-.28.281.281 0 00-.28-.28h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28h2.647zm0-1.135a.28.28 0 00.28-.28.279.279 0 00-.277-.28h-2.65a.28.28 0 00-.28.28c0 .154.126.28.28.28h2.647z"
            />
            <path fill={fillColor} d="M13.679 9.057h-.48c-.293 0-.445-.207-.445-.61v-.314l.925.924z" />
            <path
                fill={fillColor}
                d="M21.06 5.855c-.563-.644-1.404-.972-2.505-.972H5.446c-1.098 0-1.941.328-2.504.972-.521.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.984.787 2.583.563.644 1.403.972 2.504.972h13.11c1.097 0 1.94-.328 2.503-.97.524-.599.788-1.467.788-2.582V8.438c0-1.115-.267-1.983-.788-2.583zm-6.18 8.376a.612.612 0 01-.638.638H9.768c-.386 0-.647-.26-.647-.65V7.574c0-.387.26-.645.647-.645h2.801a.42.42 0 01.297.123l1.891 1.894a.426.426 0 01.123.3v4.986zM2.749 19.116h18.504c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H2.749a.562.562 0 00-.56.56c0 .308.252.56.56.56z"
            />
        </svg>
    );
};

export default IconInvoiceDigitalFilled;
