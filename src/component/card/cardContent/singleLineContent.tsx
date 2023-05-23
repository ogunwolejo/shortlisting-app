import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

export const SingleLineContent:FC<{content:string}> = ({content}) => {
    return (
        <Box  p={1}>
            <Typography mb={2} variant="h3" fontFamily={"Poppins"} fontWeight={"600"} textTransform={"capitalize"}>{content}</Typography>
            <Divider></Divider>
        </Box>
    )
} 