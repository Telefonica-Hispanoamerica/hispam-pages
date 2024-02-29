/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconTeddyBearFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.325 15.961c.451.42.684.96.703 1.7 0 .031-.005.149-.016.219a6.167 6.167 0 01-.043.269l-.65 2.456a.14.14 0 01-.02.047.264.264 0 00-.016.032.121.121 0 00-.002.01l-.002.009c-.003.013-.005.026-.013.037-.002.006-.007.01-.01.015a.045.045 0 00-.012.016l-.004.006c-.018.025-.034.049-.058.07a1.96 1.96 0 01-.308.4c-.428.395-1.016.596-1.753.596-.737 0-1.328-.201-1.754-.596a2.033 2.033 0 01-.571-.975c-.995.546-2.23.818-3.742.818a.26.26 0 01-.026-.001l-.025-.002c-.008 0-.017 0-.025.002a.304.304 0 01-.025.001c-1.513 0-2.745-.272-3.743-.818a2.011 2.011 0 01-.568.975c-.432.395-1.023.596-1.754.596-.736 0-1.325-.201-1.753-.596a1.968 1.968 0 01-.311-.4l-.003-.004a.523.523 0 01-.056-.072.136.136 0 00-.01-.013c-.006-.006-.012-.011-.015-.018a.115.115 0 01-.009-.028.115.115 0 00-.008-.028l-.016-.034a.182.182 0 01-.02-.045l-.65-2.456s-.034-.188-.045-.27a1.882 1.882 0 01-.017-.218c.023-.736.25-1.277.703-1.7.05-.046.106-.083.162-.121l.048-.033c-.916-.96-1.386-2.504.023-4.092.605-.684 1.913-1.457 2.641-1.563a.323.323 0 00.066-.02c.02-.006.04-.014.069-.02l-.006-.01-.003-.012c-.269-.697-.412-1.496-.412-2.403 0-.35.037-.678.079-.998a.084.084 0 00-.032-.008.089.089 0 01-.033-.008A2.567 2.567 0 016 6.479l-.14-.112c-.81-.683-1.347-1.94-.199-3.235 1.14-1.286 2.496-.986 3.322-.336.84-.41 1.84-.636 3.023-.636 1.182 0 2.182.227 3.022.636.827-.65 2.185-.95 3.322.336 1.149 1.294.611 2.552-.201 3.235l-.137.112a3.351 3.351 0 01-.283.194.12.12 0 01-.037.01.177.177 0 00-.03.006c.041.323.078.647.078.998 0 .907-.143 1.706-.412 2.403l-.008.022a.368.368 0 01.064.02c.02.008.04.015.067.02.729.106 2.037.88 2.645 1.563 1.406 1.588.935 3.129.02 4.092l.035.024c.06.04.12.081.174.13zM8.74 4.46c-.765.711-1.154 1.798-1.154 3.227 0 1.428.39 2.51 1.154 3.218.619.574 1.507.897 2.616.992V8.765a1.375 1.375 0 01-.412-.255 1.095 1.095 0 01-.313-.484s-.045-.152-.045-.267c0-.098.056-.238.056-.238a1.2 1.2 0 01.266-.367c.272-.249.641-.378 1.095-.386.457.008.826.137 1.095.386.12.11.196.219.266.367 0 0 .056.143.056.238 0 .113-.041.267-.041.267a1.08 1.08 0 01-.314.484 1.32 1.32 0 01-.412.255v3.132c1.11-.093 1.997-.415 2.619-.992.765-.709 1.151-1.793 1.151-3.218 0-1.429-.386-2.516-1.151-3.227-.74-.69-1.838-1.04-3.266-1.04-1.429 0-2.527.35-3.266 1.04zm-2.084.87a4.58 4.58 0 011.151-1.758c-.395-.157-.781-.037-1.146.375-.442.504-.434.967-.005 1.384zm1.829 1.435c0 .207.056.364.174.473.112.104.274.157.481.157.208 0 .37-.053.482-.157.115-.106.177-.266.177-.473 0-.207-.062-.367-.177-.476-.112-.107-.274-.157-.482-.157-.207 0-.37.053-.481.157-.115.106-.174.266-.174.476zM19.412 16.87c-.199-.185-.52-.283-.952-.283-.432 0-.751.095-.953.283-.207.193-.313.507-.313.938a.074.074 0 01-.004.02.07.07 0 00-.005.025l-.176 1.678c.003.367.092.641.271.806.174.16.46.244.844.244.38 0 .663-.084.84-.243a.913.913 0 00.11-.143l.01-.034c.076-.25.564-1.83.633-2.403a1.02 1.02 0 00-.305-.888zM6.734 20.334c.18-.166.266-.437.272-.807l-.177-1.678a.074.074 0 00-.003-.02.07.07 0 01-.005-.025c0-.428-.106-.745-.31-.938-.205-.188-.525-.283-.956-.283-.431 0-.75.095-.952.283-.2.185-.35.49-.306.888.073.624.644 2.434.644 2.434a.556.556 0 00.11.143c.176.16.456.244.84.244.384.005.667-.079.843-.241zm-1.686-5.208l.162.135c.028.022.073.053.112.078a.307.307 0 00.035-.003l.035-.002-.015-.18a4.54 4.54 0 01-.024-.411c0-1.138.208-2.124.574-2.978-.366.216-.764.496-1.01.77-1.093 1.236-.387 2.154.13 2.591zM17.35 3.947c-.364-.412-.75-.532-1.145-.375.51.482.896 1.067 1.154 1.759.428-.417.437-.88-.009-1.384zm.734 7.82c.367.855.572 1.841.572 2.979 0 .141-.012.277-.024.411l-.015.18c.01 0 .023 0 .035.002a.307.307 0 00.035.003 1.8 1.8 0 00.112-.078l.165-.135c.518-.44 1.224-1.358.132-2.594-.244-.274-.642-.554-1.012-.767zM14.39 7.239c.112.104.274.157.481.157.208 0 .37-.053.482-.157.115-.106.174-.266.174-.473 0-.207-.056-.367-.174-.473-.112-.107-.274-.16-.482-.16-.204 0-.37.053-.481.16-.118.103-.177.266-.177.473 0 .207.059.367.177.473z"
            />
        </svg>
    );
};

export default IconTeddyBearFilled;
