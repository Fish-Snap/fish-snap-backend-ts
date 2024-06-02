export class CreateFileStorageBucketDto {
  name: string;
  access: 'PUBLIC' | 'PRIVATE';
  tribe: string;
  service: string;
  module: string;
  file: Express.Multer.File;
  subFolder?: string;
}
