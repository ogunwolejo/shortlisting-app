/*** this component is for questions with children */
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const CustomizeQuestionComponent: FC<{ label:string;  header:string; children:ReactNode }> = ({ label, header, children }) => {
    const {
        palette: {
            grey
        }
    } = useTheme();
    return (
        <Box p={1}>
            <Typography mb={.5} variant="h5" fontFamily={"Poppins"} fontWeight={"500"} textTransform={"capitalize"} color={grey[100]}>{label}</Typography>

            <Box display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"} mb={1}>
                <Typography mb={2} variant="h3" fontFamily={"Poppins"} fontWeight={"600"} textTransform={"capitalize"} flexGrow={1}>{header}</Typography>
                <EditOutlinedIcon />
            </Box>
            {children}
        </Box>
    )
} 