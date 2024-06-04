// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-buy_prepaid_mobile_add_ben',
  templateUrl: './buy_prepaid_mobile_add_ben.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class buy_prepaid_mobile_add_benComponent {
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
      this.sd_wr62p43ImUbzs4Dn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wr62p43ImUbzs4Dn(bh) {
    try {
      bh = this.sd_bSHe584qLSNTYCz2(bh);
      //appendnew_next_sd_wr62p43ImUbzs4Dn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wr62p43ImUbzs4Dn');
    }
  }

  sd_tyTSmuGEA6EKXtaG(Index: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { Index };
      bh.local = {};
      bh = this.sd_PZwAwe7Oig9ZcB7a(bh);
      //appendnew_next_sd_tyTSmuGEA6EKXtaG
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tyTSmuGEA6EKXtaG');
    }
  }
  //appendnew_flow_buy_prepaid_mobile_add_benComponent_start

  sd_bSHe584qLSNTYCz2(bh) {
    try {
      this.page.user = undefined;
      this.page.airArray = undefined;
      this.page.selected = undefined;
      bh = this.sd_x82c9DrHU8d7mLTT(bh);
      //appendnew_next_sd_bSHe584qLSNTYCz2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bSHe584qLSNTYCz2');
    }
  }

  sd_x82c9DrHU8d7mLTT(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_jSBc3QOVyKXsqQ5s(bh);
      //appendnew_next_sd_x82c9DrHU8d7mLTT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x82c9DrHU8d7mLTT');
    }
  }

  sd_jSBc3QOVyKXsqQ5s(bh) {
    try {
      this.page.ssdurl = bh.system.environment.properties.ssdURL;
      bh = this.sd_qqfmO7ib8qrqwX5x(bh);
      //appendnew_next_sd_jSBc3QOVyKXsqQ5s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jSBc3QOVyKXsqQ5s');
    }
  }

  sd_qqfmO7ib8qrqwX5x(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdurl + 'get-beneficiary-airtime';
      page.collection = 'beneficiary-airtime';

      bh = this.sd_DFbGfk9ftLxT1x6e(bh);
      //appendnew_next_sd_qqfmO7ib8qrqwX5x
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qqfmO7ib8qrqwX5x');
    }
  }

  async sd_DFbGfk9ftLxT1x6e(bh) {
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
      bh = this.sd_nMaQRRhAySnc8NmT(bh);
      //appendnew_next_sd_DFbGfk9ftLxT1x6e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DFbGfk9ftLxT1x6e');
    }
  }

  sd_nMaQRRhAySnc8NmT(bh) {
    try {
      const page = this.page;
      bh.beneficiaries = page.results.filter((user: any) => {
        return user.accountNumber == page.user.accountNumber;
      });
      page.airArray = bh.beneficiaries;

      console.log(bh.beneficiaries);
      //appendnew_next_sd_nMaQRRhAySnc8NmT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nMaQRRhAySnc8NmT');
    }
  }

  sd_PZwAwe7Oig9ZcB7a(bh) {
    try {
      const page = this.page;
      page.selected = bh.input.Index;
      console.log(page.selected);
      bh = this.sd_8W3ZdWWMtGkJy0Tt(bh);
      //appendnew_next_sd_PZwAwe7Oig9ZcB7a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PZwAwe7Oig9ZcB7a');
    }
  }

  sd_8W3ZdWWMtGkJy0Tt(bh) {
    try {
      sessionStorage.setItem('airtimeBen', JSON.stringify(bh.input.Index));
      //appendnew_next_sd_8W3ZdWWMtGkJy0Tt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8W3ZdWWMtGkJy0Tt');
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
  //appendnew_flow_buy_prepaid_mobile_add_benComponent_Catch
}
