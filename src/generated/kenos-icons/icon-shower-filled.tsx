/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconShowerFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.79 11.296c.62.238 1.059.829 1.059 1.524 0 .476-.207.899-.549 1.201a.025.025 0 00-.008.02l.005 2.54c0 2.381-2.372 4.286-4.711 4.678a1.06 1.06 0 01-.939.58 1.05 1.05 0 01-.874-.49c-.002-.008-.014-.011-.022-.011H9.194c-.012 0-.02.003-.026.011a1.04 1.04 0 01-.874.49c-.414 0-.767-.243-.94-.588-2.323-.412-4.659-2.305-4.659-4.67v-2.546a.025.025 0 00-.008-.02 1.616 1.616 0 01-.496-1.523c.157-.782.91-1.305 1.711-1.305h.045V5.299c0-1.521 1.07-2.92 2.591-3.12A2.99 2.99 0 019.855 4.5a.034.034 0 00.02.02c.882.25 1.534 1.048 1.534 2v.227a.852.852 0 01-.854.846H8.048a.85.85 0 01-.854-.846V6.52c0-.894.574-1.653 1.372-1.95a.03.03 0 00.02-.039 1.753 1.753 0 00-2.132-1.084c-.767.213-1.26.964-1.26 1.754v5.952c0 .017.014.03.03.03h6.594a.03.03 0 00.028-.027c.042-.569.294-.919.518-1.11.303-.257.667-.358.97-.392.145-.386.383-.621.585-.764.457-.317.997-.345 1.342-.314.563-.454 1.103-.518 1.462-.49.703.059 1.235.493 1.527.798a.025.025 0 00.02.008c.716-.02 1.319.183 1.77.589.753.68.764 1.655.761 1.764 0 .01-.003.02-.006.03a.164.164 0 00-.005.02zM8.451 6.366h1.706a.87.87 0 00-1.706 0zm5.283 4.51c-.117-.02-.426-.011-.563.106-.02.017-.07.067-.092.199h6.476c-.011-.14-.067-.543-.359-.801-.246-.216-.63-.3-1.148-.247a.61.61 0 01-.571-.257c-.104-.146-.471-.538-.86-.569-.082-.011-.342-.025-.715.347a.625.625 0 01-.59.166c-.11-.023-.477-.068-.679.075-.039.028-.156.112-.187.432a.617.617 0 01-.238.425.607.607 0 01-.474.124zm6.465 1.327H3.813c-.224 0-.538.264-.538.589 0 .325.314.588.538.588h16.386c.224 0 .569-.263.569-.588 0-.325-.345-.589-.569-.589z"
            />
        </svg>
    );
};

export default IconShowerFilled;
