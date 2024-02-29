/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconHomeWifiRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.368 10.595c.468.46.6 1.106.347 1.692-.269.616-.91 1.014-1.633 1.014h-.504v6.932c0 .888-.787 1.611-1.756 1.611H6.062c-.969 0-1.759-.723-1.759-1.61V13.3h-.389c-.723 0-1.364-.398-1.633-1.014-.252-.583-.12-1.23.347-1.692l8.084-7.953c.661-.65 1.91-.65 2.575 0l8.08 7.953zm-.81 1.221c.042-.092.06-.232-.087-.375l-8.08-7.953a.565.565 0 00-.393-.15.56.56 0 00-.392.15l-8.081 7.953c-.146.143-.126.283-.087.375.059.132.213.275.479.275H4.93c.344 0 .627.271.627.605v7.535c0 .22.227.4.507.4h11.76c.277 0 .504-.18.504-.4v-7.535c0-.334.28-.605.627-.605h1.129c.26 0 .417-.14.473-.275zm-8.179 5.622c0-.134 0-.359-.356-.367h-.067c-.31.003-.336.18-.336.364 0 .143 0 .364.345.367.414-.005.414-.23.414-.364zm-.378-1.415c.75.02 1.462.463 1.462 1.415 0 .958-.709 1.398-1.412 1.412h-.1c-.704-.009-1.415-.451-1.415-1.418 0-.966.709-1.406 1.412-1.411 0 .002.05.002.053.002zm5.784-4.834c-2.305-2.49-5.736-2.325-5.843-2.314-3.62.039-5.587 2.028-5.731 2.174l-.006.005a.589.589 0 00.045.854.647.647 0 00.885-.041l.001-.002c.051-.052 1.713-1.75 4.845-1.783.034-.003 2.972-.134 4.869 1.913a.635.635 0 00.467.202c.149 0 .297-.05.418-.154a.592.592 0 00.05-.854zm-5.837.042c.095-.009 2.832-.096 4.577 1.79.23.249.207.63-.05.854a.644.644 0 01-.886-.048c-1.318-1.425-3.504-1.388-3.607-1.386h-.003c-2.208.025-3.537 1.375-3.577 1.416v.001a.633.633 0 01-.466.196.63.63 0 01-.42-.157.588.588 0 01-.045-.851c.07-.076 1.698-1.787 4.477-1.815zm.025 2.406h-.009c-1.857.02-2.952 1.17-3 1.221a.587.587 0 00.045.849.65.65 0 00.885-.04c.031-.033.79-.809 2.104-.823h.014c.142.002 1.358.014 2.087.804.232.25.627.269.885.048a.592.592 0 00.05-.855c-1.147-1.237-2.912-1.207-3.06-1.204z"
            />
        </svg>
    );
};

export default IconHomeWifiRegular;