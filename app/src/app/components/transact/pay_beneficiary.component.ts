// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-pay_beneficiary',
  templateUrl: './pay_beneficiary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pay_beneficiaryComponent {
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
      this.sd_lzNe04xIa08dVtzb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_lzNe04xIa08dVtzb(bh) {
    try {
      bh = this.sd_BFDXUB2w6y8MwKRS(bh);
      //appendnew_next_sd_lzNe04xIa08dVtzb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lzNe04xIa08dVtzb');
    }
  }

  routeBen(ben: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { ben };
      bh.local = {};
      bh = this.sd_CdrNSks9iMQacITh(bh);
      //appendnew_next_routeBen
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o6RbSsgtTWfOb8I9');
    }
  }
  //appendnew_flow_pay_beneficiaryComponent_start

  sd_BFDXUB2w6y8MwKRS(bh) {
    try {
      this.page.initials = undefined;
      bh = this.sd_l94TVFVFgSBTzcn6(bh);
      //appendnew_next_sd_BFDXUB2w6y8MwKRS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BFDXUB2w6y8MwKRS');
    }
  }

  sd_l94TVFVFgSBTzcn6(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_PsVSDHNsPlUgPjxX(bh);
      //appendnew_next_sd_l94TVFVFgSBTzcn6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l94TVFVFgSBTzcn6');
    }
  }

  sd_PsVSDHNsPlUgPjxX(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-beneficiary-money';
      bh = this.sd_aLFfNrtl2AkPwbMV(bh);
      //appendnew_next_sd_PsVSDHNsPlUgPjxX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PsVSDHNsPlUgPjxX');
    }
  }

  async sd_aLFfNrtl2AkPwbMV(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.ben = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_aLFfNrtl2AkPwbMV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aLFfNrtl2AkPwbMV');
    }
  }

  sd_CdrNSks9iMQacITh(bh) {
    try {
      const page = this.page;
      page.routeData = { routeData: JSON.stringify(bh.input.ben) };
      bh = this.sd_RujuLoAQ4WQmDoWC(bh);
      //appendnew_next_sd_CdrNSks9iMQacITh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CdrNSks9iMQacITh');
    }
  }

  async sd_RujuLoAQ4WQmDoWC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/pay_user');
      this.page.result = await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_RujuLoAQ4WQmDoWC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RujuLoAQ4WQmDoWC');
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
  //appendnew_flow_pay_beneficiaryComponent_Catch
}
