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

const IconConfigureDeviceRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.244 8.206h-.252a3.167 3.167 0 00-.32-.713l.178-.179a.705.705 0 00.216-.498.705.705 0 00-.216-.499l-1.04-1.07a.675.675 0 00-.5-.215.676.676 0 00-.499.215l-.179.179a4.307 4.307 0 00-.715-.284v-.284a.715.715 0 00-.714-.713h-.252l-.18-.357A3.485 3.485 0 0012.73 2H6.534C4.636 2 3.06 3.573 3.06 5.467v13.066A3.474 3.474 0 006.534 22h6.3a3.474 3.474 0 003.474-3.467v-3.325c.142-.036.252-.105.357-.178a.705.705 0 00.216-.499v-.251c.252-.073.467-.178.715-.32l.178.178a.698.698 0 001.004 0l1.072-1.07c.284-.284.284-.714 0-1.038l-.178-.179c.105-.215.215-.466.284-.713h.284c.394 0 .715-.32.715-.714V8.961c.004-.435-.317-.755-.71-.755zm-9.275-.892l.18.179a4.287 4.287 0 00-.285.713h-.289a.715.715 0 00-.715.714v1.463c0 .394.321.714.715.714h.252c.074.251.179.466.321.713l-.179.179a.673.673 0 00-.215.498c0 .142.037.32.215.499l1.073 1.07a.742.742 0 001.04 0l.179-.179c.215.106.467.215.715.284v.32c0 .393.32.714.714.714h.18v2.858H4.49V5.92h6.837l-.358.356a.673.673 0 00-.215.499.76.76 0 00.215.54zm1.76-3.896c.646 0 1.219.283 1.613.786-.252.106-.394.357-.394.645H4.6a2.04 2.04 0 011.934-1.431h6.195zm.106 17.15H6.534c-.93 0-1.682-.608-1.934-1.426h10.205c-.289.818-1.077 1.427-1.97 1.427zm6.3-10.505l-.105.43c-.105.43-.252.855-.5 1.18l-.215.357.536.498-.572.572-.5-.499-.362.215c-.43.252-.788.43-1.182.499l-.431.073v.75h-.788v-.75l-.431-.105c-.43-.105-.825-.252-1.182-.499l-.358-.215-.5.499-.572-.572.5-.498-.216-.357c-.252-.43-.43-.787-.5-1.18l-.068-.434h-.752V9.24h.752l.105-.43c.106-.43.252-.823.5-1.18l.215-.357-.5-.498.573-.572.5.499.357-.215c.431-.252.788-.43 1.183-.499l.43-.073V5.2h.789v.755l.43.105c.431.105.825.252 1.183.499l.357.215.5-.535.572.571-.5.499.216.357c.252.43.431.786.5 1.18l.073.43h.715v.786h-.752zm-4.76-2.895c.998-.425 2.144-.215 2.9.576.751.782.967 1.962.573 2.964-.431 1.002-1.398 1.678-2.47 1.678-1.467 0-2.649-1.216-2.649-2.716a2.73 2.73 0 011.645-2.502zm1.035 4.148c.641 0 1.214-.393 1.466-1.001.252-.645.11-1.359-.357-1.82-.468-.463-1.146-.609-1.719-.357-.573.251-.967.86-.967 1.536 0 .892.715 1.642 1.577 1.642z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.414 10.208c0-1.107-.636-1.743-1.743-1.743-1.108 0-1.743.636-1.743 1.743 0 1.107.635 1.743 1.743 1.743 1.107 0 1.743-.636 1.743-1.743zm-2.63 0c0-.629.258-.886.887-.886s.885.257.885.886-.256.886-.885.886c-.63 0-.886-.257-.886-.886zm8.756 8.043a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                />
                <path
                    fill={fillColor}
                    d="M18.415 1.75h-8.49a2.864 2.864 0 00-2.862 2.861v.673a.791.791 0 00-.693.778v.744l-.074.023a2.464 2.464 0 00-.127.04l-.51-.51a.796.796 0 00-1.13 0l-.708.706a.799.799 0 000 1.131l.511.513a4.187 4.187 0 00-.062.2h-.745a.8.8 0 00-.8.8v1a.8.8 0 00.8.8h.696c.02.083.041.165.065.245l-.465.466a.797.797 0 000 1.13l.707.707a.794.794 0 001.13 0l.365-.363c.111.046.227.084.347.12v.54a.79.79 0 00.693.778v4.257a2.864 2.864 0 002.861 2.861h8.491a2.865 2.865 0 002.862-2.86V4.61a2.865 2.865 0 00-2.862-2.86zM5.968 12.618l-.875.874-.707-.707.874-.874c-.196-.325-.317-.729-.369-1.203H3.525v-1h1.366c.052-.474.173-.878.37-1.203l-.875-.874.707-.707.875.875c.332-.202.737-.322 1.202-.372V6.062h1v1.365c.465.05.87.17 1.203.372l.874-.875.707.707-.874.874c.197.325.318.73.37 1.203h1.366v1H10.45c-.05.474-.172.878-.369 1.203l.874.874-.707.707-.874-.874c-.333.2-.738.321-1.203.372v1.363h-1V12.99c-.465-.05-.87-.172-1.202-.372zm5.552-.398l-.242-.244c.054-.149.102-.303.14-.468h.398a.799.799 0 00.8-.8v-1a.8.8 0 00-.8-.8h-.5a3.792 3.792 0 00-.13-.377l.334-.335a.8.8 0 000-1.13l-.707-.708a.8.8 0 00-1.13 0l-.438.437a3.252 3.252 0 00-.275-.075v-.658a.784.784 0 00-.407-.683v-.768c0-.75.61-1.36 1.361-1.36h8.491c.751 0 1.362.61 1.362 1.36V19.39c0 .75-.61 1.361-1.362 1.361h-8.49a1.362 1.362 0 01-1.362-1.36v-4.352a.79.79 0 00.407-.685v-.473c.144-.033.283-.072.416-.118l.296.295a.794.794 0 001.131 0l.707-.707a.8.8 0 000-1.13z"
                />
            </svg>
        );
    }
};

export default IconConfigureDeviceRegular;
