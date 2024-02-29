/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconAmbulanceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.84 15.801l-.01-2.846c0-.708-.455-1.299-.702-1.618a339.183 339.183 0 01-2.84-3.763c-.35-.479-.93-.804-1.536-.885V5.227c0-.79-.677-1.431-1.518-1.431H3.668c-.84 0-1.518.633-1.518 1.423v11.187c0 .74.605 1.342 1.373 1.415.196 1.479 1.249 2.38 2.865 2.38 1.608 0 2.661-.893 2.866-2.363h3.933c.204 1.47 1.257 2.364 2.865 2.364 1.608 0 2.661-.894 2.874-2.364h.857a2.07 2.07 0 001.437-.617c.39-.389.62-.91.62-1.42zm-6.312-1.353c-1.255.171-2.098.961-2.316 2.171v-.003H9.237c-.26-1.38-1.3-2.21-2.849-2.21-1.532 0-2.563.821-2.832 2.171-.098-.033-.179-.098-.179-.17V5.218c0-.101.123-.205.294-.205h11.563c.171 0 .294.115.294.213v9.221zm4.827 1.91c-.166.163-.376.261-.572.258h-.882c-.21-1.15-.986-1.924-2.146-2.142v-6.55c.213.062.4.188.538.365.95 1.269 1.905 2.535 2.866 3.795.17.21.448.577.448.869l.008 2.846c0 .187-.098.397-.26.56zm-4.303 2.625c-1.117 0-1.68-.56-1.68-1.672 0-1.112.563-1.68 1.68-1.68 1.118 0 1.69.568 1.69 1.68s-.572 1.672-1.69 1.672zm-9.664 0c-1.117 0-1.68-.56-1.68-1.672 0-1.112.563-1.68 1.68-1.68 1.118 0 1.69.568 1.69 1.68s-.572 1.672-1.69 1.672zm6.115-9.445v.997H10.56a.612.612 0 00-.61.61l.002 1.934h-.994l-.003-1.933a.608.608 0 00-.61-.608H6.398v-.989l1.942-.003c.336 0 .61-.274.61-.61V7.003h.997V8.93c.003.34.278.61.614.61l1.941-.002zm1.224-.3c0-.496-.456-.916-1-.916h-1.546V6.78c0-.54-.423-.997-.922-.997H8.657c-.498 0-.921.456-.921.997v1.546H6.184c-.54 0-1 .42-1 .916v1.597c0 .498.46.916 1 .916h1.554v1.543c0 .54.42.997.92.997h1.601c.496 0 .92-.456.92-.997v-1.546h1.548c.54 0 1-.42 1-.916V9.238z"
            />
        </svg>
    );
};

export default IconAmbulanceRegular;
