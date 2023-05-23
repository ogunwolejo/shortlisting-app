export enum QuestionType {
    PARAGRAPH = "Paragraph",
    SHORTANSWER ="Short Answer",
    YesNo = "Yes no",
    Dropdown = "Dropdown",
    MultipleChoice = "Multiple choice",
    Date = "Date",
    Number = "Number",
    FileUpload = "File Upload"
}

export enum QuestionType2 {
    Paragraph = "Paragraph",
    ShortAnswer = "ShortAnswer",
    YesNo = "YesNo",
    Dropdown = "Dropdown",
    MultipleChoice = "MultipleChoice",
    Date = "Date",
    Number = "Number",
    FileUpload = "FileUpload"
}


export interface QuestionTemplate {
    id?:string;
    type: QuestionType2 | string;
    question:string;
    choice?: { items: string[]  };
    maxChoice?: number;
    disqualify: boolean;
    other:boolean;
}