import { ChallengesRepository } from "../aplication/repositories/ChallengesRepository";
import { Challenge } from "../domain/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const student = this.items.find((student) => student.id === id);
    
    if (!student) {
      return null;
      
    }

    return student;
  }

  async save(student: Challenge): Promise<void> {
    this.items.push(student);
  }
}