import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogBlogPicture extends Schema.Component {
  collectionName: 'components_blog_blog_pictures';
  info: {
    displayName: 'BlogPicture';
    icon: 'apps';
  };
  attributes: {
    alt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    src: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    width: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlogImage extends Schema.Component {
  collectionName: 'components_blog_images';
  info: {
    displayName: 'Image';
    icon: 'apps';
    description: '';
  };
  attributes: {
    alt: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    width: Attribute.Integer & Attribute.DefaultTo<800>;
    height: Attribute.Integer & Attribute.DefaultTo<450>;
    imageClass: Attribute.String;
    src: Attribute.Media & Attribute.Required;
  };
}

export interface BlogMarkdowBlock extends Schema.Component {
  collectionName: 'components_blog_markdow_blocks';
  info: {
    displayName: 'MarkdowBlock';
    icon: 'apps';
  };
  attributes: {
    content_markdown: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface BlogTest extends Schema.Component {
  collectionName: 'components_blog_tests';
  info: {
    displayName: 'test';
    icon: 'apps';
  };
  attributes: {
    tite: Attribute.String;
    link: Attribute.Media & Attribute.Required;
  };
}

export interface BlogYouTube extends Schema.Component {
  collectionName: 'components_blog_you_tubes';
  info: {
    displayName: 'YouTube';
    icon: 'apps';
  };
  attributes: {
    src: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    coverImage: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog-picture': BlogBlogPicture;
      'blog.image': BlogImage;
      'blog.markdow-block': BlogMarkdowBlock;
      'blog.test': BlogTest;
      'blog.you-tube': BlogYouTube;
    }
  }
}
