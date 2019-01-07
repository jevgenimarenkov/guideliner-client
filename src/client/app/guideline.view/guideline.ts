export class Guideline {
  public name:String;
  public description:String;
  public selected:Boolean;
}

export class EvaluationResult {
  public guideline:Guideline = new Guideline();
  public description:String;
  public result:String;
  public failedElements:Array<FailedElement>;
}

export class FailedElement {
  public type:String;
  public code:String;
  public text:String;
  public description:String;
  public pathToElement:String;
}
