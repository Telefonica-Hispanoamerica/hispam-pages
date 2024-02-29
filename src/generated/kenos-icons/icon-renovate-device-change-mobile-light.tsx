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

const IconRenovateDeviceChangeMobileLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.692 18.705a.378.378 0 00.304-.43.36.36 0 00-.41-.319l-2.153.324c1.372-1.773 2.12-3.966 2.12-6.28 0-5.512-4.286-10-9.56-10A9.18 9.18 0 006.89 3.546a.392.392 0 00-.111.522.354.354 0 00.499.116 8.501 8.501 0 014.72-1.43c4.872 0 8.84 4.15 8.84 9.246a9.434 9.434 0 01-2.088 5.961l-.347-2.502a.37.37 0 00-.41-.319.378.378 0 00-.305.43l.503 3.662 3.5-.527zM15.96 7.47c0-1.04-.808-1.89-1.806-1.89H9.823c-.992 0-1.805.846-1.805 1.89v9.053c0 1.038.808 1.889 1.805 1.889h4.333c.992 0 1.805-.846 1.805-1.89V7.47zm-.72 0v.376H8.746V7.47c0-.624.485-1.13 1.081-1.13h4.332c.596 0 1.08.506 1.08 1.13zm0 9.062c0 .624-.485 1.13-1.08 1.13H9.826c-.596 0-1.08-.506-1.08-1.13v-.376h6.493v.376zm-6.494-1.135V8.604h6.494v6.792H8.746zm8.66 4.908c0 .416-.323.754-.72.754-.398 0-.721-.338-.721-.754 0-.415.323-.753.72-.753.398 0 .72.333.72.753zm-2.536 1.237a.382.382 0 00.236-.473.359.359 0 00-.453-.247c-.859.28-1.75.425-2.66.425-4.872 0-8.84-4.15-8.84-9.246 0-2.213.74-4.304 2.102-5.971L5.6 8.531c.023.189.18.324.356.324.014 0 .032 0 .05-.005a.37.37 0 00.306-.425l-.504-3.662-3.5.527a.37.37 0 00-.305.425.362.362 0 00.406.319l2.152-.324C3.182 7.483 2.433 9.681 2.433 12c0 5.512 4.286 10 9.56 10 .984 0 1.949-.155 2.877-.459z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.33 18.27c0-.34.195-.497.498-.497.302 0 .498.157.498.496 0 .163-.044.283-.125.364-.087.09-.216.132-.373.132s-.286-.042-.373-.132c-.08-.08-.126-.201-.126-.364z"
                />
                <path
                    fill={fillColor}
                    d="M19.06 20.776h-6.467c-.877 0-1.56-.232-2.034-.686-.49-.474-.74-1.177-.74-2.087V5.992c0-.91.25-1.614.74-2.087.476-.454 1.16-.686 2.034-.686h6.467c.877 0 1.56.232 2.034.686.49.473.74 1.177.74 2.087V18c0 .91-.25 1.614-.74 2.087-.473.457-1.157.69-2.034.69zM12.593 3.78c-1.488 0-2.213.723-2.213 2.213V18c0 1.49.722 2.213 2.213 2.213h6.467c1.49 0 2.213-.723 2.213-2.213V5.992c0-1.49-.722-2.213-2.213-2.213h-6.467zM5.03 19.278c0-.202.117-.297.3-.297.181 0 .299.095.299.297 0 .098-.022.165-.076.218-.053.053-.128.079-.224.079a.319.319 0 01-.224-.079c-.047-.048-.075-.12-.075-.218z"
                />
                <path
                    fill={fillColor}
                    d="M3.7 20.748h3.484c.479 0 .857-.132 1.117-.386.275-.266.415-.653.415-1.152v-6.224c0-.498-.137-.885-.415-1.151-.263-.258-.641-.387-1.12-.387H3.696c-.479 0-.854.132-1.12.387-.275.266-.415.653-.415 1.151v6.224c0 .499.14.886.418 1.152.263.257.641.386 1.12.386zm0-8.74h3.484c.675 0 .977.303.977.978v6.224c0 .675-.302.978-.977.978H3.699c-.675 0-.978-.303-.978-.978v-6.224c0-.675.303-.977.978-.977zm3.388-4.411a.28.28 0 00.463.213c.084-.07.82-.703.944-.827.319-.316.316-.686-.006-1.008a22.297 22.297 0 00-.883-.787L7.55 5.14a.28.28 0 10-.365.426c.007.005.446.378.733.642h-.5c-.877 0-1.56.23-2.034.686-.49.473-.74 1.176-.74 2.087v1.098c0 .154.127.28.281.28a.28.28 0 00.28-.283V8.98c0-1.488.726-2.213 2.213-2.213h.479a51.58 51.58 0 01-.712.616.283.283 0 00-.098.213z"
                />
            </svg>
        );
    }
};

export default IconRenovateDeviceChangeMobileLight;
