/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xsm: '350px',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#ff0000',

                    secondary: '#F000B8',

                    accent: '#37CDBE',

                    neutral: '#666',

                    'base-100': '#FFFFFF',

                    info: '#3b82f6',

                    success: '#36D399',

                    warning: '#FBBD23',

                    error: '#e60000',

                    'joy-kk': '#047857',
                },
                dark: {
                    primary: '#ff0000',

                    secondary: '#8b5cf6',

                    accent: '#f59e0b',

                    neutral: '#f3f4f6',

                    'base-100': '#111827',

                    info: '#3b82f6',

                    success: '#fb7185',

                    warning: '#be123c',

                    error: '#e60000',

                    'base-200': '#047857',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
