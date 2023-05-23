import { FC } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const SideBarMenuItem: FC = () => {
    return (
        <Menu style={{margin:"10px 5px 5px 10px"}}>
            <IconButton disableRipple={true}
                disableFocusRipple={true}
                disableTouchRipple={true}
                sx={{ backgroundColor: "transparent" }}
            >
                <MenuIcon fontSize={"large"} />
            </IconButton>
        </Menu>
    )
}

export { SideBarMenuItem };