export interface Pet {
  petImageId: number;
  name: string;
  level: number;
  exp: number;
  gender: 'male' | 'female';
  trainerId: string;
  ownerGitHubId: number;
}
