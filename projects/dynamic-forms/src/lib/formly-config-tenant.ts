import { Injectable } from '@angular/core';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldConfigCache } from '@ngx-formly/core/lib/components/formly.field.config';
import {
  ConfigOption,
  TypeOption,
  ValidatorOption,
  WrapperOption,
} from '@ngx-formly/core/lib/services/formly.config';

@Injectable({
  providedIn: 'any',
})
export class FormlyConfigRoot extends FormlyConfig {
  view: FormlyConfig = new FormlyConfig();
  tenant: 'view' | 'edit' = 'edit';
  constructor() {
    super();
  }
  addConfig(config: ConfigOption, tenant: 'view' | 'edit' = 'edit') {
    if (tenant == 'view') {
      return this.view.addConfig(config);
    }
    return super.addConfig(config);
  }
  setTenant(tenant: 'view' | 'edit') {
    this.tenant = tenant;
  }
  setType(options: TypeOption | TypeOption[]) {
    if (this.tenant == 'view') {
      return this.view.setType(options);
    }
    return super.setType(options);
  }
  getType(name: string) {
    if (this.tenant == 'view') {
      return this.view.getType(name);
    }
    return super.getType(name);
  }
  getMergedField(field?: FormlyFieldConfig) {
    return super.getMergedField(field);
  }
  resolveFieldTypeRef(field?: FormlyFieldConfigCache) {
    return super.resolveFieldTypeRef(field);
  }
  setWrapper(options: WrapperOption) {
    if (this.tenant == 'view') {
      return this.view.setWrapper(options);
    }
    return super.setWrapper(options);
  }
  getWrapper(name: string) {
    if (this.tenant == 'view') {
      return this.view.getWrapper(name);
    }
    return super.getWrapper(name);
  }
  setTypeWrapper(type: string, name: string) {
    return super.setTypeWrapper(type, name);
  }
  setValidator(options: ValidatorOption) {
    return super.setValidator(options);
  }
  getValidator(name: string): any {
    return this.getValidator(name);
  }
}
