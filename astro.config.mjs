import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jacksonhenry3.github.io',
  base: '/StrongTownsWorcester',
  build: {
    format: 'file',
    outDir: 'docs'
  }
});
