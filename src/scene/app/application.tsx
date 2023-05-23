import { Box, Button, useTheme } from '@mui/material';
import { FC } from 'react';
import { CardComponent } from '../../component/card/card';
import { SingleLineContent } from '../../component/card/cardContent/singleLineContent';
import { SelectionContent } from '../../component/card/cardContent/selectionContent';
import { CustomizeQuestionContent } from '../../component/card/cardContent/CustomizeQuestionContent';
import { useSelector } from 'react-redux';
import "../../styles/card.css";



const Application:FC = () => {
   // console.log(process.env.PUBLIC_URL, process.env.REACT_APP_BASE_URL);
   const {appForm} = useSelector((store:any) => ({
    appForm:store.appForm
   }));

   console.log(appForm)

   const {
        palette: {
            success
        }
   } = useTheme();

    return (
        <Box width="100%" height={"100%"} /*bgcolor={"red"}*/ py={3} pl={2}>
            <Box mt={0}>
                <CardComponent cardTitle='Personal Information'>
                    <SingleLineContent content="first Name" />
                    <SingleLineContent content="last Name" />
                    <SingleLineContent content="email" />
                    <SelectionContent content='Phone' checkBoxLabel='Internal' switchLabel='Hide' secondaryText='without code'  checkBoxValue={appForm.personal.phoneNumber.internalUse}  switchValue={appForm.personal.phoneNumber.show} id={appForm.personal.phoneNumber.id} />
                    <SelectionContent content='Nationality' checkBoxLabel='Internal' switchLabel='Hide' checkBoxValue={appForm.personal.nationality.internalUse}  switchValue={appForm.personal.nationality.show} id={appForm.personal.nationality.id} />
                    <SelectionContent content='Current Residence' checkBoxLabel='Internal' switchLabel='Hide' checkBoxValue={appForm.personal.currentResidence.internalUse}  switchValue={appForm.personal.currentResidence.show} id={appForm.personal.currentResidence.id}/>
                    <SelectionContent content='ID Number' checkBoxLabel='Internal' switchLabel='Hide' checkBoxValue={appForm.personal.idNumber.internalUse}  switchValue={appForm.personal.idNumber.show}  id={appForm.personal.idNumber.id} />
                    <SelectionContent content='Date of Birth' checkBoxLabel='Internal' switchLabel='Hide' checkBoxValue={appForm.personal.dateOfBirth.internalUse}  switchValue={appForm.personal.dateOfBirth.show} id={appForm.personal.dateOfBirth.id} />
                    <SelectionContent content='Gender' checkBoxLabel='Internal' switchLabel='Hide' checkBoxValue={appForm.personal.gender.internalUse}  switchValue={appForm.personal.gender.show} id={appForm.personal.gender.id} />
                    {
                        appForm.personal.personalQuestions?.length > 0 &&  appForm.personal.personalQuestions.map((el:any, i:number) => {
                            return (
                                <Box key={i}>
                                    <CustomizeQuestionContent label={el?.type}  header={el?.question}/>
                                </Box>
                            )
                        }) 
                    }
                </CardComponent>
            </Box>

            <Box mt={2}>
                <CardComponent cardTitle='Profile'>
                    <SelectionContent content={appForm.profile.education.id} checkBoxLabel={"Mandatory"}  checkBoxValue={appForm.profile.education.mandatory}  switchValue={appForm.profile.education.show} switchLabel='Hide' />
                    <SelectionContent content={appForm.profile.experience.id} checkBoxLabel={"Mandatory"} checkBoxValue={appForm.profile.experience.mandatory} switchValue={appForm.profile.experience.showy} switchLabel='Hide' />
                    <SelectionContent content={appForm.profile.resume.id} checkBoxLabel={"Mandatory"} checkBoxValue={appForm.profile.resume.mandatory} switchValue={appForm.profile.resume.show} switchLabel='Hide' />
                    {
                        appForm.profile.personalQuestions?.length > 0 &&  appForm.profile.personalQuestions.map((el:any, i:number) => {
                            return (
                                <Box key={i}>
                                    <CustomizeQuestionContent label={el?.type}  header={el?.question}/>
                                </Box>
                            )
                        }) 
                    }
                </CardComponent>
            </Box>

            <Box mt={2}>
                <CardComponent cardTitle="Additional questions">
                    <CustomizeQuestionContent label="Paragraph"  header='Please tell me about yourself in less than 500 words'/>
                    {
                        appForm.customize.personalQuestions?.length > 0 &&  appForm.customize.personalQuestions.map((el:any, i:number) => {
                            return (
                                <Box key={i}>
                                    <CustomizeQuestionContent label={el?.type}  header={el?.question}/>
                                </Box>
                            )
                        }) 
                    }
                </CardComponent>
            </Box>
            
            <Box display={"flex"} justifyContent={"flex-end"} className="button-wrapper" my={2}>
                <Button sx={{background:`${success.main} !important`, width:"calc(100% * .4)"}} size='large' >Save</Button>
            </Box>
           
        </Box>
    )
}

export default Application;