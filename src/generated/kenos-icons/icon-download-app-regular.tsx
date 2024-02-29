/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDownloadAppRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.614 15.895a.501.501 0 00.378.173.492.492 0 00.375-.174l3.308-3.809a.5.5 0 00-.378-.83h-1.49V6.388c.005-.03.005-.058.005-.09a.872.872 0 00-.873-.867H11.1a.9.9 0 00-.7.246.86.86 0 00-.272.658v4.922H8.692a.506.506 0 00-.328.123.498.498 0 00-.05.706l3.3 3.81zM9.79 12.259h.84a.5.5 0 00.502-.502V6.432h1.675v5.325a.5.5 0 00.501.502h.894l-2.21 2.546-2.202-2.546zm2.207 7.255c-.341 0-.627-.107-.82-.306-.194-.199-.289-.47-.289-.81 0-.697.415-1.114 1.112-1.114.698 0 1.11.417 1.11 1.115 0 .341-.099.613-.29.81-.19.195-.481.305-.823.305z"
            />
            <path
                fill={fillColor}
                d="M15.275 21.847c1.106 0 1.91-.266 2.465-.813.554-.551.826-1.364.826-2.479V5.446c0-1.103-.266-1.907-.82-2.465-.555-.557-1.362-.826-2.471-.826H8.72c-1.1 0-1.908.277-2.468.843-.554.563-.823 1.361-.823 2.448v13.11c0 1.114.269 1.927.826 2.479.552.546 1.359.812 2.465.812h6.555zm-8.726-16.4c0-1.541.63-2.172 2.171-2.172h6.555c.795 0 1.347.163 1.678.496.33.334.492.883.492 1.675v13.11c0 1.582-.588 2.17-2.17 2.17H8.72c-1.583 0-2.17-.588-2.17-2.17V5.445z"
            />
        </svg>
    );
};

export default IconDownloadAppRegular;
