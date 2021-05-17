import 'dotenv/config';
import { list } from '@keystone-next/keystone/schema';
import { text, timestamp, select, relationship } from '@keystone-next/fields';
import { document } from '@keystone-next/fields-document';
import { cloudinaryImage } from '@keystone-next/cloudinary';

const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'keystone',
};

export const Action = list({
  fields: {
    title: text(),
    datePublished: timestamp({ defaultValue: () => new Date().toISOString() }),
    image: cloudinaryImage({
      cloudinary,
      label: 'Image',
    }),
    content: document({
      formatting: true,
      links: true,
    }),
    relatedSdgs: relationship({ ref: 'Sdg.actions', many: true }),
    categories: relationship({ ref: 'Category.actions', many: true }),
  },
});
