
import Entity from "../core/domain/Entity";

type StudentProps = {
  name: string;
  email: string;
};

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  public static create(props: StudentProps, id?: string) {
    const challenge = new Student(props, id);
    return challenge;
  }
}