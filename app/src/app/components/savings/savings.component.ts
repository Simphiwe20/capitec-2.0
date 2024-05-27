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
  selector: 'bh-savings',
  templateUrl: './savings.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class savingsComponent {
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
      this.sd_2Z167GCwTiVxajnR(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2Z167GCwTiVxajnR(bh) {
    try {
      bh = this.sd_NcxYGB4Zjw58EuAK(bh);
      //appendnew_next_sd_2Z167GCwTiVxajnR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2Z167GCwTiVxajnR');
    }
  }

  //appendnew_flow_savingsComponent_start

  sd_NcxYGB4Zjw58EuAK(bh) {
    try {
      this.page.user = this.page.user;
      this.page.message = this.page.message;
      this.page.array = undefined;
      this.page.moneyOut = undefined;
      bh = this.sd_ws3eRWrAAi88Wt29(bh);
      //appendnew_next_sd_NcxYGB4Zjw58EuAK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NcxYGB4Zjw58EuAK');
    }
  }

  sd_ws3eRWrAAi88Wt29(bh) {
    try {
      bh.result = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_HLVusWP0adg7ObT2(bh);
      //appendnew_next_sd_ws3eRWrAAi88Wt29
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ws3eRWrAAi88Wt29');
    }
  }

  sd_HLVusWP0adg7ObT2(bh) {
    try {
      const page = this.page;
      page.user = bh.result;
      bh = this.sd_42Smhw76ZRjv0MtI(bh);
      //appendnew_next_sd_HLVusWP0adg7ObT2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HLVusWP0adg7ObT2');
    }
  }

  sd_42Smhw76ZRjv0MtI(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_D19pftqT303eqcka(bh);
      //appendnew_next_sd_42Smhw76ZRjv0MtI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_42Smhw76ZRjv0MtI');
    }
  }

  sd_D19pftqT303eqcka(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'get-transfers';
      bh.collection = 'money-transfer';
      bh = this.sd_QN2SXvK1d8FAsrrm(bh);
      //appendnew_next_sd_D19pftqT303eqcka
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D19pftqT303eqcka');
    }
  }

  async sd_QN2SXvK1d8FAsrrm(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_dbRonqrl7ouRNVMj(bh);
      //appendnew_next_sd_QN2SXvK1d8FAsrrm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QN2SXvK1d8FAsrrm');
    }
  }

  sd_dbRonqrl7ouRNVMj(bh) {
    try {
      const page = this.page;
      bh.array = bh.results.filter((user: any) => {
        return user.to == page.user[0].accountNumber;
      });

      page.array = bh.array;
      console.log('answer', page.array);

      bh.out = bh.results.filter((user: any) => {
        return user.from == page.user[0].accountNumber;
      });

      page.moneyOut = bh.out;
      console.log('moneyOut', page.moneyOut);

      //appendnew_next_sd_dbRonqrl7ouRNVMj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dbRonqrl7ouRNVMj');
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
  //appendnew_flow_savingsComponent_Catch
}
