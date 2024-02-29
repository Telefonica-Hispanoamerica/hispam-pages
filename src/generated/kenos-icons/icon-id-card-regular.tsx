/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconIdCardRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M3.586 19.38H20.41c.79 0 1.431-.67 1.434-1.49V6.103c0-.821-.641-1.488-1.431-1.488H3.586c-.79 0-1.431.667-1.431 1.488V17.89c0 .82.641 1.49 1.431 1.49zM3.362 6.103a.228.228 0 01.224-.233h16.827a.228.228 0 01.224.233V17.89a.228.228 0 01-.224.232H3.586a.228.228 0 01-.224-.232V6.103zm7.656 8.29H4.777a.614.614 0 01-.602-.627c0-.347.271-.627.602-.627h6.24c.334 0 .603.28.603.628a.616.616 0 01-.602.627zm-6.241-3.35h4.235a.62.62 0 00.605-.627.617.617 0 00-.605-.627H4.777a.617.617 0 00-.605.627c0 .348.272.628.605.628zm11.493-2.87c.569 0 1.014.157 1.322.465.32.319.482.795.482 1.411 0 .617-.163 1.09-.482 1.412-.308.308-.753.462-1.322.462-.569 0-1.014-.156-1.32-.462-.319-.32-.478-.793-.478-1.412 0-.616.16-1.09.479-1.409.308-.313.753-.467 1.319-.467zm-.591 1.246c-.14.14-.163.457-.163.63 0 .174.023.488.16.625.104.104.314.16.594.16.283 0 .496-.056.6-.16.14-.14.159-.45.159-.625 0-.173-.02-.487-.163-.627-.14-.14-.43-.163-.596-.163-.163 0-.454.02-.591.16zm1.692 3.322c.666 0 1.215.213 1.585.61.34.368.518.878.518 1.474v.625a.21.21 0 01-.204.213h-5.992a.205.205 0 01-.204-.21v-.628c0-.596.18-1.106.515-1.473.367-.398.916-.61 1.583-.61h2.199zm-2.2 1.09c-.262 0-.618.048-.828.277a.908.908 0 00-.208.468h4.27a.878.878 0 00-.208-.468c-.207-.23-.566-.277-.826-.277h-2.2z"
            />
        </svg>
    );
};

export default IconIdCardRegular;
