import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emergencyType'
})
export class EmergencyType implements PipeTransform {

  transform(value: number): string {
    if (value == 1) {
      return 'Incendio';
    }
    if (value == 2) {
      return 'Rescate';
    }
    if (value == 3) {
      return 'Desastre';
    }
    return "";
  }
}