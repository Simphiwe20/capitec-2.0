// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-set_temporary_limits',
  templateUrl: './set_temporary_limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class set_temporary_limitsComponent {
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
      this.sd_7sPVVw4tcW7QPwdl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7sPVVw4tcW7QPwdl(bh) {
    try {
      bh = this.sd_ioJMVOwHjtQSgVUe(bh);
      //appendnew_next_sd_7sPVVw4tcW7QPwdl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7sPVVw4tcW7QPwdl');
    }
  }

  show(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OfVIsOQkcApx8mWl(bh);
      //appendnew_next_show
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_63L2pNyaQbb1Sb9e');
    }
  }

  updateTemp(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_9cyqnKXfeH43fGTT(bh);
      //appendnew_next_updateTemp
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OL1JHClmEc7zRrBV');
    }
  }
  //appendnew_flow_set_temporary_limitsComponent_start

  sd_ioJMVOwHjtQSgVUe(bh) {
    try {
      this.page.submitted = false;
      this.page.user = undefined;
      this.page.temp = undefined;
      this.page.isChecked = false;
      this.page.isTicked = false;
      this.page.isCorrect = false;
      bh = this.sd_8wWf3PwuMClpKDm3(bh);
      //appendnew_next_sd_ioJMVOwHjtQSgVUe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ioJMVOwHjtQSgVUe');
    }
  }

  sd_8wWf3PwuMClpKDm3(bh) {
    try {
      const page = this.page;
      page.user = bh.result;
      console.log(page.user);

      page.temp = {
        cash_withdrawals: '',
        card_machine: '',
        online_scan: '',
      };
      bh = this.sd_BKdOnjphYG3nUyRL(bh);
      //appendnew_next_sd_8wWf3PwuMClpKDm3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8wWf3PwuMClpKDm3');
    }
  }

  sd_BKdOnjphYG3nUyRL(bh) {
    try {
      bh.result = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_w2tEWoBB2xSJ0F5l(bh);
      //appendnew_next_sd_BKdOnjphYG3nUyRL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKdOnjphYG3nUyRL');
    }
  }

  sd_w2tEWoBB2xSJ0F5l(bh) {
    try {
      const page = this.page;
      page.user = bh.result;
      console.log(page.user);
      //appendnew_next_sd_w2tEWoBB2xSJ0F5l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w2tEWoBB2xSJ0F5l');
    }
  }

  sd_OfVIsOQkcApx8mWl(bh) {
    try {
      //appendnew_next_sd_OfVIsOQkcApx8mWl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OfVIsOQkcApx8mWl');
    }
  }

  sd_9cyqnKXfeH43fGTT(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_Olc1II6X8cQXbS64(bh);
      //appendnew_next_sd_9cyqnKXfeH43fGTT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9cyqnKXfeH43fGTT');
    }
  }

  async sd_Olc1II6X8cQXbS64(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Awg3KLbNOUcax2mZ(bh);
      } else {
        bh = await this.sd_o3ymNwIG0iANYxHj(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Olc1II6X8cQXbS64');
    }
  }

  sd_Awg3KLbNOUcax2mZ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Ke yona', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_8Zbrp0jCGt4Vq3Dz(bh);
      //appendnew_next_sd_Awg3KLbNOUcax2mZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Awg3KLbNOUcax2mZ');
    }
  }

  sd_8Zbrp0jCGt4Vq3Dz(bh) {
    try {
      const page = this.page;
      // page.temp.online_scan
      // page.temp.card_machine
      // page.temp.cash_withdrawals

      page.user.cash_withdrawal_limit_temp = page.temp.cash_withdrawals;
      page.user.card_purchases_limit_temp = page.temp.card_machine;
      page.user.online_scan_to_pay_phone_temp = page.temp.online_scan;

      console.log(page.user);
      bh = this.sd_ki72vvtB5kK5AtwY(bh);
      //appendnew_next_sd_8Zbrp0jCGt4Vq3Dz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Zbrp0jCGt4Vq3Dz');
    }
  }

  sd_ki72vvtB5kK5AtwY(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_F8FLyGenPnI7JNRo(bh);
      //appendnew_next_sd_ki72vvtB5kK5AtwY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ki72vvtB5kK5AtwY');
    }
  }

  sd_F8FLyGenPnI7JNRo(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';

      bh = this.sd_E1csG2yqYNo355nw(bh);
      //appendnew_next_sd_F8FLyGenPnI7JNRo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F8FLyGenPnI7JNRo');
    }
  }

  async sd_E1csG2yqYNo355nw(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.user,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_RuRvmvAAaLF3I9iG(bh);
      //appendnew_next_sd_E1csG2yqYNo355nw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E1csG2yqYNo355nw');
    }
  }

  sd_RuRvmvAAaLF3I9iG(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(bh.body));
      bh = this.sd_HkdUHoOyrV7dkEya(bh);
      //appendnew_next_sd_RuRvmvAAaLF3I9iG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RuRvmvAAaLF3I9iG');
    }
  }

  async sd_HkdUHoOyrV7dkEya(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/cards');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_3pSe9lC8E3ISnjO4(bh);
      //appendnew_next_sd_HkdUHoOyrV7dkEya
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HkdUHoOyrV7dkEya');
    }
  }

  sd_3pSe9lC8E3ISnjO4(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Temporary limits successfully updated', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_3pSe9lC8E3ISnjO4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3pSe9lC8E3ISnjO4');
    }
  }

  sd_o3ymNwIG0iANYxHj(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('No Limits Set', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_o3ymNwIG0iANYxHj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_o3ymNwIG0iANYxHj');
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
  //appendnew_flow_set_temporary_limitsComponent_Catch
}
