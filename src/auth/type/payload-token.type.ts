import { TypeRoleAdmin, TypeRoleUser } from '@prisma/client';
export type PayloadToken = {
  sub: string;
  role: string;
  access: string;
  expire: string;
};
