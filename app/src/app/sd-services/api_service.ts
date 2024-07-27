// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { BehaviorSubject } from 'rxjs'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class api_service {
  public obsData: any;
  public behaviourSubject: any;
  public userInfor: any;
  public userPic: any;

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

  async getMoneyBen(...others) {
    let bh: any = {
      input: {},
      local: {
        moneyBen: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KVt7NGYNwJrxTqPO(bh);
      //appendnew_next_getMoneyBen
      return (
        // formatting output variables
        {
          input: {},
          local: {
            moneyBen: bh.local.moneyBen,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FJofPlsHqGBkJe3O');
    }
  }

  async getPayedElec(...others) {
    let bh: any = {
      input: {},
      local: {
        payedElec: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_T79IAeLu6PXxvdql(bh);
      //appendnew_next_getPayedElec
      return (
        // formatting output variables
        {
          input: {},
          local: {
            payedElec: bh.local.payedElec,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lv9c0KuuUMuUxYte');
    }
  }

  async getTransferMoney(...others) {
    let bh: any = {
      input: {},
      local: {
        transfers: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_5tARe3LfURlAr4MB(bh);
      //appendnew_next_getTransferMoney
      return (
        // formatting output variables
        {
          input: {},
          local: {
            transfers: bh.local.transfers,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ey0IAEmoZQEG0m2M');
    }
  }

  async getScanToPays(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_MNmXfZSoBXwLE4px(bh);
      //appendnew_next_getScanToPays
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X9Ki5udKGbeMjaKc');
    }
  }

  async backBtn(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_m4OWdOGmMIuYa2IB(bh);
      //appendnew_next_backBtn
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_crCsmk2T9Wr8C9jG');
    }
  }

  async addTransMessage(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_sJfa0G6v2cm7tZy3(bh);
      //appendnew_next_addTransMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zfYNdk36d9C7KQzH');
    }
  }

  async updateUser(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_so2YliGJxhuBdv1H(bh);
      //appendnew_next_updateUser
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lY0defyqXhQJt4BJ');
    }
  }

  async getTransMessage(isFooter: any = undefined, ...others) {
    let bh: any = {
      input: {
        isFooter,
      },
      local: {
        messages: undefined,
        Obs: undefined,
        bhSub: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_Rwa9h6jtGJfMb4XW(bh);
      //appendnew_next_getTransMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {
            messages: bh.local.messages,
            Obs: bh.local.Obs,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MoMIY02qFsSklHfG');
    }
  }

  async updateTransMessage(message: any = undefined, ...others) {
    let bh: any = {
      input: {
        message,
      },
      local: {
        counts: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_NifhwVNgnBWF0Txq(bh);
      //appendnew_next_updateTransMessage
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6Sij7Ib64exZaxKV');
    }
  }

  async uploadFile(url: any = undefined, file: any = undefined, ...others) {
    let bh: any = {
      input: {
        url,
        file,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_B52qXwwdrQFiwvrV(bh);
      //appendnew_next_uploadFile
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K89688EUbbJ6GXjO');
    }
  }

  async setInfor(userInfor: any = undefined, ...others) {
    let bh: any = {
      input: {
        userInfor,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_5JUdc9oiAlJoh05e(bh);
      //appendnew_next_setInfor
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zkS5LAb1i6lpVHqi');
    }
  }

  async getInfor(...others) {
    let bh: any = {
      input: {},
      local: {
        userInfor: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_a1Ynda0NYfNJnGxY(bh);
      //appendnew_next_getInfor
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userInfor: bh.local.userInfor,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cC4wuVYpKaj5P3Di');
    }
  }

  async setPic(userImage: any = undefined, ...others) {
    let bh: any = {
      input: {
        userImage,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_6WjkGdpWYZVpsbyK(bh);
      //appendnew_next_setPic
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5UGzOEy4mOe0ZnWE');
    }
  }

  async getPic(...others) {
    let bh: any = {
      input: {},
      local: {
        userImage: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_iRD94c0kAfDoKGFy(bh);
      //appendnew_next_getPic
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userImage: bh.local.userImage,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xLeM7OqXo1NurqSE');
    }
  }

  async getUserPic(...others) {
    let bh: any = {
      input: {},
      local: {
        userPicURL: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_3CTfC543xJYNzW6I(bh);
      //appendnew_next_getUserPic
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userPicURL: bh.local.userPicURL,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m8yNWlrcErzJuL0T');
    }
  }

  async observeUpdates(message: any = undefined, ...others) {
    let bh: any = {
      input: {
        message,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_rqLx5shexL6Q8Pyx(bh);
      //appendnew_next_observeUpdates
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KwG5AieqZoONpUbw');
    }
  }

  async getLoans(...others) {
    let bh: any = {
      input: {},
      local: {
        Loans: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_TmpOisgZnbCSlFF0(bh);
      //appendnew_next_getLoans
      return (
        // formatting output variables
        {
          input: {},
          local: {
            Loans: bh.local.Loans,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Eq7wG5g5TyIO4m9o');
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

  async sd_KVt7NGYNwJrxTqPO(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_8dSDd6gXh4Z36fBw(bh);
      //appendnew_next_sd_KVt7NGYNwJrxTqPO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KVt7NGYNwJrxTqPO');
    }
  }

  async sd_8dSDd6gXh4Z36fBw(bh) {
    try {
      bh.url = bh.ssdURL + 'get-beneficiary-money';
      bh = await this.sd_f1N0Yoe4jsUcm9Rs(bh);
      //appendnew_next_sd_8dSDd6gXh4Z36fBw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8dSDd6gXh4Z36fBw');
    }
  }

  async sd_f1N0Yoe4jsUcm9Rs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.moneyBen = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_f1N0Yoe4jsUcm9Rs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f1N0Yoe4jsUcm9Rs');
    }
  }

  async sd_T79IAeLu6PXxvdql(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_wQg1DFAkEyJT5tnI(bh);
      //appendnew_next_sd_T79IAeLu6PXxvdql
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_T79IAeLu6PXxvdql');
    }
  }

  async sd_wQg1DFAkEyJT5tnI(bh) {
    try {
      bh.url = bh.ssdURL + 'get-electricity';
      bh = await this.sd_wLhHq6B8nsX0Tcan(bh);
      //appendnew_next_sd_wQg1DFAkEyJT5tnI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wQg1DFAkEyJT5tnI');
    }
  }

  async sd_wLhHq6B8nsX0Tcan(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.payedElec = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_wLhHq6B8nsX0Tcan
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wLhHq6B8nsX0Tcan');
    }
  }

  async sd_5tARe3LfURlAr4MB(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_aAvFd84iLEVzEjL3(bh);
      //appendnew_next_sd_5tARe3LfURlAr4MB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5tARe3LfURlAr4MB');
    }
  }

  async sd_aAvFd84iLEVzEjL3(bh) {
    try {
      bh.url = bh.ssdURL + 'get-transfers';
      bh = await this.sd_VICE2TIOvt07QF7d(bh);
      //appendnew_next_sd_aAvFd84iLEVzEjL3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAvFd84iLEVzEjL3');
    }
  }

  async sd_VICE2TIOvt07QF7d(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.transfers = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_VICE2TIOvt07QF7d
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VICE2TIOvt07QF7d');
    }
  }

  async sd_MNmXfZSoBXwLE4px(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_RXKZ4PGxr9qAAEto(bh);
      //appendnew_next_sd_MNmXfZSoBXwLE4px
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MNmXfZSoBXwLE4px');
    }
  }

  async sd_RXKZ4PGxr9qAAEto(bh) {
    try {
      bh.url = bh.ssdURL + 'get-scanned';
      bh = await this.sd_gYnpQ8sGpRFqdwFE(bh);
      //appendnew_next_sd_RXKZ4PGxr9qAAEto
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RXKZ4PGxr9qAAEto');
    }
  }

  async sd_gYnpQ8sGpRFqdwFE(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.data = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_gYnpQ8sGpRFqdwFE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gYnpQ8sGpRFqdwFE');
    }
  }

  async sd_m4OWdOGmMIuYa2IB(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_lOgX1OtLdbgGEDrx(bh);
      //appendnew_next_sd_m4OWdOGmMIuYa2IB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_m4OWdOGmMIuYa2IB');
    }
  }

  async sd_lOgX1OtLdbgGEDrx(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_lOgX1OtLdbgGEDrx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lOgX1OtLdbgGEDrx');
    }
  }

  async sd_sJfa0G6v2cm7tZy3(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_1ICd6JvqgLGGeq76(bh);
      //appendnew_next_sd_sJfa0G6v2cm7tZy3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sJfa0G6v2cm7tZy3');
    }
  }

  async sd_1ICd6JvqgLGGeq76(bh) {
    try {
      bh.url = bh.url + 'add-messages';
      bh.message = bh.input.data;

      console.log('From Service: ', bh.message);

      // if(data._type === 'payment') {

      // }
      bh = await this.sd_C1AV4u7mYjAOeoex(bh);
      //appendnew_next_sd_1ICd6JvqgLGGeq76
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ICd6JvqgLGGeq76');
    }
  }

  async sd_C1AV4u7mYjAOeoex(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.message,
      };
      bh.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_C1AV4u7mYjAOeoex
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_C1AV4u7mYjAOeoex');
    }
  }

  async sd_so2YliGJxhuBdv1H(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_fBiOvocm5DLqbORF(bh);
      //appendnew_next_sd_so2YliGJxhuBdv1H
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_so2YliGJxhuBdv1H');
    }
  }

  async sd_fBiOvocm5DLqbORF(bh) {
    try {
      bh.url = bh.url + 'update';

      bh.user = bh.input.data;
      bh = await this.sd_DqBETi9MKlf1U8IT(bh);
      //appendnew_next_sd_fBiOvocm5DLqbORF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fBiOvocm5DLqbORF');
    }
  }

  async sd_DqBETi9MKlf1U8IT(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.user,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_DqBETi9MKlf1U8IT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DqBETi9MKlf1U8IT');
    }
  }

  async sd_Rwa9h6jtGJfMb4XW(bh) {
    try {
      bh.behaviorSubject = BehaviorSubject;
      bh = await this.sd_G5q3O9ZxQ4L60k7R(bh);
      //appendnew_next_sd_Rwa9h6jtGJfMb4XW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rwa9h6jtGJfMb4XW');
    }
  }

  async sd_G5q3O9ZxQ4L60k7R(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_SB50TJb95C4AmLA9(bh);
      //appendnew_next_sd_G5q3O9ZxQ4L60k7R
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G5q3O9ZxQ4L60k7R');
    }
  }

  async sd_SB50TJb95C4AmLA9(bh) {
    try {
      bh.url = bh.url + 'get-messages';

      console.log('From Service: ', bh.message);

      if (bh.input.isFooter) {
        bh.local.bhSub = new bh.behaviorSubject({ data: 'not available' });
        // bh.local.bhSub = bh.Subject
        bh.local.Obs = bh.local.bhSub.asObservable();

        console.log('Behavior subject to emit a new value to', bh.local.bhSub);

        console.log('Observables to subscribe to: ', bh.local.Obs);
      }

      bh = await this.sd_cGLHq0aplermAVDe(bh);
      //appendnew_next_sd_SB50TJb95C4AmLA9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SB50TJb95C4AmLA9');
    }
  }

  async sd_cGLHq0aplermAVDe(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.messages = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_JwskMXdc66VOUsVJ(bh);
      //appendnew_next_sd_cGLHq0aplermAVDe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cGLHq0aplermAVDe');
    }
  }

  async sd_JwskMXdc66VOUsVJ(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.isFooter,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1Vtd4IFBK5G80UhL(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JwskMXdc66VOUsVJ');
    }
  }

  async sd_1Vtd4IFBK5G80UhL(bh) {
    try {
      this.obsData = bh.local.Obs;
      this.behaviourSubject = bh.local.bhSub;
      //appendnew_next_sd_1Vtd4IFBK5G80UhL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Vtd4IFBK5G80UhL');
    }
  }

  async sd_NifhwVNgnBWF0Txq(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_PiB0C8Y8oIElspMj(bh);
      //appendnew_next_sd_NifhwVNgnBWF0Txq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NifhwVNgnBWF0Txq');
    }
  }

  async sd_PiB0C8Y8oIElspMj(bh) {
    try {
      bh.url = bh.url + 'update-message';
      bh.message = bh.input.message;
      console.log('Update message From Service: ', bh.message);

      // if(bh.message.read) {
      //     Number(bh.local.counts)--
      //     console.log(bh.local.counts)
      // }else {
      //     Number(bh.local.counts++)
      //     console.log(counts)
      // }

      console.log('Counts: ', bh.local.counts);
      bh = await this.sd_UUIfMEVneWZQE2Xd(bh);
      //appendnew_next_sd_PiB0C8Y8oIElspMj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PiB0C8Y8oIElspMj');
    }
  }

  async sd_UUIfMEVneWZQE2Xd(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.message,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_D4DCaKINdfigDQrp(bh);
      //appendnew_next_sd_UUIfMEVneWZQE2Xd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UUIfMEVneWZQE2Xd');
    }
  }

  async sd_D4DCaKINdfigDQrp(bh) {
    try {
      let outputVariables = await this.observeUpdates(bh.message);

      //appendnew_next_sd_D4DCaKINdfigDQrp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D4DCaKINdfigDQrp');
    }
  }

  async sd_B52qXwwdrQFiwvrV(bh) {
    try {
      bh.url = bh.system.environment.properties.ssdURL;
      bh = await this.sd_hStNMnPwaTtF2r7r(bh);
      //appendnew_next_sd_B52qXwwdrQFiwvrV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_B52qXwwdrQFiwvrV');
    }
  }

  async sd_hStNMnPwaTtF2r7r(bh) {
    try {
      bh.url = bh.url + bh.input.url;
      bh = await this.sd_SIKRF6VpAl8mFwdI(bh);
      //appendnew_next_sd_hStNMnPwaTtF2r7r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hStNMnPwaTtF2r7r');
    }
  }

  async sd_SIKRF6VpAl8mFwdI(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.file,
      };
      bh.res = await this.sdService.nHttpRequest(requestOptions);
      this.sd_GXVk6pvk8r9wM73s(bh);
      //appendnew_next_sd_SIKRF6VpAl8mFwdI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SIKRF6VpAl8mFwdI');
    }
  }

  async sd_GXVk6pvk8r9wM73s(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.res);
      //appendnew_next_sd_GXVk6pvk8r9wM73s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GXVk6pvk8r9wM73s');
    }
  }

  async sd_5JUdc9oiAlJoh05e(bh) {
    try {
      this.userInfor = bh.input.userInfor;
      bh = await this.sd_8SZC3ZI8wqTECaeS(bh);
      //appendnew_next_sd_5JUdc9oiAlJoh05e
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5JUdc9oiAlJoh05e');
    }
  }

  async sd_8SZC3ZI8wqTECaeS(bh) {
    try {
      console.log(bh.input.userInfor);
      //appendnew_next_sd_8SZC3ZI8wqTECaeS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8SZC3ZI8wqTECaeS');
    }
  }

  async sd_a1Ynda0NYfNJnGxY(bh) {
    try {
      bh.local.userInfor = this.userInfor;
      //appendnew_next_sd_a1Ynda0NYfNJnGxY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a1Ynda0NYfNJnGxY');
    }
  }

  async sd_6WjkGdpWYZVpsbyK(bh) {
    try {
      this.userPic = bh.input.userImage;
      bh = await this.sd_ZfgFDu6Hg9x8iLnv(bh);
      //appendnew_next_sd_6WjkGdpWYZVpsbyK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6WjkGdpWYZVpsbyK');
    }
  }

  async sd_ZfgFDu6Hg9x8iLnv(bh) {
    try {
      console.log('User Image from service: ', bh.input.userImage);
      //appendnew_next_sd_ZfgFDu6Hg9x8iLnv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZfgFDu6Hg9x8iLnv');
    }
  }

  async sd_iRD94c0kAfDoKGFy(bh) {
    try {
      bh.local.userImage = this.userPic;
      //appendnew_next_sd_iRD94c0kAfDoKGFy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iRD94c0kAfDoKGFy');
    }
  }

  async sd_3CTfC543xJYNzW6I(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_ciieWMmG6T0qRUsx(bh);
      //appendnew_next_sd_3CTfC543xJYNzW6I
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3CTfC543xJYNzW6I');
    }
  }

  async sd_ciieWMmG6T0qRUsx(bh) {
    try {
      bh.user = JSON.parse(localStorage.getItem('accNo'));
      bh = await this.sd_x9ci2oasaaDNn9fi(bh);
      //appendnew_next_sd_ciieWMmG6T0qRUsx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ciieWMmG6T0qRUsx');
    }
  }

  async sd_x9ci2oasaaDNn9fi(bh) {
    try {
      bh.local.userPicURL = bh.ssdURL + `download-picture/${bh.user.email}`;
      console.log(bh.local.userPicURL);
      //appendnew_next_sd_x9ci2oasaaDNn9fi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x9ci2oasaaDNn9fi');
    }
  }

  async sd_rqLx5shexL6Q8Pyx(bh) {
    try {
      bh.Subject = this.behaviourSubject;
      bh = await this.sd_TAd8A0jJtrrG6PGM(bh);
      //appendnew_next_sd_rqLx5shexL6Q8Pyx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rqLx5shexL6Q8Pyx');
    }
  }

  async sd_TAd8A0jJtrrG6PGM(bh) {
    try {
      let obj: Object = { count: 0 };

      // bh.Subject = new bh.behaviorSubject
      // bh.local.Obs = bh.Subject.asObservable()

      console.log('Before: ', bh.Subject);

      bh.Subject.next(bh.input.message);

      console.log('After: ', bh.Subject);

      //appendnew_next_sd_TAd8A0jJtrrG6PGM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TAd8A0jJtrrG6PGM');
    }
  }

  async sd_TmpOisgZnbCSlFF0(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = await this.sd_iAL4nB2Qo4BBoR0k(bh);
      //appendnew_next_sd_TmpOisgZnbCSlFF0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TmpOisgZnbCSlFF0');
    }
  }

  async sd_iAL4nB2Qo4BBoR0k(bh) {
    try {
      bh.url = bh.ssdURL + 'get-loans';
      bh = await this.sd_mldnQ91Jffow9AD0(bh);
      //appendnew_next_sd_iAL4nB2Qo4BBoR0k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iAL4nB2Qo4BBoR0k');
    }
  }

  async sd_mldnQ91Jffow9AD0(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.Loans = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_mldnQ91Jffow9AD0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mldnQ91Jffow9AD0');
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
