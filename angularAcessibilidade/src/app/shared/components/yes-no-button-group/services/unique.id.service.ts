import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable()
export class UniqueIdService{
  public generateUniqueIdWhitPrefix(prefix: string):string{
    const uniqueId  = this.generateUniqueId();
    return `${prefix}-${uniqueId}`
  }
  public generateUniqueId():string{
      return  uuid.v1()
  }
}
