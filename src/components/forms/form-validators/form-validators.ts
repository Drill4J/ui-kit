import { merge } from 'lodash';
import { camelToSpaces, getPropertyByPath } from '../../../utils';

type FormValidationResult = Record<string, string> | undefined;
export type FormValidator = <T extends Record<string, unknown>>(formValues: T) => FormValidationResult;

export function composeValidators(...validators: (FormValidator | boolean)[]): FormValidator {
  return (values) => merge({}, ...validators.map((validator) => typeof validator !== 'boolean' && validator(values)));
}

export function required(fieldName: string, fieldAlias?: string): FormValidator {
  return (valitationItem) => {
    const value = getPropertyByPath<string>(valitationItem, fieldName);
    return (!value || (typeof value === 'string' && !value.trim())
      ? toError(fieldName, `${fieldAlias || camelToSpaces(fieldName)} is required.`)
      : undefined);
  };
}

export function requiredArray(fieldName: string, fieldAlias?: string) {
  return (valitationItem: Record<string, unknown>) => {
    const value = getPropertyByPath<string[]>(valitationItem, fieldName);
    return (!value || (typeof value === 'object' && value?.filter(Boolean).length === 0)
      ? toError(fieldName, fieldAlias || `${camelToSpaces(fieldName)} is required.`)
      : undefined);
  };
}

export function sizeLimit({
  name,
  alias,
  min = 3,
  max = 32,
}: {
  name: string;
  alias?: string;
  min?: number;
  max?: number;
}): FormValidator {
  return (valitationItem) => {
    const value = getPropertyByPath<string>(valitationItem, name);
    return ((value && typeof value === 'string' && value.trim().length < min)
    || (value && typeof value === 'string' && value.trim().length > max)
      ? toError(name, `${alias
        || camelToSpaces(name)} size should be between ${min} and ${max} characters.`)
      : undefined);
  };
}

export function toError(fieldName: string, error: string) {
  const field = fieldName.split('.');
  return field.reduceRight((acc, key, index) => (
    { [key]: index === field.length - 1 ? error : acc }
  ), {});
}

interface FieldError {
  field: string;
  message: string;
}

export function handleFieldErrors(fieldErrors: FieldError[] = []): Record<string, string> {
  return fieldErrors.reduce((acc, current) =>
    ({ ...acc, [current.field]: current.message }), {});
}

export function numericLimits({
  fieldName, fieldAlias = '', min, max,
}: {
  fieldName: string;
  fieldAlias?: string;
  min: number;
  max: number;
}): FormValidator {
  return (valitationItem) => {
    const value = getPropertyByPath(valitationItem, fieldName);

    return typeof value === 'undefined' || Number(value) < min || Number(value) > max
      ? toError(fieldName, `${fieldAlias || camelToSpaces(fieldName)} should be between ${min}% and ${max}%`)
      : undefined;
  };
}

export function positiveInteger(fieldName: string, fieldAlias?: string): FormValidator {
  return (valitationItem) => {
    const value = getPropertyByPath(valitationItem, fieldName);
    return !Number.isInteger(Number(value)) || Number(value) < 0 || value === ''
      ? toError(fieldName, `${fieldAlias || camelToSpaces(fieldName)} value should be a positive integer or 0`)
      : undefined;
  };
}

export function correctPattern(fieldName: string, pattern: RegExp, errorMessage: string): FormValidator {
  return (valitationItem) => {
    const value = getPropertyByPath<string>(valitationItem, fieldName) || '';
    return value.replace(pattern, '')
      ? toError(fieldName, errorMessage)
      : undefined;
  };
}

export function idValidator(id: string, alias?: string): FormValidator {
  const idRegexp = /^[a-z0-9-]{1,32}$/;
  return (validationItem: any) => (!idRegexp.exec(getPropertyByPath(validationItem, id))
    ? toError(id, `Incorrect ${alias}. Use lowercase Latin letters, digits and dashes.`)
    : undefined);
}

export function alreadyExist(fieldName: string, unavailableIds: string[], errorMessage: string): FormValidator {
  return (valitationItem) => {
    const value = getPropertyByPath<string>(valitationItem, fieldName) || '';
    return unavailableIds.includes(value)
      ? toError(fieldName, errorMessage)
      : undefined;
  };
}
