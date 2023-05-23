import { Card, CardActions, CardContent, CardHeader, IconButton, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import "../../styles/card.css"

const CardWithoutAction: FC<{ cardTitle: string; children:ReactNode }> = ({ cardTitle, children}) => {
    const {
        palette: {
            primary,
            background,
            text
        }
    } = useTheme();
    return (
        <Card sx={{ background: background.default, boxShadow: "3px 3px 14px rgba(190, 190, 190, 0.3) !important", borderRadius: "20px"}} className="card-width">
            <CardHeader  sx={{ background: primary.main }} title={cardTitle} titleTypographyProps={{
                color: text.primary,
                variant: "h1",
                fontFamily: "Poppins",
                fontWeight:"600"
            }}
            />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export { CardWithoutAction }