import { FC } from "react";
import { Box, Input, InputBase } from "@mui/material";

export const TextInput:FC<{ getInputhandler:any; type?:string}> = ({type = "text", getInputhandler}) => {

    return (
       <Box display="flex" justifyContent={"stretch"} alignItems={"flex-start"} borderRadius={"5px"} border={"1px solid #000"}>
         <InputBase maxRows={1}  sx={{flex:1, flexGrow:1, ml:1, p:1.2}} placeholder="Type here" type={type} onChange={getInputhandler}/>
       </Box>
    )
} 