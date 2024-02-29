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

const IconElectrocardiogramRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.007 2c-1.938 0-3.196.786-4.999 3.145C10.24 2.823 8.842 2 6.87 2 4.762 2 2.48 3.5 2.48 6.75c0 4.8 5.951 11.557 8.914 14.921l.1.114a.676.676 0 00.51.215.676.676 0 00.51-.215c.748-.86 2.821-3.287 2.821-3.323l2.517-3.287c2.482-3.465 3.676-6.213 3.676-8.43.008-3.1-2.274-4.745-4.52-4.745zm-.235 12.361l-2.482 3.25-.338.399c-.695.82-1.354 1.598-1.94 2.244-2.79-3.177-8.165-9.463-8.165-13.5 0-2.285 1.533-3.323 3.027-3.323 1.494 0 2.621.498 4.625 3.287a.688.688 0 001.088 0c1.973-2.82 2.962-3.287 4.425-3.287 1.533 0 3.166 1.038 3.166 3.323-.005 1.856-1.163 4.425-3.406 7.607zm-4.084-2.715h2.381c.375 0 .68.32.68.713 0 .393-.305.713-.68.713h-2.382v2.5c0 .394-.304.714-.679.714-.374 0-.68-.32-.68-.713v-2.501h-2.38c-.375 0-.68-.32-.68-.713 0-.393.305-.713.68-.713h2.382v-2.5c0-.394.305-.714.68-.714.374 0 .678.32.678.713v2.5z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.57 12.548h1.658c.342.002.616.28.619.619a.62.62 0 01-.614.619h-2.271c-.266.49-.552.983-.866 1.473-1.047 1.647-1.885 2.712-3.305 4.199l-.034.036c-.14.146-.627.647-1.042.947a3.1 3.1 0 01-1.16.53c-.12.027-.243.047-.366.053h-.014l-.053.001a1.44 1.44 0 01-.057.002h-.033c-.037 0-.073 0-.107-.003h-.017a2.318 2.318 0 01-.366-.053 3.08 3.08 0 01-1.16-.53c-.415-.302-.902-.801-1.042-.947C7.897 17.987 7.057 16.92 6 15.26a24.483 24.483 0 01-.916-1.557H2.768a.616.616 0 01-.613-.62.617.617 0 01.613-.621h1.71c-.516-1.123-.917-2.238-1.174-3.33-.51-2.163-.09-3.962 1.182-5.062.733-.64 1.74-1.023 2.823-1.079a5.43 5.43 0 01.286-.008c1.053 0 2.134.294 3.14.86.372.21.759.434 1.176.686a.276.276 0 00.272 0c.39-.235.782-.462 1.18-.686 1.005-.566 2.083-.86 3.137-.86.095 0 .193.003.288.008 1.084.056 2.087.44 2.824 1.079 1.266 1.1 1.686 2.899 1.176 5.061-.263 1.118-.68 2.263-1.218 3.418zM4.494 8.842c.277 1.182.742 2.389 1.345 3.619h.411l1.852-6.056a.596.596 0 01.619-.437.614.614 0 01.568.498l1.563 7.922.423-1.4a.61.61 0 01.586-.44h1.022l1.031-3.57a.614.614 0 01.572-.444.58.58 0 01.593.414l1.247 3.6H18.2c.633-1.258 1.11-2.502 1.392-3.706.233-.975.437-2.776-.781-3.832-.533-.462-1.275-.74-2.09-.782a5.98 5.98 0 00-.224-.005c-.843 0-1.723.243-2.544.703-.364.207-.74.425-1.148.672a1.498 1.498 0 01-1.502.011 36.82 36.82 0 00-1.168-.683c-.817-.46-1.697-.703-2.543-.703-.073 0-.143.002-.216.005h-.008c-.815.042-1.557.32-2.09.782-1.218 1.056-1.014 2.854-.784 3.832zm12.566 5.745c.127-.195.238-.39.349-.586l.121-.212h-1.636a.612.612 0 01-.576-.415l-.76-2.196-.627 2.165a.613.613 0 01-.588.446h-1.025l-1 3.316a.612.612 0 01-.586.44h-.03a.614.614 0 01-.572-.499L8.564 9.105l-1.272 4.16a.613.613 0 01-.585.437h-.199l.138.24c.123.215.246.43.383.645 1.008 1.585 1.812 2.605 3.182 4.042.238.25.61.608.877.8.21.155.448.267.703.326.059.011.117.022.176.025h.012l.044.003.037-.003h.067a.768.768 0 00.14-.02c.263-.058.51-.17.726-.33.257-.185.613-.527.854-.776l.017-.02.042-.042c1.358-1.42 2.154-2.431 3.154-4.005z"
                />
            </svg>
        );
    }
};

export default IconElectrocardiogramRegular;
