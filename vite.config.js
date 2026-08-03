import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

function copyAcmSummerSchool() {
  let outputDirectory;

  return {
    name: 'copy-acm-summer-school',
    configResolved(config) {
      outputDirectory = config.build.outDir;
    },
    closeBundle() {
      cpSync(resolve('blogs/acm-summer-school'), resolve(outputDirectory, 'blogs/acm-summer-school'), { recursive: true });
      cpSync(resolve('blogs/images'), resolve(outputDirectory, 'blogs/images'), { recursive: true });
    },
  };
}

export default defineConfig({
  plugins: [react(), copyAcmSummerSchool()],
});
