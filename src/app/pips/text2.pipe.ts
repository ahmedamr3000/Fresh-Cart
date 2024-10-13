import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  standalone: true,
})
export class Text2Pipe implements PipeTransform {
  transform(text: string, limte: number): string {
    return text.split(' ').slice(0, limte).join(' ');
  }
}
