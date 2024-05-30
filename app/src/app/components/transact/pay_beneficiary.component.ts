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

  sd_dvCdE5EBo2c2KQYq(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rIP8bFIQoUGBhzm6(bh);
      //appendnew_next_sd_dvCdE5EBo2c2KQYq
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dvCdE5EBo2c2KQYq');
    }
  }
  //appendnew_flow_pay_beneficiaryComponent_start

  sd_BFDXUB2w6y8MwKRS(bh) {
    try {
      this.page.submitted = false;
      this.page.benArray = undefined;
      this.page.selected = undefined;
      bh = this.sd_qh9tBIQUgkhopSB6(bh);
      //appendnew_next_sd_BFDXUB2w6y8MwKRS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BFDXUB2w6y8MwKRS');
    }
  }

  sd_qh9tBIQUgkhopSB6(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_I6wltKb6FtHkz2j9(bh);
      //appendnew_next_sd_qh9tBIQUgkhopSB6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qh9tBIQUgkhopSB6');
    }
  }

  sd_I6wltKb6FtHkz2j9(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_z6eWW0IN9Q7mDw8a(bh);
      //appendnew_next_sd_I6wltKb6FtHkz2j9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I6wltKb6FtHkz2j9');
    }
  }

  sd_z6eWW0IN9Q7mDw8a(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdurl + 'get-beneficiary-electricity';
      page.collection = 'beneficiary-electricity';

      bh = this.sd_hnfzP0Iqa4LcfxLb(bh);
      //appendnew_next_sd_z6eWW0IN9Q7mDw8a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z6eWW0IN9Q7mDw8a');
    }
  }

  async sd_hnfzP0Iqa4LcfxLb(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.collection,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_rWFN0DYYxNqG3wOk(bh);
      //appendnew_next_sd_hnfzP0Iqa4LcfxLb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hnfzP0Iqa4LcfxLb');
    }
  }

  sd_rWFN0DYYxNqG3wOk(bh) {
    try {
      const page = this.page;
      bh.beneficiaries = page.results.filter((user: any) => {
        return user.accountNumber == page.user.accountNumber;
      });
      page.benArray = bh.beneficiaries;

      console.log(bh.beneficiaries);
      //appendnew_next_sd_rWFN0DYYxNqG3wOk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rWFN0DYYxNqG3wOk');
    }
  }

  sd_rIP8bFIQoUGBhzm6(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      //appendnew_next_sd_rIP8bFIQoUGBhzm6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rIP8bFIQoUGBhzm6');
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
