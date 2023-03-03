import { Challenge } from "../../domain/challenge";

export interface ChallengesRepository {
  findById(id: string): Promise<Challenge|null>;
 }