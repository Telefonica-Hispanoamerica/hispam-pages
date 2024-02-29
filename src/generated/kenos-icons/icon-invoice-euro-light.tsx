/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconInvoiceEuroLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.292 21.287h13.435c.194 0 .344.16.344.356a.35.35 0 01-.344.357H4.6V7.211L9.628 2h9.447v15.36a.35.35 0 01-.344.357.351.351 0 01-.344-.357V2.718h-8.27v4.996H5.292v13.573zM9.425 3.22L5.778 7h3.647V3.22z"
            />
            <path
                fill={fillColor}
                d="M19.415 19.504a.7.7 0 01-.688.713.701.701 0 01-.688-.713.7.7 0 01.688-.713.7.7 0 01.688.713zm-5.897-8.214a2.83 2.83 0 011.464.41.34.34 0 00.472-.127.366.366 0 00-.123-.49 3.538 3.538 0 00-1.809-.507c-1.57 0-2.906 1.047-3.405 2.5h-.9a.35.35 0 00-.343.357.35.35 0 00.344.357h.732c-.027.174-.04.352-.04.535 0 .059.005.119.009.178h-.697a.35.35 0 00-.344.357.35.35 0 00.344.356h.799c.388 1.637 1.812 2.857 3.51 2.857.63 0 1.257-.174 1.808-.507a.365.365 0 00.124-.49.335.335 0 00-.472-.127 2.83 2.83 0 01-1.464.411c-1.314 0-2.43-.905-2.8-2.144h2.972a.35.35 0 00.344-.356.35.35 0 00-.344-.357h-3.092c-.004-.06-.009-.119-.009-.178 0-.183.018-.361.049-.535h3.052a.35.35 0 00.344-.357.35.35 0 00-.344-.356h-2.84c.454-1.056 1.473-1.788 2.659-1.788z"
            />
        </svg>
    );
};

export default IconInvoiceEuroLight;
