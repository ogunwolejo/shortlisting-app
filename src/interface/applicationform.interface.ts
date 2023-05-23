import { QuestionTemplate } from "./questionTemplate";

export interface IApplicationForm {
    profile:IProfile;
    personal:IPersonal;
    customize:ICustomize;
}

export interface IPersonal  {
    firstName:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    lastName:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    emailId:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    phoneNumber:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    nationality:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    currentResidence:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    idNumber:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    dateOfBirth:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    };
    gender:string | {
        internalUse:boolean;
        show:boolean;
        id:string;
    }; 

    personalQuestions: Array<QuestionTemplate>;
}

export interface IProfile {
    experience: {
        mandatory:boolean;
        show:boolean;
        id:string
    };
    education:{
        mandatory:boolean;
        show:boolean;
        id:string
    },
    resume:{
        mandatory:boolean;
        show:boolean;
        id:string
    } 
    personalQuestions: Array<QuestionTemplate>;
}

export interface ICustomize {
    personalQuestions?: Array<QuestionTemplate> 
}
