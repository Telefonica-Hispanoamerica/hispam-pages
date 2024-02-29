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

const IconMedicalHistoryRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.998 3.074h1.82c1.2 0 2.182.965 2.182 2.144V22H4V5.214c0-1.18.982-2.144 2.183-2.144h1.82V2h7.995v1.074zm-1.09 0H9.055v1.788h5.855V3.074zm3.635 17.5V5.214a.72.72 0 00-.726-.713h-1.815v1.43h-8V4.505h-1.82a.72.72 0 00-.725.713v6.071h.4l1.629-2.93a.568.568 0 01.474-.284.53.53 0 01.475.252l2.509 4.215 1.852-3.145a.624.624 0 01.475-.252.63.63 0 01.474.252l1.126 1.897h1.127c.288 0 .544.251.544.535a.556.556 0 01-.544.534h-1.452c-.182 0-.363-.105-.508-.283l-.8-1.358-1.852 3.14a.624.624 0 01-.475.252.53.53 0 01-.475-.251l-2.47-4.178-1.309 2.39c-.074.179-.293.284-.474.284h-.726v8.215h13.086zM7.821 16.647h8.358c.293 0 .55.251.55.535a.556.556 0 01-.545.535H7.82a.556.556 0 01-.545-.535c0-.284.256-.535.545-.535z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.38 4.892c0-.695-.748-1.306-1.602-1.306h-2.953c-.361-.722-1.143-1.431-2.829-1.431-1.384 0-2.356.515-2.826 1.429H6.215c-.852 0-1.6.61-1.6 1.305v15.647c0 .706.734 1.305 1.602 1.305h11.56c.869 0 1.603-.596 1.603-1.305V4.892zm-7.384-1.558c1.55 0 1.787.754 1.863 1.003.061.205.092.415.098.628v.117c-.006.227-.02.614-1.96.614-1.937 0-1.953-.382-1.964-.651v-.002l.005-.14c.034-.731.286-1.569 1.958-1.569zm5.782 17.328H6.215a.79.79 0 01-.394-.116.098.098 0 00-.024-.013L5.786 4.945c.03-.053.213-.185.429-.185h2.65l-.003.027-.003.026-.009.101-.002.126.002.079c.056 1.537 1.547 1.75 3.149 1.75s3.092-.213 3.146-1.722l.002-.107-.008-.193a.305.305 0 00-.005-.052l-.004-.032h2.648c.163 0 .308.076.376.111.02.01.034.018.038.018l.009 15.6c-.023.047-.191.17-.423.17zM11.3 5.287a.553.553 0 01-.554-.55.55.55 0 01.554-.548h1.393a.55.55 0 01.551.549.55.55 0 01-.551.549H11.3zm6.297 8.963a.55.55 0 00-.551-.549s-1.564 0-1.56-.005l-.757-2.14a.555.555 0 00-1.053.028l-.625 2.114h-.53a.55.55 0 00-.504.325l-.35.776-.96-4.77a.549.549 0 00-.513-.44.544.544 0 00-.557.387l-1.143 3.67h-1.55a.551.551 0 00-.554.548c.003.305.25.55.555.55H8.9a.554.554 0 00.53-.387l.618-1.99.874 4.337a.554.554 0 001.048.118l.91-2.023h.586a.55.55 0 00.529-.395l.258-.868.316.896a.55.55 0 00.521.367h1.956a.55.55 0 00.551-.549z"
                />
            </svg>
        );
    }
};

export default IconMedicalHistoryRegular;
