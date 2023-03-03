import { Challenge } from "../../domain/challenge";
import { Student } from "../../domain/student";
import { InMemoryChallengesRepository } from "../../tests/in-memory-challenges-repository";
import { InMemoryStudentRepository } from "../../tests/in-memory-student-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('CreateChallengeSubmission use case',  () => {
  it('should create a submission with the given data', async () => {

    const studentsRepository = new InMemoryStudentRepository();
    const challengesRepository = new InMemoryChallengesRepository();
    const student = Student.create({
      name: 'any_name',
      email: 'any_email',
    });
    const challenge = Challenge.create({
      title: 'any_title',
      instructionsUrl: 'http://any_url.com',
    });

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository,
    );
    
    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    
    const response = await sut.execute({
        studentId: student.id,
        challengeId: challenge.id,
    });



    
    
  

    expect(response).toBeTruthy();
    
  });


});
 