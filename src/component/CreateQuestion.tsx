import { FC, forwardRef, useCallback, useMemo, useState } from "react";
import { Theme, Typography, styled, Select, Box, Button, IconButton, useTheme, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
//import { CardWithoutAction } from "./card/CardWithoutAction";
import SelectUnstyled, {
    SelectUnstyledProps,
    selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { TextInput } from "./inputComponents/textInput";
import { OptionInputContainer } from "./inputComponents/optionInputContainer";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { QuestionTemplate, QuestionType, QuestionType2 } from "../interface/questionTemplate";
import {v4 as uuid4} from 'uuid';
import { addPersonalQuestionToPersonal, addPersonalQuestionToCustomize, addPersonalQuestionToProfile } from "../store/appForm.slice";
import { useDispatch } from "react-redux";


const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: Poppins;
    border: 1px solid ${theme.palette.text.primary};
    background: #FFFFFF;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 100%;
    border-radius:5px;
    padding: 12px;
    text-align: left;
    line-height: 1.5; 
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
    color: ${theme.palette.grey[100]};
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
);


/** list - options */
const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: Poppins;
    fontWeight: 400;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 500px;
    border-radius: 5px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.background.default};
    border: none;
    color: ${theme.palette.text.primary};
    box-shadow: 3px 3px 27px rgba(190, 190, 190, 0.3);
    `,
);


const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0;
    cursor: default;
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.warning.main};
      color: ${theme.palette.background.default};
    }
  
    &.${optionUnstyledClasses.highlighted} {
        background-color: ${theme.palette.warning.main};
        color: ${theme.palette.background.default};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
        background-color: ${theme.palette.warning.main};
        color: ${theme.palette.background.default};
    }

    &:hover:not(.${optionUnstyledClasses.disabled}) {
        background-color: ${theme.palette.warning.main};
        color: ${theme.palette.background.default};
      } 
    `,
);

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
`;

const CustomSelect = forwardRef(function CustomSelect<TValue extends {}>(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLButtonElement>,
) {
    const slots: SelectUnstyledProps<TValue>['slots'] = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    };

    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}>(
    props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;


const CreateQuestion: FC<{closeQuestionHandler:React.MouseEventHandler | any; wrapper:string}> = ({closeQuestionHandler, wrapper }) => {
    const {
        palette: {
            primary,
            secondary,
            background,
            text,
            error
        }
    } = useTheme();

    const dispatch = useDispatch();

    const [selectedQuestionMode, setSelectedQuestionMode] = useState<string>('');
    const [question, setQuestion] = useState({
        disqualify: false,
        other: false,
        question: '',
        maxChoice: 0
    });
    const customizePopUpDropdown: QuestionType[] = useMemo(() => [QuestionType.SHORTANSWER, QuestionType.PARAGRAPH, QuestionType.YesNo, QuestionType.Date, QuestionType.MultipleChoice, QuestionType.Dropdown, QuestionType.Number], []);

    const questionMode = useMemo(() => {
        let questionMode: QuestionType2 = QuestionType2.Paragraph;        

        switch (selectedQuestionMode) {
            case QuestionType.Date:
                questionMode = QuestionType2.Date
                break;
            case QuestionType.Number:
                questionMode = QuestionType2.Number
                break;
            case QuestionType.PARAGRAPH:
                questionMode = QuestionType2.Paragraph
                break;
            case QuestionType.YesNo:
                questionMode = QuestionType2.YesNo
                break;
            case QuestionType.SHORTANSWER:
            questionMode = QuestionType2.ShortAnswer
            break;
        }

        return questionMode;
    }, [selectedQuestionMode])


    /*** changing the current question type */
    const selectOptionHandler = (e: string) => {
        setSelectedQuestionMode(e);
    }

    /** yes/no check conditio handler*/
    const changeCheckHandler = (e:any) => {
        setQuestion((current) => ({...current, disqualify:e.target.checked}))
    }

    /** this is for the non-muti choice */
    const getInputTextHandler = (e:any):void => {
        setQuestion((current) => ({...current, question:e.target.value,}))
    }

    /*** the function when you save a non - muti choice question */
    const nonMutiChoiceQuestionSaveHandler = () => {
        const dataToSave = {
            ...question,
            id:uuid4(),
            type:questionMode,
            
        }

        if(wrapper.toLowerCase() === "Personal Information".toLowerCase()) {
            dispatch(addPersonalQuestionToPersonal(dataToSave))
        } 
        
        else if(wrapper.toLowerCase() === "Profile".toLowerCase()) {
            dispatch(addPersonalQuestionToProfile(dataToSave))
        } 

        else {
            dispatch(addPersonalQuestionToCustomize(dataToSave))
        }

    }

    
    let mutliChoiceQuestion:QuestionTemplate | undefined = undefined;

    /*** mutli choice save function ***/
    const mutiChoiceGetHandler = (e:QuestionTemplate) => {
        mutliChoiceQuestion = e;
    }

    const mutliChoiceSaveHandler = () => {
         const dataToSave = {
        id:uuid4(),
        ...mutliChoiceQuestion
       }
       console.log(dataToSave);

       if(wrapper.toLowerCase() === "Personal Information".toLowerCase()) {
            dispatch(addPersonalQuestionToPersonal(dataToSave))
        } 
    
        else if(wrapper.toLowerCase() === "Profile".toLowerCase()) {
            dispatch(addPersonalQuestionToProfile(dataToSave))
        } 

        else {
            dispatch(addPersonalQuestionToCustomize(dataToSave))
        }
    }


    const saveHandler = () => {
        if(selectedQuestionMode.trim().length  === 0) {
            return null;
        }

        if(selectedQuestionMode.toLowerCase() === QuestionType.Dropdown.toLowerCase() || selectedQuestionMode.toLowerCase() === QuestionType.MultipleChoice.toLowerCase()) {
            mutliChoiceSaveHandler();
            closeQuestionHandler();
        } 
        else {
            nonMutiChoiceQuestionSaveHandler();
            closeQuestionHandler();
        }   
    }



    return (
        <>
            <Typography mb={1} variant="h3" fontFamily={"Poppins"} fontWeight={"600"} textTransform={"capitalize"} flexGrow={1}>Type</Typography>
            <CustomSelect placeholder="Select Question Type">
                {customizePopUpDropdown.map((el: string, i: number) => <StyledOption onClick={selectOptionHandler.bind(null, el)} value={el} key={i}>{el}</StyledOption>)}
            </CustomSelect>

            <Box my={2}>
                <Typography mb={1} variant="h3" fontFamily={"Poppins"} fontWeight={"600"} textTransform={"capitalize"} flexGrow={1}>Question</Typography>
                {
                    /*** only for the non-muti choice questions */
                    (selectedQuestionMode.toLowerCase() === QuestionType.PARAGRAPH.toLowerCase() ||  selectedQuestionMode.toLowerCase() === QuestionType.YesNo.toLowerCase() || selectedQuestionMode.toLowerCase() === QuestionType.SHORTANSWER.toLowerCase() ||  selectedQuestionMode.toLowerCase() === QuestionType.Number.toLowerCase() ||  selectedQuestionMode.toLowerCase() === QuestionType.Date.toLowerCase()) && (
                       <>
                         <TextInput getInputhandler={getInputTextHandler} type={selectedQuestionMode.toLowerCase() === QuestionType.Number.toLowerCase() ? "number" : (selectedQuestionMode.toLowerCase() === QuestionType.Date.toLowerCase() ? "date" : "text") }/>
                         {
                            selectedQuestionMode.toLowerCase() === QuestionType.YesNo.toLowerCase() && (
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox color="secondary" checked={question.disqualify}  onClick={changeCheckHandler}/>} label={<Typography variant="h5" fontFamily={"Poppins"} fontWeight={"400"}>Disqualify candidate if the answer is no</Typography>} />
                                </FormGroup>
                            )
                         }
                       </>
                    )

                }
                {
                    /** for dropdown and  */
                    (selectedQuestionMode.toLowerCase() === QuestionType.Dropdown.toLowerCase() || selectedQuestionMode.toLowerCase() === QuestionType.MultipleChoice.toLowerCase()) && (
                        <OptionInputContainer questionType={selectedQuestionMode.toLowerCase() === QuestionType.Dropdown.toLowerCase() ? QuestionType.Dropdown : QuestionType.MultipleChoice } MdataHandler={(e:QuestionTemplate) => mutiChoiceGetHandler(e)}/>
                    )
                }
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} my={1}>
                
                <IconButton disableFocusRipple={true} disableTouchRipple={true} disableRipple={true} sx={{ flexGrow: 0 }} onClick={closeQuestionHandler}>
                    
                    <CloseOutlinedIcon fontSize="medium" sx={{ color: error.main, borderWidth: "5px" }} fontWeight={"600"} />
                    
                    <Typography variant="h4" fontFamily={"Poppins"} fontWeight={"600"} fontSize={15} color={error.main} ml={2}>Delete question</Typography>
                
                </IconButton>
                
                <Button sx={{ background: `${secondary.main} !important`, color: background.default, marginRight: 2 }} size="large" disableTouchRipple={true} disableFocusRipple={true} disableRipple={true} 
                    onClick={
                        saveHandler
                    }
                >
                    Save
                </Button>
            
            </Box>
        </>
    )
}

export default CreateQuestion;
