export const MAIN_BG_COLOR = 'bg-slate-900';

export const MAIN_TXT_COLOR = 'text-white';

export const BTN_CLS = 'border rounded px-2 py-1 w-full';

export const MAIN_BORDER_COLOR = 'border-slate-500';

export const ROUND_BORDER_COLOR = `rounded border ${MAIN_BORDER_COLOR}`;

export function cx(...inputs: any[]): string {
    const inp = Array.isArray(inputs[0]) ? inputs[0] : [...inputs];
    return inp.filter(Boolean).join(' ');
}

export const fontsTelefonica = `
@font-face {
    font-family: 'Telefonica-Regular';
    src: url('fonts/telefonica-regular-webfont.woff2') format('woff2'),
         url('fonts/telefonica-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Telefonica-Light';
    src: url('fonts/telefonica-light-webfont.woff2') format('woff2'),
         url('fonts/telefonica-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Telefonica-Bold';
    src: url('fonts/telefonica-bold-webfont.woff2') format('woff2'),
         url('fonts/telefonica-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`

export const palette = {
    movistarBlue: '#019DF4',
    movistarBlue10: '#E6F5FD',
    movistarBlue20: '#B3E1FB',
    movistarBlue30: '#80CEF9',
    movistarBlue40: '#4DBAF7',
    movistarBlue55: '#008EDD',
    movistarBlueDark: '#0B2739',

    movistarGreen: '#5CB615',
    movistarGreen10: '#EFF8E8',
    movistarGreen30: '#ADDA8A',
    movistarGreen40: '#8DCC5B',
    movistarGreen60: '#499110',
    movistarGreen70: '#407F0F',

    pepper: '#FF374A',
    pepper10: '#FFEBED',
    pepper20: '#FFC3C8',
    pepper40: '#FF7380',
    pepper55: '#D73241',
    pepper70: '#B22634',

    egg: '#F28D15',
    egg10: '#FEF4E8',
    egg40: '#F6AF5B',
    egg80: '#6D3F09',

    pink: '#E63780',

    purple: '#A13EA1',
    purple10: '#F6ECF6',
    purple40: '#BD78BD',
    purple70: '#712B71',

    grey1: '#F6F6F6',
    grey2: '#EEEEEE',
    grey3: '#DDDDDD',
    grey4: '#999999',
    grey5: '#86888C',
    grey6: '#313235',
    white: '#FFFFFF',

    movistarProminentBlue: '#0B2739',
    movistarProminentBlueDark: '#081F2D',
    movistarProminentBlueLight20: '#CED3D7',
    movistarProminentBlueLight50: '#85939C',
    movistarProminentBlueLight70: '#546874',

    // specific for dark mode:
    darkModeBlack: '#061824',
    darkModeGrey: '#081F2E',

    darkModeGrey2: '#EAEBEE',
    darkModeGrey3: '#CED4D7',
    darkModeGrey4: '#85939C',
    darkModeGrey5: '#6D7D88',
    darkModeGrey6: '#3C5261',
} as const;