/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconCareShieldRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.124 10.015c-.392 2.272-4.476 4.274-4.939 4.498a.596.596 0 01-.515 0c-.465-.22-4.544-2.223-4.933-4.498-.286-1.648-.283-5.401-.283-5.698v-.014c0-.187.087-.36.233-.479a.61.61 0 01.515-.112c.867.131 1.32-.17 1.952-.59l.009-.006c.639-.429 1.434-.961 2.759-.961h.006c1.322.003 2.117.533 2.755.958l.004.003.013.009c.63.418 1.088.724 1.981.582a.622.622 0 01.714.596c.006.163.014 4.028-.271 5.712zm-1.188-.21c.204-1.188.25-3.68.258-4.857-.98-.025-1.605-.44-2.168-.818-.605-.406-1.132-.757-2.093-.76h-.003c-.955 0-1.478.348-2.08.747l-.015.01c-.571.384-1.204.807-2.168.826.011 1.182.056 3.664.263 4.85.2 1.184 2.457 2.7 4 3.48 1.544-.78 3.802-2.299 4.006-3.478zm5.675 5.717c.011-.14.258-3.395.227-4.53-.02-.812-.476-1.305-1.325-1.352a1.396 1.396 0 00-1.37 1.106l-.305 1.493c-.574-.19-1.202.014-1.524.54l-.1.177-.002.002c-.216.384-.616 1.097-1.357 1.483-.11.047-.507.271-1.13 1.084a9.235 9.235 0 00-1.178 2.045l-.423 1.014a1.436 1.436 0 00-.524 1.106v.711c0 .799.639 1.443 1.428 1.443h3.457c.79 0 1.431-.647 1.431-1.443v-.711c0-.283-.087-.549-.227-.77l1.48-1.266a6.87 6.87 0 01.406-.321l.016-.013c.244-.185.465-.442.656-.762.204-.344.325-.686.364-1.036zm-1.199-.118a1.296 1.296 0 01-.201.527 1.42 1.42 0 01-.345.415 9.82 9.82 0 00-.479.378l-1.793 1.532a.355.355 0 01-.047-.006.487.487 0 00-.065-.005H14.57l.087-.208a7.915 7.915 0 011.02-1.773c.45-.585.703-.736.703-.736 1.088-.563 1.623-1.517 1.881-1.977v-.001l.08-.135c.044-.075.162-.008.162-.008.056.037.092.18.059.235v.003c0 .003-.003.003-.003.003l-1.538 2.605a.613.613 0 00.518.922.599.599 0 00.518-.3l1.538-2.602v-.003l.003-.003a1.33 1.33 0 00.176-.675.213.213 0 01.014-.03.155.155 0 00.017-.043l.519-2.527c.016-.08.092-.131.193-.134.043 0 .07.005.086.007l.012.002a.544.544 0 01.02.156c.025.987-.183 3.853-.217 4.317l-.005.064zm-2.7 4.995c0 .126-.1.227-.224.227H14.03a.225.225 0 01-.224-.225v-.711c0-.123.101-.224.224-.224h3.457c.123 0 .224.1.224.224v.709zm-7.521 0v-.709a.224.224 0 00-.221-.224H6.513c-.123 0-.224.1-.224.224v.711c0 .124.1.225.224.225H9.97c.12 0 .22-.101.22-.227zm-3.793-2.14c.015-.002.03-.003.044-.006a.491.491 0 01.065-.006h2.914l-.087-.207a8.026 8.026 0 00-1.02-1.773c-.45-.585-.703-.737-.706-.737-1.087-.563-1.622-1.518-1.877-1.977l-.078-.138c-.045-.075-.162-.008-.162-.005-.056.034-.093.176-.06.232v.003l.004.003 1.537 2.605a.61.61 0 01-.515.922.6.6 0 01-.518-.3L4.4 14.27v-.003h-.003a1.372 1.372 0 01-.176-.675.2.2 0 00-.014-.03.158.158 0 01-.017-.043l-.518-2.527a.172.172 0 00-.16-.137.628.628 0 00-.14.02.16.16 0 01-.002.034 1.255 1.255 0 00-.01.114c-.027 1.073.222 4.37.225 4.404.017.134.084.313.199.51a1.4 1.4 0 00.347.414c.157.118.32.241.473.375l1.793 1.533zm4.048-.69l.426 1.015c.316.263.523.658.523 1.106v.711a1.44 1.44 0 01-1.428 1.443H6.51c-.79 0-1.428-.647-1.428-1.443v-.711c0-.286.084-.549.224-.77l-1.48-1.266a8.513 8.513 0 00-.38-.301l-.04-.03a2.663 2.663 0 01-.658-.765 2.55 2.55 0 01-.361-1.016c-.014-.16-.258-3.415-.23-4.552.02-.813.48-1.303 1.252-1.348.726.009 1.306.443 1.443 1.104l.308 1.493c.574-.19 1.199.014 1.521.538l.1.176.002.002c.216.384.616 1.097 1.38 1.494.084.04.482.263 1.104 1.073a9.114 9.114 0 011.179 2.048zm4.286-11.294a.597.597 0 00-.852 0l-2.863 2.883-1.045-1.059a.597.597 0 00-.851 0 .612.612 0 000 .86l1.473 1.487a.602.602 0 00.854 0l3.284-3.31a.612.612 0 000-.86z"
            />
        </svg>
    );
};

export default IconCareShieldRegular;
