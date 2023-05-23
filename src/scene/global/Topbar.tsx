import { FC, useMemo } from "react";
import { Box,Grid, useTheme } from "@mui/material";
import { AppNavigation } from "../../interface/topbar.interface";
import { NavLink } from "react-router-dom";
import "./global.css"
import { TopBarBox } from "../../component/TopBarBox";

const TopBar: FC = () => {
    const appNavigation: Array<AppNavigation> = useMemo(() => ([
        {
            content: "xxxxxxxx",
            to: "/x",
            xs: 3,
        },
        {
            content: "Application Form",
            to: "/",
            xs: 6,
        },
        {
            content: "xxxxxxxx",
            to: "/xx",
            xs: 2
        }
    ]), []);

    const {
        palette: {
            background,
            text
        }
    } = useTheme();

    return (
        <Box sx={{ background: background.default }} p={0} boxShadow={" 0px 1px 18px rgba(0, 0, 0, 0.12)"}>
            <Grid container spacing={2}>
                {appNavigation.map((el: AppNavigation, index:number) => {
                    return (
                        <Grid item xs={el.xs} md={3} lg={3} key={index}>
                            <NavLink to={el.to} style={({isActive}) => ({color: isActive ? background.default : text.primary, backgroundColor: isActive ? 'red' : 'transparent'})} className={"navLinks"}>
                                <TopBarBox content={el.content} to={el.to} />
                            </NavLink>
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    )
}


export default TopBar;