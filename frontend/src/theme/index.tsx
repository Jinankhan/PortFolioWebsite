import { type SxProps, createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';

declare module '@mui/material/styles' {
    interface TypeText {
        highEmphasis?: string;
        mediumEmphasis?: string;
        lowEmphasis?: string;
    }
    interface PaletteColor {
        alphaWhite500: string;
        alphaPurple500: string;
        alphaPurple400: string;
        alphaPurple600: string;
    }

    interface Palette {
        structuralColor: {
            backgroundElevation0: string;
            backgroundElevation1: string;
            backgroundElevation2: string;
            grey100: string;
            grey50: string;
        };

        borders: {
            highEmp: string;
            lowEmp: string;
        };

        icon: {
            highEmp: string;
            lowEmp: string;
        };

        accent: {
            pink: string;
            redOrange: string;
            aquaBlue: string;
        };
        backdrop: {
            main: string;
        };
    }

    interface PaletteOptions {
        structuralColor: {
            backgroundElevation0: string;
            backgroundElevation1: string;
            backgroundElevation2: string;
            grey100: string;
            grey50: string;
        };

        borders: {
            highEmp: string;
            lowEmp: string;
        };

        icon: {
            highEmp: string;
            lowEmp: string;
        };
        accent: {
            pink: string;
            redOrange: string;
            aquaBlue: string;
        };
        backdrop: {
            main: string;
        };
    }

    interface TypographyOptions {
        title?: SxProps;
        title2?: SxProps;
        logo?: SxProps;
        button1?: SxProps;
        button2?: SxProps;
    }

    interface TypographyVariantsOptions {
        title?: SxProps;
        title2?: SxProps;
        logo?: SxProps;
        button1?: SxProps;
        button2?: SxProps;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        title: true;
        title2: true;
        logo: true;
        button1: true;
        button2: true;
    }
}

declare module '@mui/material/styles' {
    interface PaletteColor {
        alphaWhite500: string;
        alphaPurple500: string;
        alphaPurple400: string;
        alphaPurple600: string;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface SimplePaletteColorOptions {
        alphaWhite500: string;
        alphaPurple500: string;
        alphaPurple400: string;
        alphaPurple600: string;
    }
}

const theme = createTheme({
    spacing: 4,
    palette: {
        primary: {
            main: '#6C5DD3',
            alphaPurple500: '#6C5DD3',
            alphaPurple400: '#B4A9FF',
            alphaPurple600: '#393552',
            alphaWhite500: '#E8E8E9'
        },

        backdrop: {
            main: '#100F1CB8'
        },

        borders: {
            highEmp: '#413F4D',
            lowEmp: '#28272B'
        },

        icon: {
            highEmp: '#D4D2DE',
            lowEmp: '#727080'
        },

        text: {
            highEmphasis: '#E8E7F0',
            mediumEmphasis: '#C9C8CC',
            lowEmphasis: '#A5A5A6'
        },

        structuralColor: {
            backgroundElevation0: '#19181C',
            backgroundElevation1: '#201F24',
            backgroundElevation2: '#2D2D30',
            grey100: '#262529',
            grey50: '#3A3A3D'
        },

        accent: {
            pink: '#E39AB2',
            redOrange: '#EC977D',
            aquaBlue: '#A0D7E7'
        }
    },

    typography: {
        h1: {
            fontSize: '28px',
            fontWeight: '600',
            lineHeight: '29.4px',
            fontFamily: 'Gilroy',
            letterSpacing: '-0.5%'
        },

        h2: {
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '27px',
            fontFamily: 'Gilroy'
        },

        h3: {
            fontSize: '18px',
            fontWeight: '500',
            fontStyle: 'normal',
            lineHeight: '150%',
            fontFamily: 'Gilroy'
        },
        title2: {
            fontSize: '70px',
            fontWeight: '800',
            fontFamily: 'Gilroy'
        },
        body1: {
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '22.4px',
            fontFamily: 'Gilroy'
        },

        body2: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '17.15px',
            fontFamily: 'Gilroy',
            letterSpacing: '1%'
        },

        caption: {
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '14.56px',
            fontFamily: 'Gilroy',
            letterSpacing: '2%'
        },

        title: {
            fontSize: '36px',
            fontWeight: '700',
            fontFamily: 'Gilroy',
            letterSpacing: '-1.5%'
        },

        logo: {
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '29.71px',
            fontFamily: 'Gilroy',
            letterSpacing: '-1.5%'
        },

        button1: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '19px',
            fontFamily: 'Gilroy',
            letterSpacing: '2%'
        },

        button2: {
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '14px',
            fontFamily: 'Gilroy',
            letterSpacing: '0.14px'
        }
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: () => ({
                    '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.structuralColor.grey100,
                        border: `${theme.spacing(0.25)} solid ${
                            theme.palette.borders.highEmp
                        }`,
                        borderRadius: theme.spacing(3)
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0
                    },
                    '&.MuiInputBase-input::placeholder': {
                        color: theme.palette.text.lowEmphasis
                    },
                    '& .MuiInputBase-input': {
                        padding: `${theme.spacing(4)} ${theme.spacing(3.75)}`,
                        paddingLeft: theme.spacing(3),
                        color: theme.palette.text.mediumEmphasis,
                        ...theme.typography.body1
                    },
                    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':
                        {
                            borderColor: 'transparent'
                        },
                    '.css-xca9on-MuiFormHelperText-root.Mui-error': {
                        color: theme.palette.text.lowEmphasis
                    },
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                        {
                            borderColor: 'transparent'
                        },
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                        {
                            borderColor: 'transparent'
                        },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                            borderColor: 'transparent'
                        },

                    '& .MuiOutlinedInput-root.Mui-focused': {
                        border: `${theme.spacing(0.25)} solid ${
                            theme.palette.primary.alphaPurple400
                        }`
                    }
                })
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: () => ({
                    height: theme.spacing(2),
                    borderRadius: theme.spacing(2),
                    '& .MuiSlider-rail': {
                        backgroundColor: theme.palette.structuralColor.grey50
                    },

                    '& .MuiSlider-thumb': {
                        borderRadius: theme.spacing(2),
                        width: theme.spacing(5.75),
                        height: theme.spacing(5.75),
                        border: `${theme.spacing(0.75)} solid ${
                            theme.palette.primary.alphaPurple400
                        }`
                    },

                    '& .MuiSlider-thumb:before': {
                        boxShadow: 'none'
                    }
                })
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: () => ({
                    background: theme.palette.borders.highEmp,
                    height: theme.spacing(0.25),
                    borderColor: 'transparent',
                    opacity: 0.3
                })
            }
        },

        MuiModal: {
            styleOverrides: {
                root: () => ({
                    '& > .MuiBackdrop-root': {
                        backdropFilter: `blur(${theme.spacing(2)})`,
                        background: theme.palette.backdrop.main
                    }
                })
            }
        },
        MuiTab: {
            styleOverrides: {
                root: () => ({
                    '&.MuiTab-root': {
                        borderRadius: theme.spacing(3),
                        background: theme.palette.structuralColor.grey100,
                        color: theme.palette.text.mediumEmphasis,
                        border: `${theme.spacing(0.25)} solid ${
                            theme.palette.borders.highEmp
                        }`,
                        fontFamily: 'Gilroy',
                        fontSize: theme.spacing(4),
                        fontWeight: 600,
                        lineHeight: theme.spacing(4.75),
                        textTransform: 'none',
                        fontStyle: 'normal',
                        width: theme.spacing(39.5)
                    },
                    '&.Mui-selected': {
                        background: 'white',
                        color: theme.palette.primary.alphaPurple400,
                        borderColor: theme.palette.primary.alphaPurple400
                    }
                })
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: () => ({
                    '& .MuiTabs-scroller': {
                        display: 'flex',
                        justifyContent: 'center'
                    },
                    '.MuiTabs-flexContainer': {
                        gap: theme.spacing(3),

                        width: 'fit-content',
                        padding: theme.spacing(2.5),
                        display: 'flex',
                        flexDirection: 'row',
                        '@media (max-width: 1250px)': {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)'
                        },
                        '@media (max-width: 700px)': {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)'
                        }
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'transparent'
                    }
                })
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                root: () => ({
                    background:
                        theme.palette.structuralColor.backgroundElevation1,
                    '& .MuiDataGrid-row.Mui-selected': {
                        backgroundColor: theme.palette.primary.alphaPurple600
                    },
                    '& .MuiDataGrid-overlay': {
                        backgroundColor: 'transparent',
                        color: 'transparent'
                    },
                    '&.MuiDataGrid-root': {
                        borderWidth: '0px'
                    },
                    '.MuiDataGrid-columnSeparator': {
                        display: 'none'
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        background: theme.palette.structuralColor.grey100,
                        borderRadius: '8px',
                        borderBottom: '0px'
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: '0px'
                    },
                    overflow: 'auto',
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
                        height: '8px'
                    },
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
                        background:
                            theme.palette.structuralColor.backgroundElevation2,
                        height: '15px',
                        borderRadius: '4px',
                        padding: '4px 3px'
                    },
                    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
                        backgroundColor: theme.palette.icon.lowEmp,
                        borderRadius: '20px',
                        height: '8px'
                    },
                    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus':
                        {
                            outline: 'none !important'
                        },
                    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within':
                        {
                            outline: 'none !important'
                        },
                    '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                        outline: 'none !important'
                    }
                })
            }
        },
        MuiButton: {
            styleOverrides: {
                root: () => ({
                    '&.MuiButton-contained': {
                        borderRadius: theme.spacing(3),
                        '&.Mui-disabled': {
                            color: theme.palette.primary.alphaWhite500,
                            backgroundColor: theme.palette.primary.main,
                            opacity: '56%'
                        }
                    }
                })
            }
        }
    }
});

export default theme;
