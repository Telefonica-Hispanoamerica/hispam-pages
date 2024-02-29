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

const IconChipSimCardLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.5 21.964L18.8 22c.212 0 .348-.144.348-.356s-.136-.356-.347-.356H5.199V3.824c0-.608.489-1.108 1.047-1.108h7.324c.278 0 .59.14.801.32l3.73 3.82c.208.216.348.5.348.752v9.748c0 .212.137.356.348.356.207 0 .348-.14.348-.356V7.572c0-.432-.211-.896-.56-1.252l-3.73-3.784A1.925 1.925 0 0013.566 2H6.242C5.266 2 4.5 2.82 4.5 3.82v18.144z"
                />
                <path
                    fill={fillColor}
                    d="M7.293 19.144h9.07v-8.32c0-.572-.558-.964-1.047-.964H8.34c-.488 0-1.047.392-1.047.964v8.32zm8.367-.716H7.992V10.82c0-.108.172-.252.348-.252h6.973c.171 0 .347.144.347.252v7.608zM19.5 19.5a.708.708 0 01-.7.716.707.707 0 01-.698-.716c0-.395.313-.716.699-.716.386 0 .699.32.699.716z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.095 19.65H7.902a.28.28 0 01-.28-.28v-8.612a.28.28 0 01.28-.28h8.193a.28.28 0 01.28.28v8.611a.28.28 0 01-.28.28zm-.28-3.292V13.77H8.182v2.588h7.633zm-2.176.56v2.171h2.176v-2.17H13.64zm-.56 0h-2.171v2.171h2.17v-2.17zm-2.732 0H8.182v2.171h2.165v-2.17zM8.182 13.21h2.165v-2.171H8.182v2.17zm2.726 0h2.17v-2.171h-2.17v2.17zm2.73 0h2.177v-2.171H13.64v2.17z"
                />
                <path
                    fill={fillColor}
                    d="M16.639 21.834H7.36c-.622 0-1.106-.18-1.442-.535-.317-.333-.476-.801-.476-1.384V6.26a.29.29 0 01.08-.199l3.824-3.824a.277.277 0 01.2-.08h7.092c.621 0 1.106.179 1.442.534.317.334.476.801.476 1.384v15.84c0 .583-.16 1.05-.476 1.384-.336.356-.82.535-1.442.535zM6.003 6.374v13.541c0 .902.456 1.359 1.358 1.359h9.278c.902 0 1.358-.457 1.358-1.359V4.075c0-.902-.456-1.359-1.358-1.359H9.66L6.003 6.375z"
                />
            </svg>
        );
    }
};

export default IconChipSimCardLight;
