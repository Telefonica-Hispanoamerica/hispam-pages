/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconFireFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.14 11.307a9.414 9.414 0 00-1.424-1.238c-4.11-2.989-2.347-7.16-2.272-7.336a.422.422 0 00-.058-.432.406.406 0 00-.412-.137c-1.843.437-3.737 1.395-5.33 2.698-5.27 4.308-5.28 11.05-2.967 13.991 1.04 1.322 2.524 2.255 4.157 2.726a4.016 4.016 0 01-.756-.58 3.393 3.393 0 01-.163-4.647c.207-.238.443-.457.7-.653 1.586-1.238.886-3.005.877-3.022a.616.616 0 01.104-.642.63.63 0 01.619-.196c.888.227 1.798.717 2.56 1.387 1.706 1.496 3.056 4.98 1.386 7.258a4.053 4.053 0 01-1.773 1.355c.225-.033.449-.061.673-.114.08-.012 2.01-.292 3.77-1.905a5.944 5.944 0 001.955-4.185c.056-1.597-.53-3.135-1.647-4.328z"
            />
        </svg>
    );
};

export default IconFireFilled;
