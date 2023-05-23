import { PaletteColorOptions, ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {

    interface palette {
        primary:PaletteColorOptions,
        secondary:PaletteColorOptions,
        error:PaletteColorOptions,
        info:PaletteColorOptions,
        grey:PaletteColorOptions,
        background:PaletteColorOptions,
        text:PaletteColorOptions
    }


    interface PaletteOptions {
        primary:PaletteColorOptions;
        secondary:PaletteColorOptions;
        info:PaletteColorOptions;
        error:PaletteColorOptions;
        grey:PaletteColorOptions;
        background:PaletteColorOptions;
        text:PaletteColorOptions;
    }
}