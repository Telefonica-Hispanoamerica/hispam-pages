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

const IconPeopleNetworkFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.13 12.716c-.172 0-.378 0-.546.036l-1.5-2.747c.855-.856 1.363-2.035 1.363-3.359C16.447 4.071 14.47 2 12.017 2 9.563 2 7.583 4.071 7.583 6.642c0 1.324.546 2.5 1.362 3.359l-1.534 2.75c-.137-.035-.34-.035-.51-.035-2.454 0-4.43 2.07-4.43 4.642C2.47 19.928 4.442 22 6.895 22c2.217 0 4.056-1.715 4.362-3.93h1.469c.34 2.215 2.148 3.93 4.36 3.93 2.454 0 4.43-2.071 4.43-4.642s-1.934-4.642-4.387-4.642zm-5.113-9.289c1.706 0 3.068 1.428 3.068 3.215 0 .716-.24 1.396-.615 1.927a2.107 2.107 0 00-.988-1.071c.271-.324.408-.752.408-1.216 0-1.071-.854-1.967-1.877-1.967-1.022 0-1.877.896-1.877 1.967 0 .464.171.896.408 1.252-.477.252-.816.608-.988 1.071a3.584 3.584 0 01-.614-1.967c.003-1.78 1.365-3.21 3.075-3.21zm-.004 7.861c.68 0 1.362-.18 1.942-.463l1.294 2.359c-1.294.643-2.252 1.927-2.488 3.466h-1.465c-.24-1.535-1.194-2.823-2.488-3.466l1.263-2.36c.58.284 1.263.464 1.942.464zm-2.66 8.001a2.107 2.107 0 00-.988-1.072c.271-.323.409-.751.409-1.215 0-1.072-.855-1.967-1.878-1.967-1.022 0-1.873.895-1.873 1.967 0 .464.172.896.408 1.252-.477.251-.816.607-.988 1.071a3.582 3.582 0 01-.614-1.963c0-1.787 1.362-3.215 3.067-3.215 1.706 0 3.068 1.428 3.068 3.215a3.345 3.345 0 01-.61 1.927zm9.242-1.072c.271-.323.408-.751.408-1.215 0-1.072-.854-1.967-1.877-1.967-1.023 0-1.877.895-1.877 1.967 0 .464.171.896.408 1.252-.477.251-.816.607-.988 1.071a3.584 3.584 0 01-.614-1.967c0-1.787 1.362-3.215 3.067-3.215 1.706 0 3.068 1.428 3.068 3.215a3.373 3.373 0 01-.607 1.931 2.107 2.107 0 00-.988-1.072z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.995 6.58c-.697 0-1.24-.184-1.616-.545-.39-.379-.588-.936-.588-1.664 0-.729.196-1.289.588-1.667.375-.364.921-.549 1.616-.549.698 0 1.244.185 1.622.55.392.377.591.937.591 1.666 0 .725-.199 1.285-.591 1.664-.378.364-.924.546-1.622.546zm-3.67 4.415a.253.253 0 01-.251-.252v-.736c0-.704.218-1.303.633-1.737.45-.47 1.123-.72 1.94-.72h2.695c.821 0 1.493.25 1.944.72.415.434.636 1.033.636 1.737v.736a.253.253 0 01-.252.252H8.326zM4.46 16.881c.375.36.919.546 1.616.546.698 0 1.244-.182 1.622-.55.395-.377.594-.938.594-1.663 0-.729-.199-1.289-.591-1.667-.378-.364-.924-.549-1.622-.549-.697 0-1.244.188-1.619.552-.392.38-.588.938-.588 1.667 0 .728.196 1.285.588 1.664zm2.964 1.515c.818 0 1.49.25 1.944.72.417.434.636 1.033.636 1.736v.737c0 .14-.113.252-.253.252H2.407a.251.251 0 01-.252-.252v-.736c0-.704.218-1.306.633-1.737.45-.47 1.123-.723 1.941-.723h2.695v.003zm8.28-3.185c0 .728.199 1.286.59 1.664.376.361.914.546 1.614.546.7 0 1.244-.182 1.622-.546.392-.378.594-.938.594-1.664s-.199-1.289-.591-1.667c-.378-.364-.925-.549-1.622-.549-.697 0-1.244.185-1.619.55-.39.377-.588.938-.588 1.666zm5.501 3.9c.418.433.636 1.033.636 1.736v.737a.253.253 0 01-.252.252h-7.347a.253.253 0 01-.253-.252v-.737c0-.703.219-1.306.633-1.737.451-.47 1.124-.72 1.942-.72h2.692c.823 0 1.495.25 1.95.72zm-7.409-2.41a.621.621 0 00.857-.207.622.622 0 00-.21-.86L12.6 14.505v-2.143a.625.625 0 00-1.25 0v2.143l-1.842 1.129a.627.627 0 00.327 1.16.62.62 0 00.325-.093l1.818-1.112 1.818 1.112z"
                />
            </svg>
        );
    }
};

export default IconPeopleNetworkFilled;