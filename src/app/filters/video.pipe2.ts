import { Pipe, PipeTransform } from '@angular/core';
import { Videos } from '../models/videos';

@Pipe({
  name: 'myfilter2',
  pure: false
})

export class MyFilterPipeVideo2 implements PipeTransform {
  transform(items: any[], filter: Videos): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(it => it.status  === 0);
  }
}
