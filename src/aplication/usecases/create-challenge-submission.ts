import { Submission } from "../../domain/submission";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {

  constructor(
    private  studentsRepository: StudentsRepository,
    private  challengesRepository: ChallengesRepository,
  ) {}

  execute = async ({ studentId, challengeId }: CreateChallengeSubmissionRequest) => {

    const student = await this.studentsRepository.findById(studentId);
    const challenge = await this.challengesRepository.findById(challengeId); 
    if (!student) {
      throw new Error('Student not found');
    }

    if (!challenge) {
      throw new Error('Challenge not found');
    }

    const submission = Submission.create({
      challengeId,
      studentId,
      createdAt: new Date(),
    });

    return submission;
  }

}
