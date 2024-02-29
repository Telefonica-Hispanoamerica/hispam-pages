/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconEmergencyCrossWithCircleLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 12.02c0-9.054-7.504-9.815-9.43-9.86a13.434 13.434 0 00-.757-.006h-.177c-1.974.014-9.322.695-9.322 9.81 0 9.129 7.415 9.843 9.392 9.87.101.004.205.004.309.004.21 0 .414-.003.593-.006 1.877-.036 9.392-.74 9.392-9.812zm-.82-.003c0 8.196-6.572 8.955-8.586 8.992-.176.002-.375.005-.58.005-.1 0-.198 0-.296-.003-.86-.01-3.07-.173-5.014-1.398-2.37-1.492-3.572-4.067-3.572-7.655 0-3.583 1.19-6.148 3.538-7.625 1.927-1.212 4.12-1.358 4.972-1.367h.17c.253 0 .513.003.738.009.86.022 3.067.202 5.022 1.428 2.392 1.502 3.608 4.065 3.608 7.614zm-2.869 1.353c0 .174-.252.392-.535.39h-3.445a.409.409 0 00-.409.412l.008 3.444c0 .292-.215.524-.394.524h-2.757c-.179 0-.395-.232-.395-.524v-3.445a.41.41 0 00-.409-.409H6.367c-.294 0-.524-.21-.524-.392v-2.748c0-.177.233-.392.524-.392h3.445a.41.41 0 00.41-.41V6.376c0-.288.218-.535.394-.535h2.748c.174 0 .395.253.395.535v3.437c0 .227.182.41.41.41h3.447c.28 0 .532.218.532.392v2.756zm.821-2.756c0-.645-.63-1.213-1.353-1.213H14.58V6.375c0-.72-.569-1.352-1.216-1.352h-2.748c-.65 0-1.215.633-1.215 1.352V9.41H6.364c-.728 0-1.344.557-1.344 1.213v2.748c0 .658.616 1.213 1.344 1.213h3.037v3.033c0 .729.557 1.345 1.215 1.345h2.757c.658 0 1.215-.616 1.215-1.345l-.008-3.033h3.036c.72 0 1.353-.566 1.353-1.213v-2.756z"
            />
        </svg>
    );
};

export default IconEmergencyCrossWithCircleLight;
