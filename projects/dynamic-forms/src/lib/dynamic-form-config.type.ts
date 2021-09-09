import {
  ConfigOption,
  ExtensionOption,
  ManipulatorOption,
  TypeOption,
  ValidationMessageOption,
  ValidatorOption,
  WrapperOption,
} from '@ngx-formly/core/lib/services/formly.config';

export interface DynamicFormConfig {
  types?: DynamicFormType[];
  wrappers?: DynamicFormWrappersType[];
  validators?: ValidatorOption[];
  extensions?: ExtensionOption[];
  validationMessages?: ValidationMessageOption[];
  /** @deprecated use `extensions` instead */
  manipulators?: ManipulatorOption[];
  extras?: {
    fieldTransform?: any;
    immutable?: boolean;
    checkExpressionOn?: 'modelChange' | 'changeDetectionCheck';
    lazyRender?: boolean;
    resetFieldOnHide?: boolean;
  };
}
export class DynamicFormConfigProvider {
  constructor(public dynamicFormsConfig: DynamicFormConfig) {}
  toFormlyConfig(mode: 'view' | 'edit'): ConfigOption {
    return {
      types: this.dynamicFormsConfig.types
        ?.map(
          (itemProvider: DynamicFormType) =>
            new DynamicFormTypeProvider(itemProvider),
        )
        .map((type) => type.toTypeOption(mode)),
      wrappers: this.dynamicFormsConfig.wrappers
        ?.map(
          (itemProvider: DynamicFormWrappersType) =>
            new DynamicFormWrapperProvider(itemProvider),
        )
        .map((wrapper) => wrapper.toWrapperOption(mode)),
      validators: this.dynamicFormsConfig.validators,
      extensions: this.dynamicFormsConfig.extensions,
      validationMessages: this.dynamicFormsConfig.validationMessages,
      extras: this.dynamicFormsConfig.extras,
    };
  }
}

export interface DynamicFormTypeUnique {
  unique: TypeOption;
}

export interface DynamicFormTypeMultiple {
  edit: TypeOption;
  view: TypeOption;
}
export type DynamicFormType = DynamicFormTypeUnique | DynamicFormTypeMultiple;
export class DynamicFormTypeProvider {
  constructor(public dynamicFormsConfig: DynamicFormType) {}
  toTypeOption(mode: 'view' | 'edit'): TypeOption {
    if (
      Object.prototype.hasOwnProperty.call(this.dynamicFormsConfig, 'unique')
    ) {
      return (this.dynamicFormsConfig as DynamicFormTypeUnique).unique;
    }
    const type = this.dynamicFormsConfig as DynamicFormTypeMultiple;
    return mode == 'view' ? type.view : type.edit;
  }
}

export interface DynamicFormWrappersUnique {
  unique: WrapperOption;
}

export interface DynamicFormWrappersMultiple {
  edit: WrapperOption;
  view: WrapperOption;
}

export type DynamicFormWrappersType =
  | DynamicFormWrappersUnique
  | DynamicFormWrappersMultiple;

export class DynamicFormWrapperProvider {
  constructor(public dynamicFormsConfigWrapper: DynamicFormWrappersType) {}
  toWrapperOption(mode: 'view' | 'edit'): WrapperOption {
    if (
      Object.prototype.hasOwnProperty.call(
        this.dynamicFormsConfigWrapper,
        'unique',
      )
    ) {
      return (this.dynamicFormsConfigWrapper as DynamicFormWrappersUnique)
        .unique;
    }
    const type = this.dynamicFormsConfigWrapper as DynamicFormWrappersMultiple;
    return mode == 'view' ? type.view : type.edit;
  }
}
