import { camelCase, snakeCase, upperFirst } from 'lodash';
import { TransformerType } from './transformers/leaf-transformer-base';

function pascalCase(str: string): string {
  return upperFirst(camelCase(str));
}

function removeUnsupportedChars(str: string): string {
  return str.replace(/[-/.+@\s:]/g, ' '); //convert all unsupported char to spaces
}

export function hasUnsupportedIdentifierChar(key: string): boolean {
  return /[-/.+@\s:]/.test(key);
}

export function screamingSnakeCase(str: string): string {
  return snakeCase(removeUnsupportedChars(str)).toUpperCase();
}

export function sanitizeOperationIdName(op: string): string {
  return camelCase(removeUnsupportedChars(op));
}

export function sanitizeTypeIdentifier(type: string): string {
  return pascalCase(removeUnsupportedChars(type));
}

export function sanitizeTransformEntity(
  type: TransformerType,
  entityName: string,
): string {
  return `$${type}_${pascalCase(entityName)}`;
}
