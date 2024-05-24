// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verify_identity',
  templateUrl: './verify_identity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verify_identityComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_i6iHe29eUO6MYHEV(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_i6iHe29eUO6MYHEV(bh) {
    try {
      bh = this.sd_iqcHnNX7jsgHG1KD(bh);
      //appendnew_next_sd_i6iHe29eUO6MYHEV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i6iHe29eUO6MYHEV');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      this.sd_MzwQKtXGUbXHRXL7(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r8Re82cZT1k3uHjb');
    }
  }

  upload(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_ghCy4D8XsVpSIUTz(bh);
      //appendnew_next_upload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TjoN80UNYFtZLJxm');
    }
  }
  //appendnew_flow_verify_identityComponent_start

  sd_iqcHnNX7jsgHG1KD(bh) {
    try {
      this.page.clientDetails = undefined;
      bh = this.sd_vh3M7aFNa9ZH2tRe(bh);
      //appendnew_next_sd_iqcHnNX7jsgHG1KD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iqcHnNX7jsgHG1KD');
    }
  }

  sd_vh3M7aFNa9ZH2tRe(bh) {
    try {
      const page = this.page;
      page.clientDetails = {
        fullName: '',
        email: '',
        idNum: '',
        pin: '',
        confirmPin: '',
      };
      //appendnew_next_sd_vh3M7aFNa9ZH2tRe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vh3M7aFNa9ZH2tRe');
    }
  }

  sd_MzwQKtXGUbXHRXL7(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page);
      //appendnew_next_sd_MzwQKtXGUbXHRXL7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MzwQKtXGUbXHRXL7');
    }
  }

  sd_ghCy4D8XsVpSIUTz(bh) {
    try {
      const page = this.page;
      console.log(bh.input.event);
      //appendnew_next_sd_ghCy4D8XsVpSIUTz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ghCy4D8XsVpSIUTz');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_verify_identityComponent_Catch
}
