/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconWorkflowRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.563 3.638H18.6v1.785l-.565-.496c-.227-.19-.604-.19-.792.04-.189.228-.189.607.038.797l1.889 1.673 1.888-1.673a.552.552 0 00.039-.798.543.543 0 00-.792-.039l-.565.496V2.5h-8.307v6.08H9.166v6.84h5.66V8.58h-2.264V3.638zm-.565 12.925l-1.889 1.673a.552.552 0 00-.039.798.543.543 0 00.793.039l.565-.497v1.786H5.39V15.42h2.266V8.58H2v6.84h2.265v6.08h8.303v-2.928l.565.496c.11.078.227.15.376.15.15 0 .3-.077.416-.19.188-.228.188-.607-.039-.797l-1.888-1.668zM16.34 8.58H22v6.84h-2.265v5.165c0 .302-.266.57-.565.57a.584.584 0 01-.565-.57V15.42H16.34V8.58zm1.506 5.322h2.642v-3.799h-2.642v3.8zM6.15 10.098v3.8H3.507v-3.8h2.642zm4.525 3.804v-3.799h2.642v3.8h-2.642z"
            />
        </svg>
    );
};

export default IconWorkflowRegular;
