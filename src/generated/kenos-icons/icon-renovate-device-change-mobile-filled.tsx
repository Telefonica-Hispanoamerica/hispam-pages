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

const IconRenovateDeviceChangeMobileFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.992 17.992a.7.7 0 00-.79-.615l-1.252.191A10.255 10.255 0 0021.57 12c0-5.517-4.298-10-9.576-10a9.153 9.153 0 00-4.097.959.74.74 0 00-.33.968c.165.363.58.517.927.345a7.797 7.797 0 013.5-.82c4.511 0 8.185 3.837 8.185 8.548a8.75 8.75 0 01-1.44 4.832l-.214-1.55a.7.7 0 00-.79-.614c-.378.056-.646.428-.588.824l.535 3.887 3.723-.559a.728.728 0 00.588-.828zm-5.528 2.053a.746.746 0 01-.325.973 9.15 9.15 0 01-4.142.982c-5.282 0-9.575-4.488-9.575-10 0-2.007.57-3.939 1.627-5.577l-1.253.19c-.379.061-.736-.218-.79-.614-.053-.396.21-.768.59-.824l3.722-.559.535 3.888c.053.395-.21.768-.589.824l-.012.001c-.03.004-.058.008-.086.008a.705.705 0 01-.686-.624l-.223-1.56a8.771 8.771 0 00-1.45 4.842c0 4.712 3.674 8.548 8.186 8.548a7.86 7.86 0 003.54-.838.687.687 0 01.931.34zm-.637-5.322H8.163V9.267h7.664v5.457zm-7.664 1.64c0 1 .78 1.82 1.743 1.82h4.182c.959 0 1.743-.815 1.743-1.82v-.55H8.163v.55zm1.739-10.55h4.182c.958 0 1.738.815 1.738 1.82v.545H8.16v-.545c0-1.005.785-1.82 1.743-1.82z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.04 4.002c-.51-.493-1.238-.742-2.16-.742h-6.14c-.921 0-1.647.25-2.16.742-.531.513-.8 1.258-.8 2.219v11.56c0 .958.269 1.706.8 2.219.51.492 1.239.742 2.16.742h6.143c.922 0 1.647-.25 2.16-.742.532-.513.801-1.258.801-2.219V6.221c-.003-.958-.272-1.703-.804-2.219zM4.514 10.114c.271 0 .49-.218.49-.49v-.639c0-1.366.636-2.002 2.003-2.002h.064a26.06 26.06 0 00-.286.246.492.492 0 00.63.754l.009-.009c.137-.117.826-.711.955-.837.4-.4.398-.902-.005-1.306-.25-.249-.922-.823-.95-.846a.49.49 0 00-.692.057.49.49 0 00.056.691c.07.06.188.16.317.275h-.096c-.932 0-1.666.252-2.179.745-.535.515-.804 1.269-.804 2.238v.639a.484.484 0 00.488.484zm11.282 8.552c-.198 0-.36-.053-.473-.165-.1-.104-.16-.255-.16-.462 0-.429.25-.628.633-.628.384 0 .634.2.634.628 0 .204-.06.358-.16.462-.112.112-.275.165-.473.165zm-8.851-7.482h-3.02c-1.109 0-1.77.661-1.77 1.77v5.992c0 1.11.661 1.77 1.77 1.77h3.02c1.11 0 1.77-.66 1.77-1.77v-5.991c-.003-1.11-.664-1.77-1.77-1.77zM5.55 18.96a.394.394 0 01-.283-.098c-.062-.061-.095-.154-.095-.274 0-.255.148-.373.375-.373s.378.118.378.373a.374.374 0 01-.092.274c-.067.068-.163.098-.283.098z"
                />
            </svg>
        );
    }
};

export default IconRenovateDeviceChangeMobileFilled;
