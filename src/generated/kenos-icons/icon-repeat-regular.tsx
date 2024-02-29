/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconRepeatRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.002 7.43H4.604l.536.648a.81.81 0 01-.074 1.068.686.686 0 01-.47.19c-.218 0-.398-.117-.541-.268L2 6.67l2.023-2.4c.254-.346.725-.346 1.01-.078.329.268.329.766.075 1.068l-.504.649h7.403c3.172 0 5.735 2.706 5.735 6.055a6.209 6.209 0 01-.757 3.009c-.11.23-.36.38-.614.38a.65.65 0 01-.36-.112c-.328-.19-.434-.648-.254-1.029.397-.687.577-1.448.577-2.248 0-2.515-1.949-4.534-4.332-4.534zm6.927 7.426a.711.711 0 011.011.078L22 17.333l-2.055 2.399a.682.682 0 01-.54.268c-.148 0-.328-.078-.471-.19-.328-.268-.328-.766-.074-1.068l.54-.649h-7.398c-3.177 0-5.772-2.74-5.772-6.094 0-1.03.254-2.097.757-2.936.18-.38.614-.492.975-.302.36.19.466.649.286 1.029-.397.687-.577 1.448-.577 2.248 0 2.516 1.948 4.534 4.331 4.534h7.393l-.54-.648c-.25-.307-.217-.805.074-1.068z"
            />
        </svg>
    );
};

export default IconRepeatRegular;
