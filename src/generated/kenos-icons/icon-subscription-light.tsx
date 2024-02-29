/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconSubscriptionLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.464 6.375a.359.359 0 01.518 0c.146.143.146.38.004.527L20.688 8.21l-1.299-1.308a.365.365 0 010-.522.359.359 0 01.518 0l.466.47a2.964 2.964 0 00-.73-1.257 2.926 2.926 0 00-4.159 0 2.98 2.98 0 000 4.19 2.926 2.926 0 004.16 0 .363.363 0 01.517 0 .365.365 0 010 .522 3.648 3.648 0 01-2.597 1.081c-.941 0-1.882-.36-2.597-1.08a3.725 3.725 0 010-5.239 3.647 3.647 0 012.206-1.062.304.304 0 01-.028-.133V2.74H4.649v18.52h12.863c.202 0 .367.166.367.37s-.165.37-.367.37H3.91V2h13.969v1.872c0 .043-.01.086-.024.124a3.645 3.645 0 012.31 1.071c.457.46.772 1.038.937 1.673l.362-.365zM17.88 17.184v-4.447a.369.369 0 00-.367-.37.369.369 0 00-.367.37v4.447c0 .203.165.37.367.37a.369.369 0 00.367-.37zm.367 2.218c0 .408-.33.74-.734.74a.738.738 0 01-.734-.74c0-.407.33-.74.734-.74.405 0 .734.333.734.74zM7.218 13.477h7.353c.203 0 .363.165.363.37a.37.37 0 01-.367.37h-7.35a.369.369 0 01-.366-.37c0-.204.164-.37.367-.37zm7.353 3.337H7.218a.369.369 0 00-.367.37c0 .204.164.37.367.37h7.349a.369.369 0 00.367-.37c0-.204-.16-.37-.363-.37z"
            />
        </svg>
    );
};

export default IconSubscriptionLight;
