/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDeliveryVanMovingLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.465 16.652h-.852c-.176 1.062-.913 1.638-2.122 1.638-1.21 0-1.947-.576-2.122-1.639a.26.26 0 01-.016 0H9.781c-.176 1.063-.913 1.64-2.122 1.64-1.21 0-1.947-.577-2.122-1.64H5.17c-.706 0-1.372-.666-1.372-1.372v-1.358H2.44a.28.28 0 01-.28-.28.28.28 0 01.28-.28H3.8V11.19H2.44a.28.28 0 01-.28-.28.28.28 0 01.28-.28H3.8V8.457H2.44a.28.28 0 01-.28-.28.28.28 0 01.28-.28H3.8v-.812c0-.706.666-1.373 1.372-1.373h11.47c.505 0 1.034.266 1.32.664a475 475 0 003.272 4.362c.227.294.605.787.605 1.263v3.277c0 .706-.667 1.373-1.373 1.373zM4.36 7.086v8.193c0 .395.417.813.812.813h.325c.014-1.372.78-2.127 2.163-2.127 1.382 0 2.149.755 2.162 2.127h5.507c.014-1.372.78-2.127 2.163-2.127 1.382 0 2.149.755 2.162 2.127h.812c.395 0 .813-.418.813-.813v-3.277c0-.286-.317-.7-.488-.922a481.18 481.18 0 01-3.283-4.378c-.179-.25-.543-.428-.865-.428H5.172c-.396 0-.813.417-.813.812zm3.3 7.44c-.53 0-.933.129-1.194.38-.271.261-.409.673-.409 1.222 0 .549.138.96.41 1.221.263.252.663.381 1.193.381s.932-.129 1.193-.38c.272-.261.409-.673.409-1.222 0-.55-.137-.96-.41-1.221-.26-.255-.663-.381-1.192-.381zm9.832 0c-.53 0-.933.129-1.194.38-.271.261-.409.673-.409 1.222 0 .549.138.96.41 1.221.263.252.663.381 1.193.381.529 0 .932-.129 1.193-.38.272-.261.409-.673.409-1.222 0-.55-.137-.96-.41-1.221-.26-.255-.663-.381-1.192-.381z"
            />
        </svg>
    );
};

export default IconDeliveryVanMovingLight;
