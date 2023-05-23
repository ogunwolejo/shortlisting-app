import { createTheme, colors } from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: "#D0F7FA"
        },
        secondary: {
            main: "#00635B"
        },
        warning:{
            main:"#9C4DE2"
        },
        grey: {
            "100": "#979797",
            "200": "#666666",
            "300": "#CCCCCC",

        },
        error: {
            main: "#A80000"
        },
        info: {
            main: "#1D4ED8"
        },
        background: {
            paper: "#F6F8F9",
            default:"#FFFFFF",
        },
        text: {
            primary: "#000000",
            secondary: "#000000"
        },
        success:{
            main:"#21B592"
        }
    },

    typography: {
        fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
        fontSize: 11,
        h1: {
            fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
            fontSize: "25px",
            fontStyle: "normal",
            '@media (max-width:600px)': {
                fontSize: '12px',
            },
        },
        h2: {
            fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
            fontSize: 24,
            fontStyle: "normal",
            '@media (max-width:600px)': {
                fontSize: '10px',
            },
        },
        h3: {
            fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
            fontSize: 20,
            fontStyle: "normal",
            '@media (max-width:600px)': {
                fontSize: '9px',
            },
        },
        h4: {
            fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
            fontSize: 16,
            fontStyle: "normal",
            '@media (max-width:600px)': {
                fontSize: '7px',
            },
        },
        h5: {
            fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
            fontSize: 14,
            fontStyle: "normal",
            '@media (max-width:600px)': {
                fontSize: '6px',
            },
        },
        h6: {
            fontFamily: ["Poppins", "Inter", "Work Sans", "Noto Sans"].join(","),
            fontSize: 12,
            fontStyle: "normal",
            '@media (max-width:600px)': {
                fontSize: '7px',
            },
        }
    }
}) 