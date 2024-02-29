/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconTagPoundRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.364 2.208a.654.654 0 01.956 0 .731.731 0 01-.004 1.004L20.16 4.425v9.06c0 .568-.207 1.1-.592 1.504l-6.085 6.389a1.973 1.973 0 01-1.432.622c-.52 0-1.039-.209-1.433-.622l-7.555-7.934c-.381-.4-.593-.936-.593-1.504s.208-1.1.593-1.504l6.089-6.392c.38-.4.891-.623 1.432-.623h8.624l1.156-1.213zM18.61 13.985a.722.722 0 00.2-.504V5.847l-.875.918a.65.65 0 01-.952 0 .736.736 0 010-1.004l.87-.922H10.58a.663.663 0 00-.476.209l-6.085 6.388a.73.73 0 000 1.004l7.551 7.933a.654.654 0 00.957 0l6.084-6.388z"
            />
            <path
                fill={fillColor}
                d="M14.163 14.071h-2.57c.02-.113.034-.231.034-.354v-1.418h1.35c.372 0 .675-.318.675-.708 0-.391-.303-.71-.675-.71h-1.35v-1.24c0-.49.38-.886.844-.886.194 0 .38.069.532.196.29.245.714.2.952-.105a.738.738 0 00-.1-1 2.13 2.13 0 00-1.38-.513c-1.212 0-2.198 1.036-2.198 2.308v1.24c-.373 0-.675.319-.675.71 0 .39.302.708.675.708v1.418c0 .2-.147.354-.338.354-.372 0-.675.319-.675.71 0 .39.303.708.675.708h4.228c.372 0 .675-.318.675-.709 0-.39-.303-.709-.68-.709z"
            />
        </svg>
    );
};

export default IconTagPoundRegular;
