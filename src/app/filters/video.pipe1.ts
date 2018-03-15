import { Pipe, PipeTransform } from '@angular/core';
import { Videos } from '../models/videos';

@Pipe({
  name: 'myfilter1',
  pure: false
})

export class MyFilterPipeVideo1 implements PipeTransform {
  transform(items: any[], filter: Videos): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(it => it.status === 1);
  }
}
