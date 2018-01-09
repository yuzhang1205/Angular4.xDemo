import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keywords: string): any {
    if (!filterField || !keywords) {
      return list;
    }
    console.log(filterField);
    console.log(keywords);
    console.log(list);
    list.filter(item => {
      console.log(item);
      console.log(item[0][filterField]);
      let filedValue: any;
      filedValue = item[filterField];
      return filedValue.indexOf(keywords) >= 0;
    });
  }

}
