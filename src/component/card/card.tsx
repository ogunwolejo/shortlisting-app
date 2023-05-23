import { Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography, useTheme } from "@mui/material";
import { FC, Fragment, ReactNode, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "../../styles/card.css";
import CreateQuestion from "../CreateQuestion";

const CardComponent: FC<{ cardTitle: string, children: ReactNode; }> = ({ cardTitle, children }) => {
    const {
        palette: {
            primary,
            background,
            text
        }
    } = useTheme();

    const [createNewQuestion, setCreateNewQuestion] = useState<boolean>(false);

    const addQuestionHandler = () => {
        setCreateNewQuestion(true);
    }

    const dismissQuestionHandler = () => setCreateNewQuestion(false);

    

    return (
        <Fragment>
            <Card sx={{ background: background.default, boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3) !important", borderRadius: "20px" }} className="card-width">
                <CardHeader sx={{ background: primary.main }} title={cardTitle}
                    titleTypographyProps={{
                        color: text.primary,
                        variant: "h1",
                        fontFamily: "Poppins",
                        fontWeight: "600"
                    }}
                />

                <CardContent>
                    {children}
                    <Box my={2}>
                        {createNewQuestion && (<CreateQuestion closeQuestionHandler={() => dismissQuestionHandler()} wrapper={cardTitle}/>)}
                    </Box>
                </CardContent>


                <CardActions>
                    <IconButton disableFocusRipple={true} disableTouchRipple={true} disableRipple={true} onClick={addQuestionHandler}>
                        <AddIcon sx={{ color: text.primary }} fontWeight={"800"} className="add-icon" scale={2} />
                        <Typography variant="h4" fontFamily={"Poppins"} fontWeight={"600"} fontSize={15} color={text.primary}>Add a question</Typography>
                    </IconButton>
                </CardActions>
            </Card>

        </Fragment>
    )
}

export { CardComponent }