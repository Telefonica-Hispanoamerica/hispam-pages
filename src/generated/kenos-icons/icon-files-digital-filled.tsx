/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconFilesDigitalFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.087 14.468c-.499.532-1.235.804-2.182.804l-7.17.002v.79h9.478c.339 0 .602.28.602.617a.604.604 0 01-.602.616h-9.479v1.784c0 .591-.496 1.093-1.081 1.093H3.266a1.103 1.103 0 01-1.08-1.093V8.597c0-.591.503-1.101 1.08-1.101h1.275V6.78c0-.935.252-1.666.73-2.168.5-.523 1.236-.787 2.183-.787l11.45-.008c.948 0 1.687.263 2.183.79.49.51.731 1.232.731 2.168v5.513c0 .938-.24 1.669-.731 2.179zM10.53 18.944v-6.712H9.367c-.683 0-1.266-.224-1.7-.658-.44-.434-.672-1.028-.672-1.709V8.731H3.387v10.213h7.143zM8.2 8.78h-.004v1.084c0 .345.104.625.306.83.263.257.607.305.865.305h1.12L8.2 8.78z"
            />
        </svg>
    );
};

export default IconFilesDigitalFilled;
