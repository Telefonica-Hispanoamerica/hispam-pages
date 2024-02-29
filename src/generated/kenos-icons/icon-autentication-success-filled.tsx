/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconAutenticationSuccessFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 5.33v-.027a.598.598 0 00-.235-.451.663.663 0 00-.504-.137c-1.67.257-2.55-.314-3.647-1.037l-.022-.014c-1.084-.702-2.309-1.496-4.412-1.504h-.009c-2.097 0-3.33.803-4.41 1.506l-.018.012c-1.11.723-1.987 1.294-3.639 1.037a.613.613 0 00-.748.615c0 .427-.006 4.873.277 7.858-1.49.577-2.319 1.888-2.319 4.011 0 2.975 1.62 4.359 4.4 4.356 1.524 0 2.704-.409 3.452-1.269a28.928 28.928 0 002.75 1.502.56.56 0 00.26.055.56.56 0 00.261-.055l.004-.002c.348-.165 7.463-3.524 8.094-7.127.471-2.679.466-8.801.465-9.329zm-1.221.64c-.017 1.722-.073 6.353-.448 8.49-.09.52-.39 1.058-.813 1.602-.03-.04-.056-.065-.08-.09-.92-.95-2.264-1.448-3.883-1.448h-4.768c-.103 0-.21 0-.308.009-.717-1.143-2.01-1.69-3.759-1.69a6.159 6.159 0 00-.88.056c-.21-2.33-.251-5.546-.26-6.921 1.717.081 2.798-.61 3.84-1.294l.016-.01c1.028-.672 2.004-1.31 3.735-1.31h.009c1.747.009 2.725.645 3.756 1.32 1.025.675 2.1 1.358 3.843 1.286zm-7.608-.264c1.236 0 2.202.322 2.868.961.695.661 1.048 1.641 1.048 2.91 0 1.27-.353 2.247-1.048 2.908-.666.63-1.633.952-2.868.952-1.235 0-2.199-.319-2.865-.955-.692-.658-1.042-1.636-1.042-2.905s.35-2.249 1.042-2.91c.666-.639 1.63-.96 2.865-.96zM7.864 15.751a.573.573 0 01.806 0 .558.558 0 01.006.79l-.006.006-2.428 2.4a.578.578 0 01-.807 0l-1.09-1.078a.557.557 0 01-.008-.787l.009-.009a.573.573 0 01.806 0l.686.678 2.026-2zm-1.306 4.6c-2.232 0-3.182-.939-3.182-3.152 0-2.202.95-3.151 3.182-3.151 2.238 0 3.19.947 3.19 3.151 0 2.21-.952 3.151-3.19 3.151z"
            />
        </svg>
    );
};

export default IconAutenticationSuccessFilled;
