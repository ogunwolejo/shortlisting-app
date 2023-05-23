import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, InputBase, Typography, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import { QuestionTemplate, QuestionType, QuestionType2 } from '../../interface/questionTemplate';


export const OptionInputContainer: FC<{ inputType?: string; questionType: QuestionType; MdataHandler:Function }> = ({ inputType = "text", questionType, MdataHandler }) => {
    const { palette: { text } } = useTheme();


    const questionMode = useMemo(() => {
        let questionMode: QuestionType2 = QuestionType2.MultipleChoice;

        switch (questionType) {
            case QuestionType.MultipleChoice:
                questionMode = QuestionType2.MultipleChoice
                break;
            case QuestionType.Dropdown:
                questionMode = QuestionType2.Dropdown
                break;
        }

        return questionMode
    }, [questionType]);

    const [question, setQuestion] = useState<QuestionTemplate>({
        disqualify: false,
        other: false,
        question: '',
        type: "",
        choice: {
            items: []
        },
        maxChoice: 0
    })

    const [currentOption, setCurrentOption] = useState<string>("");

    const handleMaxSelectionChoiceEntry = (e:any) => {
        setQuestion((current) => ({ ...current, maxChoice: e.target.value }))
    }


    const handleQuestionEntry = (e: any) => {
        setQuestion((current) => ({ ...current, question: e.target.value, type: questionMode }))
    }

    const handleOptionEntry = (e: any) => {
        setCurrentOption(e.target.value);
    }

    /** yes/no check conditio handler*/
    const changeCheckHandler = (e:any) => {
        setQuestion((current) => ({...current, other:e.target.checked}))
    }

    const addNewChoiceHandler = () => {
        //@ts-ignore
        setQuestion((current) => ({ ...current, choice: { items: [...current.choice?.items, currentOption] } }));
        setCurrentOption("");
    }

    MdataHandler({
        disqualify: question.disqualify,
        other: question.other,
        question: question.question,
        type: question.type,
        choice: {
            items: question.choice?.items
        },
        maxChoice: Number(question?.maxChoice)
    });

    

    return (
        <>
            <Box display="flex" justifyContent={"stretch"} alignItems={"flex-start"} borderRadius={"5px"} border={"1px solid #000"}>
                <InputBase maxRows={1} sx={{ flex: 1, flexGrow: 1, ml: 1, p: 1.2 }} placeholder="Type here" type='text' value={question.question} onChange={handleQuestionEntry} />
            </Box>

            <Box mx={2} mt={2} display={"flex"} flexDirection={"column"}>
                <Typography mb={.8} variant="h3" fontFamily={"Poppins"} fontWeight={"500"} textTransform={"capitalize"} >Choice</Typography>

                {
                    /*** the options list **/
                    question.choice?.items.map((el: string, index: number) => (
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} key={index} mb={1}>
                            <ListIcon sx={{ color: text.primary }} />
                            <Box display="flex" justifyContent={"stretch"} alignItems={"flex-start"} borderRadius={"5px"} border={"1px solid #000"} flexGrow={1} mx={1}>
                                <InputBase maxRows={1} sx={{ flex: 1, ml: 1, p: 1.2 }} placeholder="Type here" value={el} type={inputType} />
                            </Box>

                        </Box>
                    ))
                }

                <Box my={2} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    <ListIcon sx={{ color: text.primary }} />
                    <Box display="flex" justifyContent={"stretch"} alignItems={"flex-start"} borderRadius={"5px"} border={"1px solid #000"} flexGrow={1} mx={1}>
                        <InputBase maxRows={1} sx={{ flex: 1, ml: 1, p: 1.2 }} placeholder="Type here" type={inputType} value={currentOption} onChange={handleOptionEntry} />
                    </Box>

                    <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={addNewChoiceHandler}>
                        <AddIcon sx={{ color: text.primary }} />
                    </IconButton>
                </Box>
                
                <FormGroup>
                    <FormControlLabel control={<Checkbox color="secondary" checked={question.other}  onClick={changeCheckHandler}/>} label={<Typography variant="h5" fontFamily={"Poppins"} fontWeight={"400"}>Enable “Other” option </Typography>} />
                </FormGroup>

                <Box mt={2}>
                    <Box display="flex" justifyContent={"stretch"} alignItems={"flex-start"} borderRadius={"5px"} border={"1px solid #000"}>
                        <InputBase maxRows={1} sx={{ flex: 1, flexGrow: 1, ml: 1, p: 1.2 }} placeholder="Type here" type='text'  onChange={handleMaxSelectionChoiceEntry} />
                    </Box>
                </Box>

            </Box>
        </>
    )
}