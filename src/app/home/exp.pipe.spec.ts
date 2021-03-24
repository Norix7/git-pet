import { Pet } from '../interfaces/pet';
import { ExpPipe } from './exp.pipe';
describe('ExpPipe', () => {
  const pipe = new ExpPipe();
  const pet: Pet = {
    petImageId: 2,
    name: 'aaaa',
    level: 1,
    exp: 10,
    gender: 'male',
    trainerId: 'xxxxxxx',
    ownerGitHubId: 12345,
  };

  describe('インスタンスが生成したら', () => {
    it('インスタンスが生成されること', () => {
      const pipe = new ExpPipe();
      expect(pipe).toBeTruthy();
    });
  });

  describe('Pecentを指定した場合', () => {
    it('パーセントが計算されること', () => {
      expect(pipe.transform(pet, 'percent')).toBe(50);
    });
  });

  describe('labalを指定した場合', () => {
    it('現在の経験値/次のレベルまでの経験値の文字列が戻ること', () => {
      expect(pipe.transform(pet, 'label')).toBe('10 / 20');
    });
  });
});
