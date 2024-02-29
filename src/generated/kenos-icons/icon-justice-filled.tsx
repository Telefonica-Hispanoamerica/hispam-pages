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

const IconJusticeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M13.43 9.345c.035 2.366 1.926 4.292 4.285 4.292 2.354 0 4.249-2 4.285-4.365 0-.037 0-.22-.108-.362l-3.574-6.548c-.108-.22-.252-.362-.607-.362H6.285c-.355 0-.5.147-.607.362l-3.57 6.544C2 9.052 2 9.236 2 9.268c.036 2.37 1.927 4.365 4.285 4.365 2.359 0 4.25-1.93 4.286-4.292 0 0 0-.183-.108-.435L7.505 3.454h3.785v17.088H5.574a.724.724 0 00-.716.73c0 .398.324.728.716.728h12.852c.396 0 .716-.33.716-.729a.727.727 0 00-.716-.729h-5.712V3.454h3.785l-2.966 5.452c-.104.256-.104.44-.104.44zm-9.495-.802l2.354-4.365 2.355 4.365h-4.71zm16.13.004h-4.709l2.355-4.365 2.354 4.365z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.837 14.051c.005.018.01.034.01.052 0 .918-.256 1.641-.757 2.15-.429.432-1.006.676-1.717.726a64.993 64.993 0 01-2.012.006c-.75-.037-1.355-.28-1.803-.728-.493-.496-.745-1.2-.76-2.082-.002-.005-.002-.01-.002-.016l-.002-.03-.001-.024c0-.023.005-.043.01-.064l.01-.037c.002-.013.002-.027.002-.04a.21.21 0 01.006-.055l2.224-7.367c-.916-.002-2.185-.002-3.258-.002v11.935h1.446c.792 0 1.425.235 1.882.698.476.479.717 1.157.717 2.02a.632.632 0 01-.619.643.113.113 0 01-.034-.006.153.153 0 00-.022-.005l-.02.005c-.012.003-.023.007-.033.007H6.914a.095.095 0 01-.031-.006.157.157 0 00-.023-.006l-.02.005c-.011.003-.023.007-.033.007a.632.632 0 01-.62-.645c0-.86.242-1.54.715-2.02.457-.462 1.087-.697 1.88-.697h1.445V6.54c-1.073.002-2.342.002-3.255.002l2.221 7.367c.007.02.008.04.008.058a.15.15 0 00.004.037l.008.037a.22.22 0 01.011.064l-.001.025-.002.029c-.002.005-.002.01-.002.016-.014.883-.266 1.586-.76 2.082-.448.448-1.056.691-1.806.728a64.991 64.991 0 01-2.011-.006c-.712-.05-1.289-.294-1.717-.725-.505-.507-.762-1.23-.762-2.149v-.002c0-.016.004-.031.008-.047a.224.224 0 00.008-.037v-.003c.006-.055.012-.113.034-.165l2.952-7.169a1.108 1.108 0 00-.35.219.603.603 0 01-.874-.02.667.667 0 01.02-.913c.437-.437 1.034-.678 1.767-.714.06-.006 3.334-.006 5.236-.006a1.347 1.347 0 01-.208-.165c-.285-.286-.428-.709-.428-1.255 0-.552.146-.975.428-1.26.272-.278.664-.418 1.171-.418h.146v.003c.003-.003.008-.003.014-.003.504 0 .9.14 1.17.418.284.285.427.708.427 1.26 0 .546-.143.97-.426 1.255a1.45 1.45 0 01-.207.165c1.899 0 5.173.003 5.232.006.737.036 1.33.277 1.768.714a.67.67 0 01.016.913.596.596 0 01-.871.02 1.122 1.122 0 00-.353-.219l2.953 7.168a.547.547 0 01.029.132l.004.037a.408.408 0 00.008.032zm-14.078-.593L6.051 7.792l-2.334 5.666H7.76zm10.196-5.666l-1.708 5.666h4.042l-2.334-5.666z"
                />
            </svg>
        );
    }
};

export default IconJusticeFilled;