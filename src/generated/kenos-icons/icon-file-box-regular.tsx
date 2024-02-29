/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconFileBoxRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.83 13.123a.074.074 0 00-.002.026l.005.04a.494.494 0 01.006.07v7.128c0 .805-.65 1.457-1.45 1.457H3.6a1.454 1.454 0 01-1.45-1.457V13.26c0-.036.004-.07.01-.105l.006-.05c0-.01 0-.02-.002-.03-.001-.015-.003-.03 0-.045l1.593-9.476c.03-.776.67-1.395 1.448-1.395l13.58.014c.753 0 1.381.566 1.53 1.375l1.515 9.55a.076.076 0 01-.002.026zM5.003 3.713l-1.358 8.092H9.78c.348 0 .628.283.628.63v.866c0 .82.67 1.49 1.493 1.49h.193c.827 0 1.496-.667 1.496-1.49v-.866c0-.347.28-.63.627-.63h6.14L19.08 3.757c-.036-.182-.162-.327-.294-.327l-13.58-.014a.194.194 0 00-.193.193.674.674 0 01-.009.103zm15.384 16.87a.2.2 0 00.2-.193l-.007-7.184a.195.195 0 00-.19-.138h-5.546v.238a2.754 2.754 0 01-2.75 2.751H11.9a2.753 2.753 0 01-2.748-2.75v-.239H3.607a.2.2 0 00-.196.19v7.13c0 .103.092.196.196.196h16.781z"
            />
        </svg>
    );
};

export default IconFileBoxRegular;
