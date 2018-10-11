/*
export interface IQuestion
{
    question : string,
    option1 : string,
    option2 : string,
    option3 : string,
    option4 : string,
    answer : string
}
*/
export interface IQuestion
{
    question : string,
    options : string[];
    answer : string
}

export class Result
{
/*   
 public TotalMarks : number;
   public TotalQuestions : number;
   public correctAnsCount : number;
   public wrongAnsCount : number;
*/
    public constructor(public TotalMarks : number, public TotalQuestions : number, public correctAnsCount : number, public wrongAnsCount : number)
    {

    }
}