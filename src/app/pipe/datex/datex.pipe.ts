import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'datex' })
export class DatexPipe implements PipeTransform {
    transform(value: string, format: string) {
        return moment(value).format(format);
    }
}
