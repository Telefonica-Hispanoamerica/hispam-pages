/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconSendRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.513 2.831c.005-.038.005-.076.005-.109v-.024a.722.722 0 00-.023-.137v-.01a.058.058 0 01-.009-.028.514.514 0 00-.054-.137l-.04-.071a.717.717 0 00-.086-.104l-.019-.017a1.046 1.046 0 00-.104-.083.704.704 0 00-.212-.09c-.004-.003-.01-.004-.015-.005a.558.558 0 00-.235-.007.12.12 0 01-.02.002.326.326 0 01-.035.005c-.01.001-.022.002-.033.005L2.99 7.03a.737.737 0 00-.519.654.75.75 0 00.406.734l7.898 3.815-.696.73a.767.767 0 000 1.047c.276.29.723.29.998 0l.696-.73 3.634 8.289a.703.703 0 00.642.431c.018 0 .04 0 .058-.005a.708.708 0 00.623-.545l4.764-18.51.005-.028c0-.01.002-.02.004-.029l.002-.01a.142.142 0 00.007-.042zm-3.066 1.35l-6.606 6.934-6.601-3.19 13.207-3.743zm-5.608 7.981l6.606-6.933-3.567 13.861-3.039-6.928z"
            />
        </svg>
    );
};

export default IconSendRegular;
