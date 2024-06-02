import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class GatewayStorageBucketRepository {
  private readonly bucketName = process.env.STORAGE_BUCKET_NAME;
  private readonly storage = new Storage({
    keyFilename: 'service_account_staging.json',
  });
  async uploadFile(file: Express.Multer.File, remoteFileName: string): Promise<string> {
    const bucket = this.storage.bucket(this.bucketName);
    const fileBuffer = Buffer.from(file.buffer);
    await bucket.file(remoteFileName).save(fileBuffer, {
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
      public: true,
    });

    const publicUrl = bucket.file(remoteFileName).publicUrl();
    return publicUrl;
  }


  async deleteFile(remoteFileName: string): Promise<void> {
    const bucket = this.storage.bucket(this.bucketName);
    await bucket.file(remoteFileName).delete();
  }

  async getSignedUrl(remoteFileName: string): Promise<string> {
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(remoteFileName);
    const [url] = await file.getSignedUrl({
      action: 'read',
      expires: Date.now() + 1000 * 60 * 60, // 1 hour
    });
    return url;
  }
}
