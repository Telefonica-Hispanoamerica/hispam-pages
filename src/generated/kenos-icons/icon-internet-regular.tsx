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

const IconInternetRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.543 19.338a11.059 11.059 0 001.751-.435c.796-.27 2.076-.797 3.488-1.733.748.52 1.5.976 2.234 1.344.508.254 1.076.5 1.632.667-1.366.918-2.981 1.464-4.672 1.464-1.594 0-3.119-.484-4.433-1.307zM4.787 7.339c.166.576.421 1.163.686 1.684.352.693.788 1.41 1.289 2.127-.069.106-.139.21-.206.316a15.534 15.534 0 00-1.558 3.128 10.87 10.87 0 00-.451 1.687C3.78 15 3.331 13.533 3.331 12c0-1.687.543-3.296 1.456-4.66zm11.545-2.723c-.728.116-1.389.32-1.716.43-1.244.422-3.668 1.466-5.928 3.726-.383.383-.738.795-1.079 1.22-1.422-2.151-1.828-3.744-1.614-4.059a.623.623 0 00.111-.155c1.568-1.485 3.652-2.423 5.87-2.423 1.562 0 3.059.466 4.356 1.26zm1.674 1.38c.338.398.03 2.513-1.29 4.905-.015.021-.031.041-.043.064-.13.241-.271.474-.413.705a15.037 15.037 0 01-2.074 2.6c-.435.434-.914.836-1.41 1.217a22.671 22.671 0 01-2.262-1.979 24.05 24.05 0 01-2.075-2.357c.383-.498.806-.993 1.284-1.47a14.37 14.37 0 011.874-1.575c.026-.018.048-.04.071-.061 3.014-2.081 5.935-2.395 6.338-2.049zM5.903 17.953c-.337-.398-.029-2.514 1.292-4.907.014-.02.029-.04.041-.062.124-.23.259-.452.394-.674a25.74 25.74 0 001.926 2.156 24.308 24.308 0 002.066 1.842c-2.784 1.716-5.342 1.968-5.719 1.645zm12.158.06l-.015.01c-.438.174-2.078-.37-4.099-1.703a15.178 15.178 0 003.402-3.83 15.514 15.514 0 001.562-3.134c.116-.326.329-.981.455-1.704.791 1.295 1.255 2.789 1.255 4.348 0 2.285-.995 4.43-2.56 6.012zm.995.898c1.786-1.826 2.92-4.289 2.92-6.911 0-5.327-4.673-10-10-10s-10 4.673-10 10 4.673 10 10 10c2.632 0 5.102-1.142 6.93-2.938.024-.02.052-.035.074-.058a.649.649 0 00.076-.093z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 2C6.479 2 2 6.479 2 12s4.474 10 10 10 10-4.479 10-10S17.521 2 12 2zM8.522 4.17C7.356 5.854 6.575 8.372 6.47 11.288H3.43c.261-3.186 2.3-5.868 5.092-7.116zm-2.057 8.543c.105 2.911.887 5.43 2.052 7.116-2.788-1.248-4.826-3.93-5.086-7.116h3.034zm4.822 7.715c-1.792-.686-3.236-3.88-3.391-7.715h3.391v7.715zm-3.391-9.141c.155-3.835 1.6-7.03 3.391-7.715v7.715H7.896zm12.674 0h-3.035c-.105-2.911-.887-5.43-2.052-7.116 2.788 1.248 4.826 3.93 5.087 7.116zm-4.466 0h-3.391V3.572c1.792.686 3.236 3.88 3.391 7.715zm-3.391 9.14v-7.714h3.391c-.155 3.835-1.6 7.03-3.391 7.715zm4.817-7.714h3.035c-.256 3.186-2.294 5.868-5.087 7.116 1.165-1.682 1.947-4.2 2.052-7.116z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.76 19.427c1.675 1.614 4.112 2.432 7.244 2.432 3.134 0 5.571-.818 7.243-2.434 1.737-1.673 2.62-4.174 2.62-7.429s-.88-5.756-2.62-7.431c-1.675-1.614-4.112-2.432-7.243-2.432-3.132 0-5.566.821-7.241 2.435-1.737 1.675-2.62 4.176-2.62 7.431s.88 5.753 2.617 7.428zM3.817 8.175C4.621 5.787 6.3 4.262 8.84 3.614c-.417.433-.8.957-1.143 1.567-.494.878-.88 1.893-1.15 2.994H3.818zm7.576 0H7.701c.239-.898.564-1.724.97-2.445.762-1.358 1.714-2.183 2.722-2.374v4.82zm0 1.12v5.987H7.578a15.174 15.174 0 01-.353-3.303c0-.925.078-1.828.23-2.683h3.938zm0 7.107v4.201c-1.008-.192-1.962-1.019-2.723-2.374a10.064 10.064 0 01-.787-1.827h3.51zm1.12 0h3.298a10.06 10.06 0 01-.788 1.827c-.709 1.262-1.58 2.064-2.51 2.324v-4.15zm3.603-1.12h-3.602V9.296h3.726c.15.855.229 1.758.229 2.683 0 1.153-.122 2.269-.353 3.303zm.865 1.12h2.993c-.927 2.184-2.684 3.549-5.257 4.081a7.49 7.49 0 001.281-1.705c.4-.71.73-1.512.983-2.376zm3.377-1.12H17.26c.216-1.046.33-2.16.33-3.303 0-.92-.074-1.82-.215-2.683h3.12c.17.819.254 1.72.254 2.703 0 1.221-.13 2.316-.391 3.283zm-13.924 0h-2.78c-.26-.967-.39-2.062-.39-3.283 0-.983.085-1.885.253-2.703H6.32a16.627 16.627 0 00-.214 2.683c0 1.143.113 2.257.329 3.303zm-2.396 1.12h2.675c.254.864.583 1.664.983 2.376.353.63.75 1.17 1.184 1.611-2.348-.589-3.966-1.921-4.842-3.987zm8.476-8.227v-4.77c.928.261 1.8 1.063 2.51 2.325.404.721.73 1.547.97 2.445h-3.48zm3.484-2.994a7.451 7.451 0 00-1.235-1.662c2.77.586 4.586 2.144 5.432 4.656h-3.048c-.269-1.1-.656-2.115-1.149-2.994z"
                />
            </svg>
        );
    }
};

export default IconInternetRegular;
