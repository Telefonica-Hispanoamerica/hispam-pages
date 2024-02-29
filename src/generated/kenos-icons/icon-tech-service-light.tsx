/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconTechServiceLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.113 20.084a.334.334 0 00.482.004l3.366-3.524c2.602.968 5.51.292 7.47-1.76 2.014-2.107 2.64-5.263 1.601-8.039l-.19-.508-4.65 4.86a.99.99 0 01-1.45 0l-1.929-2.02a1.113 1.113 0 010-1.516l4.654-4.864-.485-.2c-2.656-1.087-5.67-.428-7.68 1.676-1.96 2.052-2.61 5.096-1.682 7.82l-5.04 5.271a.367.367 0 000 .504.33.33 0 00.482 0l5.353-5.6-.08-.215c-.94-2.516-.375-5.368 1.448-7.276 1.693-1.772 4.173-2.408 6.446-1.696l-3.897 4.08a1.846 1.846 0 000 2.524l1.93 2.02a1.65 1.65 0 002.414 0l3.898-4.076c.68 2.376.072 4.972-1.624 6.748-1.823 1.903-4.547 2.5-6.95 1.515l-.207-.083-3.68 3.851a.367.367 0 000 .504zM6.853 22c.378 0 .683-.324.683-.716 0-.392-.305-.716-.684-.716-.378 0-.684.32-.684.716 0 .396.306.716.684.716z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.544 2.511c.348-.064.7-.1 1.056-.106h.006c.336 0 .605.168.717.437.112.269.037.574-.201.812l-.732.731a.31.31 0 00-.047.146l.14.986.986.14a.32.32 0 00.143-.047l.73-.732c.21-.207.421-.252.561-.252.342 0 .686.264.69.768-.006.344-.04.689-.102 1.03-.145.796-.42 1.401-.818 1.799-.392.392-.986.667-1.767.812-.348.065-.7.101-1.056.107h-.003a.533.533 0 00-.221.092l-8.39 8.39a.486.486 0 00-.092.22c-.006.345-.04.69-.1 1.032-.147.795-.421 1.4-.819 1.798-.392.392-.986.667-1.767.812-.348.065-.7.101-1.056.107h-.003c-.336 0-.605-.166-.717-.434-.112-.27-.037-.575.201-.813l.732-.73a.31.31 0 00.047-.146l-.14-.99-.986-.14a.3.3 0 00-.146.048l-.73.731c-.21.208-.42.252-.56.252-.343 0-.687-.263-.69-.767.006-.345.04-.69.1-1.03.147-.796.421-1.402.819-1.8.392-.391.986-.666 1.767-.811.348-.065.7-.101 1.056-.107h.003a.533.533 0 00.221-.092l8.39-8.39a.486.486 0 00.092-.221c.006-.345.04-.69.101-1.03.146-.796.42-1.401.818-1.8.392-.391.986-.666 1.768-.812zm1.166.734c.143-.142.095-.263-.11-.263-.053 0-1.672.006-2.417.75-.753.754-.748 2.418-.748 2.418 0 .205-.117.488-.26.633l-8.392 8.39a1.03 1.03 0 01-.63.26H6.15c-.056 0-1.676.006-2.418.75-.753.757-.748 2.42-.748 2.42 0 .124.045.191.112.191.045 0 .096-.028.152-.084l.736-.736a.842.842 0 01.552-.216c.025 0 .05.003.076.006l1.053.15a.53.53 0 01.417.421l.152 1.053a.842.842 0 01-.21.628l-.737.734c-.143.142-.095.263.109.263h.003c.056 0 1.675-.006 2.417-.748.754-.753.748-2.417.748-2.417 0-.205.118-.49.26-.633l8.393-8.395c.143-.143.425-.26.63-.26h.003c.056 0 1.675-.007 2.417-.749.754-.753.748-2.417.748-2.417 0-.123-.045-.19-.112-.19-.045 0-.095.027-.151.083l-.734.734a.842.842 0 01-.552.216.687.687 0 01-.076-.006l-1.053-.15a.529.529 0 01-.42-.421l-.151-1.053a.841.841 0 01.21-.628l.734-.734z"
                />
            </svg>
        );
    }
};

export default IconTechServiceLight;
