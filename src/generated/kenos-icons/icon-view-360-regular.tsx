/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconView360Regular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.993 11.283c0-2.004-.822-3.22-2.182-3.22-1.36 0-2.182 1.216-2.182 3.22 0 2.003.823 3.22 2.182 3.22 1.324 0 2.182-1.252 2.182-3.22zm-2.182 2.146c-1.073 0-1.109-1.788-1.109-2.146 0-.644.107-2.147 1.11-2.147 1.037 0 1.108 1.646 1.108 2.147 0 1.002-.286 2.146-1.109 2.146zm-8.014-2.146a1.87 1.87 0 01-1.288 3.22c-1.287 0-1.824-.466-1.931-.573a.519.519 0 010-.751.519.519 0 01.75 0s.323.25 1.181.25c.43 0 .788-.357.788-.787a.794.794 0 00-.788-.787h-.93a.55.55 0 01-.536-.536.55.55 0 01.536-.537h.93c.43 0 .788-.358.788-.787a.794.794 0 00-.788-.787c-.858 0-1.18.25-1.18.286a.519.519 0 01-.751 0c-.215-.215-.215-.572 0-.751.107-.108.644-.573 1.931-.573a1.87 1.87 0 011.86 1.86c-.035.43-.25.895-.572 1.253zm3.005-2.04c.43-.178.966.036 1.145.144.25.143.573.035.716-.215.143-.25.036-.572-.215-.715-.107-.072-1.073-.573-2.039-.18-.608.251-1.038.788-1.252 1.575-.322 1.073-.143 2.468-.107 2.647.035 1.11.93 2.04 2.039 2.04s2.039-.93 2.039-2.076c0-1.144-.93-2.075-2.04-2.075-.357 0-.679.108-.965.25.036-.142.036-.321.107-.464.072-.537.286-.823.572-.93zm.25 2.147c.538 0 .967.465.967 1.002 0 .572-.43 1.002-.966 1.002-.537 0-.966-.466-.966-1.002 0-.573.43-1.002.966-1.002zm9.338 7.477l-3.9.573-.572-3.9c-.071-.393.215-.751.609-.823.393-.071.75.215.822.608l.25 1.682a8.356 8.356 0 001.682-5.009c-.035-4.65-3.792-8.407-8.443-8.407a8.398 8.398 0 00-8.407 8.407 8.398 8.398 0 008.407 8.408c1.18 0 2.326-.25 3.435-.716a.681.681 0 01.93.358.681.681 0 01-.358.93 9.603 9.603 0 01-4.007.859A9.833 9.833 0 012 11.998C2 6.56 6.4 2.16 11.838 2.16c5.438 0 9.839 4.4 9.839 9.838 0 2.04-.609 4.007-1.79 5.617l1.289-.179c.393-.071.751.215.823.608a.751.751 0 01-.609.823z"
            />
        </svg>
    );
};

export default IconView360Regular;
