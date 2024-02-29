/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconData10GbFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.301 15.224h-1.147V13.97h1.147c.358 0 .645.286.645.645 0 .358-.287.609-.645.609zm.358 1.075h-1.505v1.254h1.505a.642.642 0 00.646-.645c0-.358-.287-.609-.646-.609zm3.835-8.6v14.298H4.514V4.114C4.514 2.932 5.374 2 6.45 2h7.275c.538 0 1.147.25 1.541.645l3.69 3.655c.359.359.538.825.538 1.398zM11.287 9.31c0 1.756.753 2.867 1.971 2.867 1.183 0 1.972-1.111 1.972-2.867s-.753-2.867-1.972-2.867c-1.218 0-1.97 1.075-1.97 2.867zm-2.83-1.756c.107.286.43.394.68.286l.143-.071v3.87c0 .287.251.538.538.538a.552.552 0 00.538-.538V6.981c0-.179-.072-.358-.251-.43-.144-.107-.323-.107-.502-.071l-.896.358c-.215.108-.358.43-.25.717zm3.905 8.207a.551.551 0 00-.537-.538H9.854a.551.551 0 00-.538.537c0 .287.251.538.538.538h1.362a1.785 1.785 0 01-1.72 1.254 1.774 1.774 0 01-1.792-1.792c0-1.003.788-1.791 1.792-1.791.43 0 .788.143 1.11.394a.556.556 0 00.753-.072.556.556 0 00-.072-.752c-.501-.395-1.146-.645-1.791-.645a2.875 2.875 0 00-2.867 2.867 2.875 2.875 0 002.867 2.866 2.875 2.875 0 002.867-2.867zm5.018 1.182c0-.537-.251-1.04-.681-1.362a1.57 1.57 0 00.322-.967 1.72 1.72 0 00-1.72-1.72h-1.72a.551.551 0 00-.538.537v4.659a.55.55 0 00.538.537h2.079c.967 0 1.72-.752 1.72-1.684zm-4.122-5.841c.61 0 .896-.896.896-1.792 0-.43-.071-1.792-.896-1.792-.824 0-.895 1.254-.895 1.792 0 .286.035 1.792.895 1.792z"
            />
        </svg>
    );
};

export default IconData10GbFilled;
