/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDatabaseConnectedRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.571 4h-8.93v16h10.713V5.946C17.36 4.878 16.573 4 15.571 4zm-7.499 6.096h7.86v3.428h-7.86v-3.428zm7.856-4.15v3.009H8.072V5.526h7.5c.214 0 .356.19.356.42zM8.072 18.479v-3.81h7.86v3.81h-7.86zm3.75-10.666H9.677c-.283 0-.535-.268-.535-.57 0-.302.252-.57.535-.57h2.145c.283 0 .535.268.535.57 0 .302-.252.57-.535.57zm0 3.429H9.677c-.283 0-.535.268-.535.57 0 .303.252.57.535.57h2.145c.283 0 .535-.267.535-.57 0-.302-.215-.57-.535-.57zM9.677 15.81h2.145c.32 0 .535.268.535.57 0 .303-.252.571-.535.571H9.677c-.283 0-.535-.268-.535-.57 0-.303.252-.571.535-.571zM5.393 9.793c.251-.19.283-.531.142-.8-.179-.268-.499-.302-.75-.15a2.511 2.511 0 00-1.002 2.018c0 .8.357 1.522.965 1.98a.533.533 0 00.32.112.51.51 0 00.43-.229.59.59 0 00-.142-.8c-.283-.268-.498-.648-.498-1.068 0-.419.21-.794.535-1.063zm-1.358-1.18a3.126 3.126 0 00-.965 2.248c0 .84.357 1.673.965 2.248.215.19.215.571.036.8a.575.575 0 01-.393.19.448.448 0 01-.357-.15C2.466 13.186 2 12.04 2 10.86s.462-2.326 1.321-3.087a.495.495 0 01.75.04.576.576 0 01-.036.8zm15.217.264c-.252-.19-.572-.113-.75.15a.59.59 0 00.142.8c.32.23.498.65.498 1.069 0 .419-.178.8-.498 1.067-.252.19-.284.532-.142.8.105.152.284.23.43.23a.566.566 0 00.32-.113c.608-.497.965-1.219.965-2.019s-.357-1.526-.965-1.984zm.677-1.063c.178-.23.535-.23.75-.04.86.761 1.321 1.907 1.321 3.087 0 1.18-.498 2.287-1.321 3.087a.447.447 0 01-.357.152.565.565 0 01-.393-.19.576.576 0 01.036-.8 3.13 3.13 0 00.965-2.249c0-.838-.357-1.677-.965-2.248-.215-.19-.215-.57-.036-.8z"
            />
        </svg>
    );
};

export default IconDatabaseConnectedRegular;
