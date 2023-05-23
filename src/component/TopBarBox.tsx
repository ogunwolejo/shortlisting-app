import { Box, Divider, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { useMatch } from "react-router-dom";
import '../styles/TopBarBox.css'

const TopBarBox: FC<{ content: string; to:string }> = ({ content, to }) => {
    const matchRoute = useMatch(to);
    const isPath:boolean = matchRoute?.pattern.path === to ? true : false;
    const {
        palette: {
            secondary
        }
    } = useTheme();
    
    return (
        <Box p={3} bgcolor={isPath?secondary.main : "#FFF"} display={"flex"} justifyContent={"center"} alignItems={"center"} className={isPath ? "container-box" : ""}>
            <Typography variant="h3" fontFamily={"Inter"} flexWrap={"wrap"}>{content}</Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
        </Box>
    )
}

export {TopBarBox};