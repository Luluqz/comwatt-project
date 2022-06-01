import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eType'
})
export class ETypePipe implements PipeTransform {

  transform(value: string): string {
    let type: string = '';
    switch(value) { 
      case 'audio_book': { 
        type = 'Audio'
        break;  
      }
      case 'e_book': {
        type = 'eBook'
        break;
      }
      case 'paper_book': {
        type = 'Papier'
        break;
      }
   }
   return type; 
  }

}
