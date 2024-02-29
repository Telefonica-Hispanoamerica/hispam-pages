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

const IconPinRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.2 5.038l-.439.261a.576.576 0 00-.203.77.537.537 0 00.738.209l.452-.266v.527c0 .309.24.556.54.556.3 0 .54-.247.54-.556v-.527l.451.266a.538.538 0 00.738-.21.568.568 0 00-.203-.76l-.438-.26.438-.262a.564.564 0 00.203-.76.53.53 0 00-.738-.209l-.452.266v-.527a.546.546 0 00-.54-.556.546.546 0 00-.539.556v.518l-.452-.266a.535.535 0 00-.738.209.568.568 0 00.203.76l.438.261zm2.767 4.532c.156-.043.313-.076.484-.076.996 0 1.803.831 1.785 1.853v4.456c0 .27-.06.67-.222.979l-2.029 3.833a.713.713 0 01-.978.295.757.757 0 01-.286-1.007l2.03-3.834a.855.855 0 00.046-.266v-4.456a.366.366 0 00-.36-.37.366.366 0 00-.36.37v1.482a.732.732 0 01-.72.741.732.732 0 01-.719-.741v-2.594a.366.366 0 00-.36-.37.366.366 0 00-.36.37v1.482a.731.731 0 01-.719.741.731.731 0 01-.72-.74V9.864a.366.366 0 00-.359-.37.366.366 0 00-.36.37v1.852a.731.731 0 01-.72.741.731.731 0 01-.719-.74V5.778a.366.366 0 00-.36-.37.366.366 0 00-.359.37v9.283a.732.732 0 01-.72.74.732.732 0 01-.719-.74v-2.594a.366.366 0 00-.36-.37.366.366 0 00-.36.37v3.71a.75.75 0 00.051.252l2.007 3.449a.755.755 0 01-.25 1.016.713.713 0 01-.987-.256L2.259 17.19A2.097 2.097 0 012 16.173v-3.71c0-1.026.812-1.857 1.803-1.857.125 0 .245.014.36.038V5.779c0-1.026.807-1.857 1.803-1.857.997 0 1.804.836 1.804 1.857v2.266a1.76 1.76 0 011.674.56c.253-.142.535-.227.844-.227.765 0 1.416.498 1.679 1.192zm5.096-5.549a.535.535 0 00-.738-.209l-.452.266v-.522a.546.546 0 00-.54-.556c-.3 0-.54.247-.54.556v.527l-.451-.266a.53.53 0 00-.738.21.564.564 0 00.203.76l.438.26-.438.262a.568.568 0 00-.203.76.537.537 0 00.738.209l.452-.266v.527c0 .309.24.556.54.556.3 0 .539-.247.539-.556v-.527l.452.266a.538.538 0 00.738-.21.564.564 0 00-.203-.76l-.438-.26.438-.262a.572.572 0 00.203-.765zm4.225 1.017l.438.261c.262.152.35.49.203.77a.537.537 0 01-.738.209l-.452-.266v.527c0 .309-.24.556-.54.556-.3 0-.54-.247-.54-.556v-.527l-.451.266a.538.538 0 01-.738-.21.568.568 0 01.203-.76l.438-.26-.439-.262a.564.564 0 01-.202-.76.53.53 0 01.738-.209l.452.266v-.527c0-.309.24-.556.54-.556.299 0 .539.247.539.556v.518l.452-.266a.535.535 0 01.738.209.568.568 0 01-.203.76l-.438.261z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.857 2.473l5.662 5.69c.21.21.322.481.324.77a.995.995 0 01-.29.708c-.763.768-1.586 1.222-2.463 1.37l-2.532 2.552c.347 2.025-.376 3.952-2.143 5.734a1.33 1.33 0 01-.947.412 1.2 1.2 0 01-.86-.359L9.09 15.804 3.222 21.66a.626.626 0 01-.886-.003.634.634 0 01.003-.89l5.866-5.855-3.443-3.468a1.24 1.24 0 01-.361-.876c0-.334.126-.645.361-.88l.031-.034c2.19-2.204 4.263-2.448 5.72-2.196l2.53-2.549c.137-.876.58-1.694 1.316-2.437a1.041 1.041 0 011.498 0zm2.496 7.499a.62.62 0 01.376-.182c.627-.065 1.207-.353 1.77-.877L15.112 3.5c-.52.577-.798 1.16-.857 1.764a.623.623 0 01-.18.384l-2.918 2.938a.61.61 0 01-.585.168c-1.673-.397-3.32.202-4.894 1.788l-.028.03 3.84 3.863.02.013c.01.005.02.01.028.018a.112.112 0 01.018.027.136.136 0 00.013.02l3.921 3.944c1.586-1.607 2.168-3.257 1.78-4.96a.627.627 0 01.164-.586l2.92-2.938z"
                />
            </svg>
        );
    }
};

export default IconPinRegular;
