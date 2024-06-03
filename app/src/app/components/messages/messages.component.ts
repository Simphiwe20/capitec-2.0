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
  selector: 'bh-messages',
  templateUrl: './messages.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class messagesComponent {
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
      this.sd_LcvImEeazBu1tGQG(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_LcvImEeazBu1tGQG(bh) {
    try {
      bh = this.sd_AIGBMD2nlwzvORPj(bh);
      //appendnew_next_sd_LcvImEeazBu1tGQG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LcvImEeazBu1tGQG');
    }
  }

  getElectricity(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KgAvLx72RX0GLFJx(bh);
      //appendnew_next_getElectricity
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NjfHHCxJjOJV0vnR');
    }
  }

  getScan(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_z5ioaXk9YOX0ts3M(bh);
      //appendnew_next_getScan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaF0Ztq3Kbxr1bor');
    }
  }
  //appendnew_flow_messagesComponent_start

  sd_AIGBMD2nlwzvORPj(bh) {
    try {
      this.page.electricity_array = undefined;
      this.page.scanned = undefined;
      bh = this.sd_2hOeDMIyzMBjcPQY(bh);
      //appendnew_next_sd_AIGBMD2nlwzvORPj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AIGBMD2nlwzvORPj');
    }
  }

  sd_2hOeDMIyzMBjcPQY(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_sb37rx6rCjTtbVKW(bh);
      //appendnew_next_sd_2hOeDMIyzMBjcPQY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2hOeDMIyzMBjcPQY');
    }
  }

  sd_sb37rx6rCjTtbVKW(bh) {
    try {
      let outputVariables = this.getElectricity();

      bh = this.sd_l4mT5WuaoncAuKC5(bh);
      //appendnew_next_sd_sb37rx6rCjTtbVKW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sb37rx6rCjTtbVKW');
    }
  }

  sd_l4mT5WuaoncAuKC5(bh) {
    try {
      let outputVariables = this.getScan();

      //appendnew_next_sd_l4mT5WuaoncAuKC5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l4mT5WuaoncAuKC5');
    }
  }

  sd_KgAvLx72RX0GLFJx(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_Gj8SZ3kfDvMOjBJt(bh);
      //appendnew_next_sd_KgAvLx72RX0GLFJx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KgAvLx72RX0GLFJx');
    }
  }

  sd_Gj8SZ3kfDvMOjBJt(bh) {
    try {
      const page = this.page;
      bh.url_electric = page.ssdUrl + 'get-electricity';

      bh.body = {
        collection: 'electricity',
      };
      bh = this.sd_kWxlBgP7jub4HX9j(bh);
      //appendnew_next_sd_Gj8SZ3kfDvMOjBJt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gj8SZ3kfDvMOjBJt');
    }
  }

  async sd_kWxlBgP7jub4HX9j(bh) {
    try {
      let requestOptions = {
        url: bh.url_electric,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_R435umt3s3rq9mO0(bh);
      //appendnew_next_sd_kWxlBgP7jub4HX9j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kWxlBgP7jub4HX9j');
    }
  }

  sd_R435umt3s3rq9mO0(bh) {
    try {
      const page = this.page;
      bh.electricity = page.result.filter((user: any) => {
        return user.accountNumber == page.user.accountNumber;
      });

      page.electricity_array = bh.electricity;
      console.log(page.electricity_array);

      //appendnew_next_sd_R435umt3s3rq9mO0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R435umt3s3rq9mO0');
    }
  }

  sd_z5ioaXk9YOX0ts3M(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_6vsQuDjlD3pho4J4(bh);
      //appendnew_next_sd_z5ioaXk9YOX0ts3M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z5ioaXk9YOX0ts3M');
    }
  }

  sd_6vsQuDjlD3pho4J4(bh) {
    try {
      const page = this.page;
      bh.url_scanned = page.ssdUrl + 'get-scanned';

      bh.body = {
        collection: 'scan_to_pay',
      };
      bh = this.sd_ldDcrkXEyoSKYHhf(bh);
      //appendnew_next_sd_6vsQuDjlD3pho4J4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6vsQuDjlD3pho4J4');
    }
  }

  async sd_ldDcrkXEyoSKYHhf(bh) {
    try {
      let requestOptions = {
        url: bh.url_scanned,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_93Acfxr8d3FbtmFT(bh);
      //appendnew_next_sd_ldDcrkXEyoSKYHhf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ldDcrkXEyoSKYHhf');
    }
  }

  sd_93Acfxr8d3FbtmFT(bh) {
    try {
      const page = this.page;
      bh.scanner = page.results.filter((user: any) => {
        return user.accountNumber == page.user.accountNumber;
      });

      page.scanned = bh.scanner;

      this.sd_ynRwhDUnQNwi2w7H(bh);
      //appendnew_next_sd_93Acfxr8d3FbtmFT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_93Acfxr8d3FbtmFT');
    }
  }

  sd_ynRwhDUnQNwi2w7H(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.scanned);
      //appendnew_next_sd_ynRwhDUnQNwi2w7H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ynRwhDUnQNwi2w7H');
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
  //appendnew_flow_messagesComponent_Catch
}
