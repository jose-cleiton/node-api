import Entity from "../core/domain/Entity";

type CorrectionProps = {
  grade: number;
  seubmissionId: string;
  createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {

  private constructor(props: CorrectionProps, id?: string) { 
    super(props, id);
  }

  static creat(props: CorrectionProps, id?: string) {

    if (props.grade < 0 || props.grade > 10) {
      throw new Error("Grade must be between 0 and 10");
     }
    const correction = new Correction(props, id);
    return correction;
    
  }

}