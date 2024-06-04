// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class api_service {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_api_service

  async getCustomers(...others) {
    let bh: any = {
      input: {},
      local: {
        customers: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_fqxLeQ5rHACesUM2(bh);
      //appendnew_next_getCustomers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            customers: bh.local.customers,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GHNnLx5QMLnF7xNy');
    }
  }

  async getPayedBen(...others) {
    let bh: any = {
      input: {},
      local: {
        payedBen: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KfcYzuEVjig0V1w9(bh);
      //appendnew_next_getPayedBen
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedBen: bh.local.payedBen,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9E2STombQQOmX4D');
    }
  }

  async getPayedAirtime(...others) {
    let bh: any = {
      input: {},
      local: {
        payedAirtime: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_e9aqPsbpJ0aXFGqb(bh);
      //appendnew_next_getPayedAirtime
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedAirtime: bh.local.payedAirtime,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z3d2TsvKo6PdcZbg');
    }
  }
  //appendnew_flow_api_service_start

  async sd_fqxLeQ5rHACesUM2(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_K9HpgYmNHUAnzuV9(bh);
      //appendnew_next_sd_fqxLeQ5rHACesUM2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fqxLeQ5rHACesUM2');
    }
  }

  async sd_K9HpgYmNHUAnzuV9(bh) {
    try {
      bh.url = bh.ssdURL + 'get-customers';
      bh = await this.sd_bJxLJyh43MwXgsKU(bh);
      //appendnew_next_sd_K9HpgYmNHUAnzuV9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K9HpgYmNHUAnzuV9');
    }
  }

  async sd_bJxLJyh43MwXgsKU(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.customers = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_bJxLJyh43MwXgsKU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bJxLJyh43MwXgsKU');
    }
  }

  async sd_KfcYzuEVjig0V1w9(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_vtyH8nH6k9Oatibb(bh);
      //appendnew_next_sd_KfcYzuEVjig0V1w9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KfcYzuEVjig0V1w9');
    }
  }

  async sd_vtyH8nH6k9Oatibb(bh) {
    try {
      bh.url = bh.ssdURL + 'get-payed-ben';
      bh = await this.sd_WBaewLCC4fUpIakC(bh);
      //appendnew_next_sd_vtyH8nH6k9Oatibb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vtyH8nH6k9Oatibb');
    }
  }

  async sd_WBaewLCC4fUpIakC(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.payedBen = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_WBaewLCC4fUpIakC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WBaewLCC4fUpIakC');
    }
  }

  async sd_e9aqPsbpJ0aXFGqb(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_J0zqCHdVWB3AUklC(bh);
      //appendnew_next_sd_e9aqPsbpJ0aXFGqb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e9aqPsbpJ0aXFGqb');
    }
  }

  async sd_J0zqCHdVWB3AUklC(bh) {
    try {
      bh.url = bh.ssdURL + 'get-airtime';
      bh = await this.sd_o3DabrmHYg5twdEs(bh);
      //appendnew_next_sd_J0zqCHdVWB3AUklC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J0zqCHdVWB3AUklC');
    }
  }

  async sd_o3DabrmHYg5twdEs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.payedAirtime = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_o3DabrmHYg5twdEs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_o3DabrmHYg5twdEs');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_api_service_Catch
}
