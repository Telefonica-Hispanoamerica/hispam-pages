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

const IconOpticalFiberRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.383 6.342a1.623 1.623 0 00-1.451 2.328l-4.782 4.832-1.388-1.402 6.934-7.008c.211.102.445.162.692.162.888 0 1.612-.731 1.612-1.63a1.62 1.62 0 00-1.617-1.62 1.623 1.623 0 00-1.451 2.329l-6.93 7.003-1.387-1.403L15.4 5.097a1.6 1.6 0 00.692.161c.889 0 1.612-.73 1.612-1.629 0-.898-.724-1.629-1.612-1.629a1.623 1.623 0 00-1.452 2.328L9.854 9.165l-.146-.148a1.365 1.365 0 00-1.946 0L2 14.863 9.685 22l5.358-5.628a1.405 1.405 0 000-1.967l-.132-.135 4.785-4.837c.211.102.445.162.692.162.888 0 1.612-.73 1.612-1.629 0-.898-.728-1.624-1.617-1.624zm0-3.254a.54.54 0 01.536.541.54.54 0 01-.536.542.542.542 0 010-1.083zm-3.755.541a.54.54 0 01-.536.542.54.54 0 01-.536-.542.54.54 0 01.536-.541.54.54 0 01.536.541zM9.62 19.977l-5.556-5.16 4.672-4.74 5.253 5.313-4.37 4.587zM19.847 7.971c0-.296.243-.542.536-.542a.542.542 0 010 1.083.54.54 0 01-.535-.541z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.609 20.114a7.438 7.438 0 01-.838-.696c-1.736-1.675-2.616-4.17-2.616-7.417s.88-5.742 2.616-7.417c1.673-1.611 4.107-2.429 7.23-2.429s5.557.818 7.23 2.429c1.736 1.672 2.616 4.168 2.616 7.417 0 3.25-.88 5.742-2.616 7.417-1.673 1.61-4.107 2.429-7.23 2.429-2.47 0-4.509-.512-6.08-1.522a.564.564 0 01-.312-.211zm.418-1.087l2.683-2.648-.603-.61-.605-.611-2.668 2.63a6.262 6.262 0 001.193 1.239zm.962.627c1.326.712 3.004 1.072 5.012 1.072 2.824 0 4.994-.711 6.45-2.114 1.51-1.454 2.275-3.678 2.275-6.611s-.764-5.154-2.274-6.61C16.995 3.986 14.824 3.274 12 3.274s-4.994.712-6.451 2.115C4.04 6.844 3.275 9.068 3.275 12c0 1.906.323 3.51.963 4.8l2.875-2.836a.559.559 0 01.793.006l.193.196c.675-1.341 1.375-3.322 1.566-5.952a1.352 1.352 0 01-.457-.317c-.271-.283-.409-.655-.409-1.109 0-.454.138-.823.41-1.11a1.448 1.448 0 011.066-.436c.423 0 .793.151 1.068.437.274.286.409.658.409 1.11 0 .45-.138.823-.41 1.108a1.361 1.361 0 01-.56.356c-.15 2.129-.616 3.868-1.15 5.216l4.86-4.801a1.355 1.355 0 01-.116-.594c.011-.392.18-.75.505-1.07.324-.32.683-.485 1.075-.493.398-.011.768.14 1.067.437.3.297.457.666.446 1.064-.012.392-.18.75-.505 1.07-.324.32-.683.482-1.075.493a1.405 1.405 0 01-.605-.117l-4.768 4.705c1.33-.51 3.023-.952 5.079-1.098a1.39 1.39 0 01.355-.56c.283-.272.656-.409 1.11-.409.454 0 .826.14 1.109.412.283.272.437.644.437 1.067 0 .423-.151.793-.437 1.07-.286.277-.655.41-1.11.41-.453 0-.823-.14-1.109-.41a1.394 1.394 0 01-.316-.456c-2.639.19-4.622.896-5.966 1.574l.224.227a.559.559 0 01-.006.792L6.99 19.654zm9.656-6.062c.003.143.048.204.093.246.025.026.103.099.333.099.23 0 .308-.073.333-.098.045-.045.093-.11.093-.261 0-.151-.048-.216-.093-.26-.025-.026-.103-.099-.333-.099-.23 0-.308.073-.333.099-.045.044-.093.109-.093.257v.011c-.003.003-.003.006 0 .006zm-.781-5.132c.036 0 .148-.002.316-.17.16-.161.168-.26.17-.298l.001-.005c.003-.059-.011-.135-.112-.235-.1-.101-.185-.118-.25-.115-.036 0-.148.003-.316.17-.16.161-.168.26-.17.298v.005c-.004.056.008.132.109.233.109.106.187.12.252.117zM10.28 7.214c.149 0 .213-.048.258-.093.025-.025.098-.1.098-.333 0-.232-.073-.308-.098-.333-.045-.045-.11-.093-.26-.093-.152 0-.216.048-.261.093-.025.025-.098.1-.098.333s.073.308.098.333c.042.045.103.09.246.093h.017z"
                />
            </svg>
        );
    }
};

export default IconOpticalFiberRegular;