/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconSunLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.913 11.53h2.514c.238 0 .423.195.418.42 0 .235-.185.42-.423.42h-2.514c-.042 0-.076-.009-.11-.017-.041 1.998-.602 3.396-1.398 4.375a.21.21 0 01.104.067l1.6 1.586c.16.171.16.432 0 .6a.424.424 0 01-.305.117.41.41 0 01-.297-.117l-1.592-1.586c-.019-.019-.032-.041-.045-.062l-.014-.022c-1.55 1.426-3.59 1.653-4.422 1.678v2.438c0 .227-.194.42-.424.42a.424.424 0 01-.423-.42V18.99c-.888-.034-2.853-.277-4.36-1.667l-.017.029a.157.157 0 01-.025.038l-1.6 1.592a.46.46 0 01-.177.1.45.45 0 01-.272.102.424.424 0 01-.297-.127.43.43 0 010-.6l1.754-1.734c.017-.017.034-.025.05-.034-.764-.978-1.305-2.36-1.355-4.332a.261.261 0 01-.087.017H2.578a.417.417 0 01-.423-.42c0-.228.185-.421.423-.421h2.618c.022 0 .044.007.067.015l.034.01c.1-1.959.695-3.315 1.499-4.243a.176.176 0 00-.05-.033L4.982 5.526a.42.42 0 010-.6.413.413 0 01.594 0l1.762 1.755a.22.22 0 01.022.025.157.157 0 00.02.025c1.491-1.264 3.363-1.457 4.201-1.474V2.575c0-.235.188-.42.423-.42.23 0 .424.185.424.42v2.682c.815.034 2.712.253 4.228 1.516.009-.008.017-.025.026-.042l1.821-1.804a.423.423 0 01.603 0c.16.162.16.431 0 .6L17.285 7.33a.171.171 0 01-.042.025c.83.928 1.432 2.276 1.542 4.198a.64.64 0 00.046-.01.303.303 0 01.082-.015zm-7.168 6.618h.594c1.693-.033 5.624-.683 5.622-6.01 0-5.328-3.955-5.995-5.658-6.037-.152-.009-.323-.009-.49-.009h-.119c-1.678.017-5.574.634-5.574 6.012 0 5.389 3.93 6.02 5.625 6.044z"
            />
        </svg>
    );
};

export default IconSunLight;
