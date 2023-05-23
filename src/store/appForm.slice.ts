import {createSlice} from '@reduxjs/toolkit';
import { IApplicationForm } from '../interface/applicationform.interface';
import { QuestionType } from '../interface/questionTemplate';

/*type: string;
choice?: { items: string[] };
maxChoice?: number;
disqualify: boolean;
other:boolean;*/

const iApplicationFormData:IApplicationForm = {
    profile:{
        education: {
            mandatory:true, 
            show:false,
            id:"education"
        },
        experience: {
            mandatory:true, 
            show:true,
            id:"experience"
        },
        resume: {
            mandatory:false, 
            show:false,
            id:"resume"
        },
        personalQuestions: []
    },


    personal:{
      firstName:{
        internalUse:false,
        show:true,
        id:"firstName",
      },
      lastName:{
        internalUse:false,
        show:true,
        id:"lastName"
      },
      emailId:{
        internalUse:false,
        show:true,
        id:"emailId"
      },
      phoneNumber:{
        internalUse:false,
        show:true,
        id:"phoneNumber"
      },
      nationality:{
        internalUse:false,
        show:true,
        id:"nationality"
      },
      currentResidence:{
        internalUse:false,
        show:true,
        id:"currentResidence"
      },
      idNumber:{
        internalUse:false,
        show:true,
        id:"idNumber"
      },
      dateOfBirth:{
        internalUse:false,
        show:true,
        id:"dateOfBirth"
      },
      gender:{
        internalUse:false,
        show:true,
        id:"gender"
      },
      personalQuestions:[]  
    },



    customize:{
        personalQuestions:[]
    }
}


const formSlicee = createSlice({
    name: "formSlice",
    initialState:iApplicationFormData,
    reducers:{

      addPersonalQuestionToProfile: (state:any, action) =>{
        return {...state, 
          profile:{
            ...state.profile,
            personalQuestions: [...state.profile.personalQuestions, action.payload]
          }
        }
      },

      addPersonalQuestionToPersonal: (state, action) =>{
      
        return {...state, 
          personal:{
            ...state.personal,
            personalQuestions: [...state.personal.personalQuestions, action.payload]
          }
        }
      },

      addPersonalQuestionToCustomize: (state:any, action) =>{
        return {...state, 
          customize:{
            ...state.customize,
            personalQuestions: [...state.customize.personalQuestions, action.payload]
          }
        }
      },

      editForm: (state:any, payload) => {
        
      }

    }
})

export const AppFormReducer = formSlicee.reducer;
export const {addPersonalQuestionToProfile,addPersonalQuestionToPersonal,addPersonalQuestionToCustomize} = formSlicee.actions;