import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import { FC } from "react";

export const SelectionContent: FC<{ content: string; checkBoxLabel: string; switchLabel: string; secondaryText?: string; checkBoxValue?:boolean; switchValue?:boolean; id?:string }> = ({ content, checkBoxLabel, switchLabel, secondaryText, id, checkBoxValue=false, switchValue=false }) => {
    return (
        <>
            <Box display={"flex"} justifyContent={"space-between"} width="100%" alignItems={"center"}>
                <Box p={1} display={"flex"} justifyContent={"flex-start"} alignItems={"center"} flexGrow={1}>
                    <Typography variant="h3" fontFamily={"Poppins"} fontWeight={"600"} textTransform={"capitalize"} >
                        {content}
                    </Typography>
                    {(secondaryText && secondaryText?.length > 0) && <Typography variant="h6" fontWeight={"400"} textTransform={"lowercase"} textOverflow={"ellipsis"}>{`(${secondaryText})`}</Typography>}
                </Box>

                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={1} mr={0}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="secondary" defaultChecked={checkBoxValue} />} label={<Typography variant="h5" fontFamily={"Poppins"} fontWeight={"400"}>{checkBoxLabel}</Typography>} />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch color="secondary" defaultChecked={switchValue}/>} label={<Typography variant="h5" fontFamily={"Noto Sans"} fontWeight={"400"}>{switchLabel}</Typography>} />
                    </FormGroup>
                </Box>
            </Box>
            <Divider></Divider>
        </>
    )
} 