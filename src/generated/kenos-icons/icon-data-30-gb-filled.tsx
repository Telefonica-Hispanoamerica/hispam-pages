/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconData30GbFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.297 16.944a.642.642 0 01-.645.645h-1.505V16.3h1.505c.358 0 .645.287.645.645zm-.358-2.365a.642.642 0 00-.645-.645h-1.147v1.29h1.147a.642.642 0 00.645-.645zm-.896-5.268c0-.43-.072-1.792-.896-1.792-.824 0-.896 1.254-.896 1.792 0 .286.036 1.792.896 1.792.61 0 .896-.896.896-1.792zm4.444-1.613v14.3H4.507V4.113C4.507 2.932 5.367 2 6.442 2h7.275c.537 0 1.147.25 1.54.645L18.95 6.3c.358.359.538.825.538 1.398zm-11.468.036a.52.52 0 00.752 0s.287-.215.968-.215c.322 0 .645.287.645.645a.642.642 0 01-.645.645H8.95a.551.551 0 00-.538.538c0 .286.25.537.538.537h.788c.358 0 .645.287.645.645a.666.666 0 01-.645.645c-.681 0-.968-.215-.968-.215a.52.52 0 00-.752 0 .52.52 0 000 .753c.071.072.573.502 1.72.502a1.72 1.72 0 001.72-1.72c0-.466-.18-.86-.466-1.147.287-.323.466-.717.466-1.147a1.72 1.72 0 00-1.72-1.72c-1.147 0-1.649.43-1.72.501-.18.18-.215.538 0 .753zm4.336 8.027a.551.551 0 00-.537-.537H9.846a.551.551 0 00-.537.537c0 .287.25.538.537.538h1.362a1.786 1.786 0 01-1.72 1.254 1.774 1.774 0 01-1.792-1.792c0-1.003.789-1.791 1.792-1.791.43 0 .789.143 1.111.394a.556.556 0 00.753-.072.555.555 0 00-.072-.752c-.502-.395-1.147-.645-1.792-.645a2.875 2.875 0 00-2.867 2.867 2.875 2.875 0 002.867 2.866 2.875 2.875 0 002.867-2.867zm1.792-3.583c1.182 0 1.971-1.111 1.971-2.867s-.753-2.867-1.971-2.867c-1.219 0-1.971 1.075-1.971 2.867 0 1.756.752 2.867 1.97 2.867zm3.225 4.766c0-.537-.25-1.04-.68-1.362.214-.286.322-.609.322-.967a1.72 1.72 0 00-1.72-1.72h-1.72a.551.551 0 00-.538.537v4.659c0 .287.25.537.537.537h2.08c.967 0 1.72-.752 1.72-1.684z"
            />
        </svg>
    );
};

export default IconData30GbFilled;
