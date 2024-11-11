import { Style } from '../interfaces/Style';

export function renderElementStyle(style?: Style) {
  if (!style) {
    return '';
  }

  const results: string[] = [];

  Object.entries(style).forEach(([name, value]) => {
    const finalValue = value.startsWith('$')
      ? `${value.slice(1)}`
      : typeof value === 'string'
      ? `'${value}'`
      : `{${value}}`;
    results.push(`${name}: ${finalValue}`);
  });

  console.log(` style={{${results.join(', ')}}}`);
  return `
    style={{
      ${results.join(',\n')}
    }}
  `;
}