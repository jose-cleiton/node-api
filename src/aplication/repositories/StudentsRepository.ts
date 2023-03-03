import { Student } from "../../domain/student";

export interface StudentsRepository {
  findById(id: string): Promise<Student|null>;
 }