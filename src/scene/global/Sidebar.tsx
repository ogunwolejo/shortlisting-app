import { Box, useTheme } from "@mui/material";
import { useEffect, FC } from "react";
import { Sidebar } from 'react-pro-sidebar'
import { SideBarMenuItem } from "../../component/SideBarMenuItem";


const SideBar: FC = () => {
    const { palette: { background } } = useTheme();
    return (
        <Sidebar defaultCollapsed style={{ boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.05)", background: background.default}} >
            <SideBarMenuItem />
            <SideBarMenuItem />
        </Sidebar>
    )
}


export default SideBar