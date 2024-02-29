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

const IconMillenialsRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.704 8.531A3.876 3.876 0 0019.816 5.8c0-.376-.052-.745-.152-1.088l1.824-.51a.729.729 0 00.488-.887c-.1-.385-.48-.615-.848-.51l-2.132.598C18.328 2.548 17.316 2 16.18 2c-2.004 0-3.632 1.703-3.632 3.8 0 1.1.448 2.091 1.168 2.786a4.996 4.996 0 00-.372.15.738.738 0 00-.364.95.682.682 0 00.908.38c.684-.304 1.516-.468 2.4-.468 2.508 0 4.324 1.297 4.324 3.084v6.059c0 .401.308.723.692.723.384 0 .692-.322.692-.723v-6.059c.004-1.929-1.292-3.469-3.292-4.15zM18.432 5.8c0 1.297-1.008 2.352-2.248 2.352-1.076 0-1.976-.795-2.196-1.85l4.34-1.217c.068.226.104.464.104.715zm-1.004-1.958l-3.256.912c.368-.774 1.132-1.305 2.012-1.305.46 0 .888.146 1.244.393zm-6.592 7.255a3.876 3.876 0 001.144-2.765c0-2.097-1.628-3.8-3.632-3.8-.436 0-.856.08-1.244.23-.028-1.158-.94-2.092-2.056-2.092-1.132 0-2.056.967-2.056 2.151v2.218H2l.476 1.037c.036.084.388.808 1.18 1.046.136.042.3.071.492.071.188 0 .404-.029.644-.108a3.838 3.838 0 001.064 2.008c-1.96.695-3.228 2.222-3.228 4.13v6c0 .401.308.724.692.724.384 0 .692-.323.692-.724v-6.004c0-1.063.612-1.754 1.12-2.143.788-.606 1.928-.941 3.2-.941 2.508 0 4.324 1.297 4.324 3.084v6.058c0 .402.308.724.692.724.384 0 .692-.322.692-.724v-6.058c0-1.9-1.256-3.423-3.204-4.122zm-.24-2.761c0 1.297-1.008 2.351-2.248 2.351a2.204 2.204 0 01-1.656-.761c.6-1.172 1.604-1.996 2.98-2.444l.696-.18c.148.314.228.661.228 1.034zM9.152 6.134C7.688 6.636 6.728 7.456 6.1 8.255c.036-1.263 1.032-2.28 2.248-2.28.284.004.556.058.804.159zm-4.772.979V4.816c0-.39.3-.703.672-.703.372 0 .672.314.672.703v.653c0 .07.012.142.028.209a3.849 3.849 0 00-.94 1.79.856.856 0 00-.112.06c-.12.079-.268.162-.416.196.1-.251.1-.49.096-.611z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.753 5.827a.64.64 0 00.054-.914C16.12 1.975 12.14 2.151 11.945 2.16h-.004c-4.328.047-6.644 2.49-6.74 2.594a.633.633 0 00.046.91.676.676 0 00.932-.045c.017-.02 2.017-2.129 5.804-2.17.037-.009 3.566-.166 5.84 2.324a.668.668 0 00.93.053zM12 10.742c.896 0 1.597.233 2.084.69.504.473.762 1.179.762 2.09 0 .912-.258 1.615-.762 2.089-.484.454-1.185.686-2.081.686-.9 0-1.597-.232-2.081-.686-.505-.474-.76-1.177-.76-2.09 0-.91.255-1.616.76-2.09.481-.459 1.179-.688 2.078-.688zm1.17 3.939c.236-.221.357-.61.357-1.16 0-.546-.118-.938-.359-1.162-.232-.222-.624-.33-1.168-.33-.543 0-.935.108-1.165.327-.238.224-.356.616-.356 1.165 0 .55.12.939.356 1.163.285.269.79.325 1.165.325s.882-.056 1.17-.328zm2.561 5.871c-.005-.375-.092-.877-.448-1.238-.415-.423-1.073-.51-1.552-.51H10.27c-.476 0-1.135.087-1.543.507-.356.361-.443.866-.449 1.241h7.454zm-2-3.036c1.053 0 1.919.31 2.502.904.534.544.817 1.297.817 2.182v.925a.319.319 0 01-.322.313H7.283a.317.317 0 01-.322-.313v-.925c0-.885.28-1.641.815-2.182.58-.594 1.443-.904 2.496-.904h3.46zM11.944 4.992c.118-.006 3.32-.115 5.367 2.123a.636.636 0 01-.053.91.67.67 0 01-.933-.05c-1.592-1.746-4.23-1.697-4.344-1.695h-.003c-2.684.028-4.289 1.712-4.303 1.729a.673.673 0 01-.933.045.633.633 0 01-.047-.908c.08-.087 1.989-2.12 5.249-2.154zm2.613 5.173a.67.67 0 00.933.05.636.636 0 00.05-.91c-1.309-1.432-3.323-1.421-3.556-1.42h-.02c-2.166.023-3.44 1.381-3.493 1.44a.635.635 0 00.044.908.679.679 0 00.93-.042l.003-.003c.067-.067.984-.995 2.55-1.014h.001c.066-.001 1.632-.02 2.558.991z"
                />
            </svg>
        );
    }
};

export default IconMillenialsRegular;
