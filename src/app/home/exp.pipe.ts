import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../interfaces/pet';

const expTable = [20, 50, 90, 140, 200, 270, 350, 440, 540];

@Pipe({
  name: 'exp',
})
export class ExpPipe implements PipeTransform {
  transform(pet: Pet, type: 'percent' | 'label'): any {
    const totalExp = pet.exp;
    let prevExp = 0;
    let nowExp = 0;
    let nextExp = 20;

    expTable.some((data, i) => {
      if (totalExp < data) {
        nowExp = totalExp - prevExp;
        nextExp = data - prevExp;
        return true;
      } else prevExp = data;
    });

    if (type === 'percent') {
      return (nowExp / nextExp) * 100;
    } else {
      return nowExp + ' / ' + nextExp;
    }
  }
}
