import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../interfaces/pet';

const expTable = [20, 40, 70, 110, 160, 220, 290, 370, 460];

@Pipe({
  name: 'exp',
})
export class ExpPipe implements PipeTransform {
  transform(pet: Pet, ...args: any[]): any {
    const totalExp = pet.exp;
    let prevExp = 0;
    let result = 'no-data';

    console.log('totalExp=' + totalExp);

    expTable.some((data, i) => {
      console.log('data=' + data + ' i=' + i);

      if (totalExp < data) {
        console.log('in-if');
        result = totalExp - prevExp + ' / ' + (data - prevExp);
        return true;
      } else prevExp = data;
    });
    return result;
  }
}
