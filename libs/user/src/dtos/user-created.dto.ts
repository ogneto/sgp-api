import { Dto } from '@app/commons';

export class UserCreatedDto extends Dto {
  public id: string;

  public name: string;

  public email: string;

  public url: string;
}
