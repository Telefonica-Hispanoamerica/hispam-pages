/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconLaptopChargingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2.95 16.276c.535.535 1.336.807 2.376.807 0 0 13.341-.008 13.341-.005 1.04 0 1.84-.272 2.378-.807.516-.516.78-1.263.78-2.221V8.033c0-.958-.264-1.7-.782-2.21-.535-.527-1.334-.793-2.376-.793l-13.341.006c-1.04 0-1.84.266-2.376.79-.518.51-.781 1.252-.781 2.21v6.02c0 .96.263 1.705.781 2.22zm8.799-4.204l-.003 1.698c0 .109.09.198.199.196h.005a.204.204 0 00.188-.118l1.305-2.89a.186.186 0 00-.025-.197.213.213 0 00-.19-.075l-1.079.142.02-1.67a.2.2 0 00-.165-.195.207.207 0 00-.23.117l-1.224 2.85a.186.186 0 00.028.193c.045.061.115.084.19.078l.98-.129zm-1.91-2.888c0-.31.072-.53.22-.675.152-.146.382-.218.71-.218h2.461c.33 0 .563.07.712.212.148.14.218.362.218.678v4.729c0 .319-.072.543-.218.683-.149.14-.381.207-.709.207h-2.462c-.33 0-.563-.067-.709-.207-.148-.14-.221-.364-.221-.683-.003 0-.003-4.726-.003-4.726zm1.677-1.815c-.034 0-.115.003-.143.03-.028.026-.03.096-.03.138v.168h1.31v-.168c0-.081-.014-.123-.03-.137-.02-.02-.073-.031-.146-.031h-.96zm-.75 8.02c-.5 0-.875-.124-1.146-.376-.27-.258-.4-.619-.4-1.103V9.184c0-.473.13-.829.397-1.09.263-.257.627-.383 1.106-.389v-.17c0-.23.07-.415.208-.553.143-.137.339-.204.582-.204h.961c.244 0 .44.067.58.202.14.134.21.322.21.554v.171c.482.006.849.132 1.11.384.265.258.397.616.397 1.095v4.723c0 .484-.132.846-.403 1.103-.267.255-.639.379-1.14.379h-2.463zm11.075 2.997a.602.602 0 00-.613-.591H2.768a.603.603 0 00-.613.59c0 .326.274.589.616.589h18.457a.601.601 0 00.613-.588z"
            />
        </svg>
    );
};

export default IconLaptopChargingFilled;
