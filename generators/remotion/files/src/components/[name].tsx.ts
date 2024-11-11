import { generate } from '@specui/core';
import { PrettierProcessor } from '@specui/prettier';
import { renderElements } from '@specui/react';
import { pascalCase } from '@specui/utils';

import { Component, Spec } from '../../../interfaces/Spec';

export function getDynamic(spec: Spec) {
  return Object.entries(spec.components || {}).map(([componentName, component]) => ({
    spec: component,
    params: {
      name: componentName,
    },
  }));
}

export default async function ComponentGenerator({
  spec,
  params,
}: {
  spec: Component;
  params: { name: string };
}) {
  return await generate({
    processor: PrettierProcessor(),
    template: /* ts */ `
      ${
        spec.props
          ? `
        export interface ${pascalCase(params.name)}Props {
          ${Object.entries(spec.props)
            .map(
              ([propName, prop]) =>
                `${propName}${prop.required ? '' : '?'}: ${prop.type ?? 'any'};`,
            )
            .join('')}
        }
      `
          : ''
      }

      export function ${pascalCase(params.name)}(
        ${spec.props ? `props: ${pascalCase(params.name)}Props` : ''}
      ): JSX.Element {
        return (
          <>
            ${renderElements(spec.elements)}
          </>
        );
      };
    `,
  });
}