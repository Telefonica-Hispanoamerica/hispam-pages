/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconLoudspeakerLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.247 18.559a.628.628 0 01-.19-.028l-6.041-1.827a.539.539 0 01-.018.076l-.241.765a.55.55 0 01-.275.327.539.539 0 01-.428.042l-2.325-.728a.561.561 0 01-.367-.703l.24-.765a.56.56 0 01.016-.042l-3.88-1.174v.502a.276.276 0 01-.278.277.276.276 0 01-.277-.277V8.996a.277.277 0 11.554 0v.499l13.32-4.029a.663.663 0 01.588.104.744.744 0 01.294.596v11.659a.754.754 0 01-.294.6.667.667 0 01-.398.134zm0-12.566c-.01 0-.017.002-.025.004l-.006.001L2.88 10.032c-.062.02-.106.09-.106.17v3.595c0 .08.044.151.106.17l13.336 4.034c.034.011.064.003.095-.02a.186.186 0 00.07-.15V6.168a.183.183 0 00-.07-.151.104.104 0 00-.064-.025zm-9.35 10.655l2.325.729.24-.765-2.324-.728-.241.764zm11.947-8.465a.279.279 0 01-.199-.476l1.963-1.964a.279.279 0 11.395.395L19.04 8.102a.28.28 0 01-.196.081zm2.686 3.827h-2.78a.281.281 0 01-.28-.28.28.28 0 01.28-.28h2.779a.28.28 0 01.28.28.28.28 0 01-.28.28zm-.93 5.65a.28.28 0 00.395 0 .279.279 0 000-.395L19.03 15.3a.279.279 0 10-.395.395l1.964 1.963z"
            />
        </svg>
    );
};

export default IconLoudspeakerLight;
