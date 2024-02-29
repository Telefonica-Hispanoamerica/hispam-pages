/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconBlogLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M5.705 7.018h9.86a.28.28 0 00.28-.28.28.28 0 00-.28-.28h-9.86a.28.28 0 00-.28.28c0 .154.126.28.28.28zm0 3.507h9.86a.28.28 0 00.28-.28.28.28 0 00-.28-.28h-9.86a.28.28 0 00-.28.28c0 .154.126.28.28.28z"
            />
            <path
                fill={fillColor}
                d="M15.565 21.808h-9.86c-1.168 0-2.07-.33-2.69-.983-.582-.616-.879-1.485-.879-2.583V5.752c.003-1.095.3-1.964.883-2.583.616-.652 1.52-.983 2.689-.983h9.86c1.168 0 2.07.33 2.689.983.582.617.88 1.485.88 2.583v4.603a1.58 1.58 0 011.134-.362 1.707 1.707 0 011.585 1.703c0 .434-.176.835-.504 1.16-.137.134-1.102.996-2.216 1.986v3.4c0 1.098-.294 1.967-.88 2.583-.618.653-1.523.983-2.691.983zm3.011-6.468c-1.113.988-2.26 2.004-2.816 2.496l-.335.297a.264.264 0 01-.098.056l-2.958.975a.337.337 0 01-.09.017.28.28 0 01-.266-.37l.428-1.275H5.705a.281.281 0 01-.28-.28.28.28 0 01.28-.28h6.924l.376-1.12a.257.257 0 01.08-.12c.542-.479 1.225-1.081 1.932-1.707H5.705a.281.281 0 01-.28-.28.28.28 0 01.28-.28h9.91c.011 0 .022 0 .033.002a563.933 563.933 0 002.928-2.604V5.752c0-1.372-.521-3.006-3.006-3.006H5.71c-2.484 0-3.005 1.636-3.005 3.006v12.49c0 1.373.52 3.006 3.005 3.006h9.86c2.485 0 3.006-1.636 3.006-3.006V15.34zm-5.064.765l-.79 2.353 2.372-.784c1.941-1.717 5.603-4.964 5.863-5.219.224-.221.339-.476.339-.762a1.17 1.17 0 00-.336-.81 1.18 1.18 0 00-.731-.333c-.219-.016-.54.028-.846.334-.32.322-5.25 4.675-5.871 5.221z"
            />
        </svg>
    );
};

export default IconBlogLight;
