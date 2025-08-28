import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    html: {
        template: './static/index.html',
        title: process.env.APP_TITLE ?? "CSS Animation using sprite",
    },
    output: {
        assetPrefix: '/sprite-css-animation/',
    },
});
