import { RoleEnum } from '../../helpers/helper';

export type PayloadToken = {
  sub: string;
  role: RoleEnum;
  access: string;
  expire: string;
};
