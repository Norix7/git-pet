import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../interfaces/pet';

const expTable = [20, 40, 70, 110, 160, 220, 290, 370, 460];

@Pipe({
  name: 'exp',
})
export class ExpPipe implements PipeTransform {
  transform(pet: Pet, type: 'percent' | 'label'): any {
    const totalExp = pet.exp;
    let prevExp = 0;
    let nowExp = 0;
    let nextExp = 20;

    console.log('totalExp=' + totalExp);

    expTable.some((data, i) => {
      console.log('data=' + data + ' i=' + i);

      if (totalExp < data) {
        console.log('in-if');
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
