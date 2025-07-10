module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: "08e472dc98b93530c7ed08d6d02e9890",
        secretAccessKey: "23c81023bd9f26a5e8059a53ac30001a01716c3d6cf6ee998e02ac7944b20997",
        /**
         * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
         */
        endpoint: "https://2130eb966772f756bd14a05fc8e85e4f.r2.cloudflarestorage.com",
        params: {
          Bucket: "strapi-azurismo",
        },
        /**
         * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
         * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
         * This option is required to upload files larger than 5MB, and is highly recommended to be set.
         * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
         */
        cloudflarePublicAccessUrl: "https://pub-3c584da98a5e432eaa179800ab7fefd4.r2.dev",
        /**
         * Sets if all assets should be uploaded in the root dir regardless the strapi folder.
         * It is useful because strapi sets folder names with numbers, not by user's input folder name
         * By default it is false
         */
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
