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
  selector: 'bh-update_permanent_limits',
  templateUrl: './update_permanent_limits.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class update_permanent_limitsComponent {
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
      this.sd_bfApQau7rm5BSggd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bfApQau7rm5BSggd(bh) {
    try {
      bh = this.sd_McqC2bcbekB3X9qo(bh);
      //appendnew_next_sd_bfApQau7rm5BSggd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bfApQau7rm5BSggd');
    }
  }

  updatePerm(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_UoR3N2LOezVoGzZT(bh);
      //appendnew_next_updatePerm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9KZv2RncQO2OEjVt');
    }
  }
  //appendnew_flow_update_permanent_limitsComponent_start

  sd_McqC2bcbekB3X9qo(bh) {
    try {
      this.page.submitted = undefined;
      this.page.user = undefined;
      this.page.perm = undefined;
      bh = this.sd_eOQWbhnv1HXUlxyQ(bh);
      //appendnew_next_sd_McqC2bcbekB3X9qo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_McqC2bcbekB3X9qo');
    }
  }

  sd_eOQWbhnv1HXUlxyQ(bh) {
    try {
      const page = this.page;
      page.user = bh.result;
      console.log(page.user);

      page.perm = {
        cash_withdrawals_perm: '',
        card_machine_perm: '',
        online_scan_perm: '',
      };
      bh = this.sd_mitctppfkplUIjOk(bh);
      //appendnew_next_sd_eOQWbhnv1HXUlxyQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eOQWbhnv1HXUlxyQ');
    }
  }

  sd_mitctppfkplUIjOk(bh) {
    try {
      bh.result = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_TERta0VjKJRaWevk(bh);
      //appendnew_next_sd_mitctppfkplUIjOk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mitctppfkplUIjOk');
    }
  }

  sd_TERta0VjKJRaWevk(bh) {
    try {
      const page = this.page;
      page.user = bh.result;
      console.log(page.user);
      //appendnew_next_sd_TERta0VjKJRaWevk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TERta0VjKJRaWevk');
    }
  }

  sd_UoR3N2LOezVoGzZT(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_oUPQxZ4v5f7zDtxA(bh);
      //appendnew_next_sd_UoR3N2LOezVoGzZT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UoR3N2LOezVoGzZT');
    }
  }

  async sd_oUPQxZ4v5f7zDtxA(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_rpMjXzTczUyYzXm0(bh);
      } else {
        bh = await this.sd_wdTQmhnvrX0bNhwe(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oUPQxZ4v5f7zDtxA');
    }
  }

  sd_rpMjXzTczUyYzXm0(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Ke yona', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_s4QRNu9yVPZAuHsK(bh);
      //appendnew_next_sd_rpMjXzTczUyYzXm0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rpMjXzTczUyYzXm0');
    }
  }

  sd_s4QRNu9yVPZAuHsK(bh) {
    try {
      const page = this.page;
      page.user.cash_withdrawal_limit = page.perm.cash_withdrawals_perm;
      page.user.card_purchases_limit = page.perm.card_machine_perm;
      page.user.online_scan_to_pay_phone = page.perm.online_scan_perm;

      console.log(page.user);
      bh = this.sd_1k50Gxk7T11n99Y8(bh);
      //appendnew_next_sd_s4QRNu9yVPZAuHsK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4QRNu9yVPZAuHsK');
    }
  }

  sd_1k50Gxk7T11n99Y8(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_7j7Wcpx8CSu9qsVu(bh);
      //appendnew_next_sd_1k50Gxk7T11n99Y8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1k50Gxk7T11n99Y8');
    }
  }

  sd_7j7Wcpx8CSu9qsVu(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'update';

      bh = this.sd_L4sN7rUf0h2gM5aS(bh);
      //appendnew_next_sd_7j7Wcpx8CSu9qsVu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7j7Wcpx8CSu9qsVu');
    }
  }

  async sd_L4sN7rUf0h2gM5aS(bh) {
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
      bh = this.sd_8QlAMX8VeX4GeJHB(bh);
      //appendnew_next_sd_L4sN7rUf0h2gM5aS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L4sN7rUf0h2gM5aS');
    }
  }

  sd_8QlAMX8VeX4GeJHB(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(bh.body));
      bh = this.sd_gMbfVjlrqDYY9614(bh);
      //appendnew_next_sd_8QlAMX8VeX4GeJHB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8QlAMX8VeX4GeJHB');
    }
  }

  sd_gMbfVjlrqDYY9614(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Permanent limits successfully updated', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_8RWqVLz5KshcM2Bq(bh);
      //appendnew_next_sd_gMbfVjlrqDYY9614
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gMbfVjlrqDYY9614');
    }
  }

  sd_8RWqVLz5KshcM2Bq(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(this.page.user));
      bh = this.sd_IMDUZzue6kLKwj5O(bh);
      //appendnew_next_sd_8RWqVLz5KshcM2Bq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8RWqVLz5KshcM2Bq');
    }
  }

  async sd_IMDUZzue6kLKwj5O(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/logged_in_landing/home');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_IMDUZzue6kLKwj5O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IMDUZzue6kLKwj5O');
    }
  }

  sd_wdTQmhnvrX0bNhwe(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('No Limits Set', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_wdTQmhnvrX0bNhwe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wdTQmhnvrX0bNhwe');
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
  //appendnew_flow_update_permanent_limitsComponent_Catch
}
