// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-forgot_pin',
  templateUrl: './forgot_pin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class forgot_pinComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_T6dILSeHPMfaqtr2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_T6dILSeHPMfaqtr2(bh) {
    try {
      bh = this.sd_O6JJHmmB7oT7vAut(bh);
      //appendnew_next_sd_T6dILSeHPMfaqtr2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T6dILSeHPMfaqtr2');
    }
  }

  route(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_L7oJQGmBIj3KeBoj(bh);
      //appendnew_next_route
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srrWLIPZYLYZnAvf');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VRTlOU5H9L6Ik2je(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wynlsxhndk5Pzft8');
    }
  }
  //appendnew_flow_forgot_pinComponent_start

  sd_O6JJHmmB7oT7vAut(bh) {
    try {
      this.page.routeData = undefined;
      //appendnew_next_sd_O6JJHmmB7oT7vAut
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O6JJHmmB7oT7vAut');
    }
  }

  sd_L7oJQGmBIj3KeBoj(bh) {
    try {
      const page = this.page;
      page.routeData = { data: 'forgot_pwd' };
      // page.routeData = {routeData: JSON.stringify(page.routeData)}
      console.log(page.routeData);
      bh = this.sd_TsVgwgrY0ZEZYaho(bh);
      //appendnew_next_sd_L7oJQGmBIj3KeBoj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L7oJQGmBIj3KeBoj');
    }
  }

  async sd_TsVgwgrY0ZEZYaho(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/prepare_for_selfie');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      this.sd_uWcyFCzMztltwkj8(bh);
      //appendnew_next_sd_TsVgwgrY0ZEZYaho
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TsVgwgrY0ZEZYaho');
    }
  }

  sd_uWcyFCzMztltwkj8(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_uWcyFCzMztltwkj8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uWcyFCzMztltwkj8');
    }
  }

  async sd_VRTlOU5H9L6Ik2je(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.backBtn();

      //appendnew_next_sd_VRTlOU5H9L6Ik2je
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VRTlOU5H9L6Ik2je');
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
  //appendnew_flow_forgot_pinComponent_Catch
}
