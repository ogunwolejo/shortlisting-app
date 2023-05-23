import { Box, Divider, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const CustomizeQuestionContent: FC<{ label:string;  header:string }> = ({ label, header }) => {
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
                <EditOutlinedIcon  />
            </Box>
            <Divider></Divider>
        </Box>
    )
} 