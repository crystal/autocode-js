import { mkdir, writeFile } from 'fs/promises';
import { dirname, normalize } from 'path';
import prompts from 'prompts';
import { stringify } from 'yaml';

import { loadConfig } from '../utils/loadConfig';
import { loadSpec } from '../utils/loadSpec';
import { drizzle, examples, next, remotion, svelte } from '../examples';

export async function newAction(options: { example?: string; generator?: string }) {
  const loadedConfig = await loadConfig();
  const loadedSpec = await loadSpec();

  if (loadedConfig) {
    throw new Error('Config already exists.');
  }
  if (loadedSpec) {
    throw new Error('Spec already exists.');
  }

  const generator =
    options.generator ??
    (
      await prompts({
        type: 'select',
        choices: [
          {
            title: '@specui/drizzle-generator',
            value: '@specui/drizzle-generator',
          },
          {
            title: '@specui/remotion-generator',
            value: '@specui/remotion-generator',
          },
          {
            title: '@specui/next-generator',
            value: '@specui/next-generator',
          },
          {
            title: '@specui/svelte-generator',
            value: '@specui/svelte-generator',
          },
        ],
        name: 'value',
        message: 'Choose a generator',
      })
    ).value;

  const exampleChoices: Record<string, string[]> = {
    '@specui/drizzle-generator': drizzle,
    '@specui/remotion-generator': remotion,
    '@specui/next-generator': next,
    '@specui/svelte-generator': svelte,
  };

  const example =
    options.example ??
    (
      await prompts({
        type: 'select',
        choices: exampleChoices[generator].map((title) => ({ title, value: title })),
        name: 'value',
        message: 'Choose a generator',
      })
    ).value;

  const configFile = normalize(`${process.cwd()}/.specui/config.yml`);
  const specFile = normalize(`${process.cwd()}/.specui/spec.yml`);

  await mkdir(dirname(specFile), { recursive: true });

  await writeFile(
    configFile,
    stringify({
      generator: generator,
    }),
  );

  await writeFile(specFile, stringify(examples[example]));
}
