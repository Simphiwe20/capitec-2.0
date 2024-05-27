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
  selector: 'bh-electricity',
  templateUrl: './electricity.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class electricityComponent {
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
      this.sd_44luXrwEedWKmlZa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_44luXrwEedWKmlZa(bh) {
    try {
      bh = this.sd_SbnBYPpa7dvwXNPJ(bh);
      //appendnew_next_sd_44luXrwEedWKmlZa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_44luXrwEedWKmlZa');
    }
  }

  buyElectric(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_FuzyXNH9LTTGC7dG(bh);
      //appendnew_next_buyElectric
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uZdlgQR4xtJxd4EU');
    }
  }
  //appendnew_flow_electricityComponent_start

  sd_SbnBYPpa7dvwXNPJ(bh) {
    try {
      this.page.selected = undefined;
      this.page.electricForm = undefined;
      this.page.user = undefined;
      this.page.submitted = false;
      bh = this.sd_hweFYTvJJXNq5mHr(bh);
      //appendnew_next_sd_SbnBYPpa7dvwXNPJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SbnBYPpa7dvwXNPJ');
    }
  }

  sd_hweFYTvJJXNq5mHr(bh) {
    try {
      this.page.selected = JSON.parse(sessionStorage.getItem('electricBen'));
      this.sd_gTbj6KEGlIvwhFvA(bh);
      bh = this.sd_qCO83jtz9eb6WJVr(bh);
      //appendnew_next_sd_hweFYTvJJXNq5mHr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hweFYTvJJXNq5mHr');
    }
  }

  sd_gTbj6KEGlIvwhFvA(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.selected);
      //appendnew_next_sd_gTbj6KEGlIvwhFvA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gTbj6KEGlIvwhFvA');
    }
  }

  sd_qCO83jtz9eb6WJVr(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_5J3EDkMgd2lTTFEO(bh);
      //appendnew_next_sd_qCO83jtz9eb6WJVr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qCO83jtz9eb6WJVr');
    }
  }

  sd_5J3EDkMgd2lTTFEO(bh) {
    try {
      const page = this.page;
      page.electricForm = {
        amount: '',
        to: page.selected.meterNumber,
        from: page.user.accountNumber,
      };
      //appendnew_next_sd_5J3EDkMgd2lTTFEO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5J3EDkMgd2lTTFEO');
    }
  }

  sd_FuzyXNH9LTTGC7dG(bh) {
    try {
      const page = this.page;
      page.submitted = true;
      bh = this.sd_iaMtfeNXp1gpNgC9(bh);
      //appendnew_next_sd_FuzyXNH9LTTGC7dG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FuzyXNH9LTTGC7dG');
    }
  }

  async sd_iaMtfeNXp1gpNgC9(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_53gK3JrPWt7xfjS8(bh);
      } else {
        bh = await this.sd_zMcN8BNi0mEkTsqY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iaMtfeNXp1gpNgC9');
    }
  }

  sd_53gK3JrPWt7xfjS8(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Yes Girl', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_HIlYHUampiXE8ans(bh);
      //appendnew_next_sd_53gK3JrPWt7xfjS8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_53gK3JrPWt7xfjS8');
    }
  }

  sd_HIlYHUampiXE8ans(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_VohmGIvVnZNRBSTZ(bh);
      //appendnew_next_sd_HIlYHUampiXE8ans
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HIlYHUampiXE8ans');
    }
  }

  sd_VohmGIvVnZNRBSTZ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + 'buy-electricity';

      bh = this.sd_SXyTdD9ZOC4D8ljs(bh);
      //appendnew_next_sd_VohmGIvVnZNRBSTZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VohmGIvVnZNRBSTZ');
    }
  }

  async sd_SXyTdD9ZOC4D8ljs(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.electricForm,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_AYyH1xdjdWRd4Vis(bh);
      //appendnew_next_sd_SXyTdD9ZOC4D8ljs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SXyTdD9ZOC4D8ljs');
    }
  }

  async sd_AYyH1xdjdWRd4Vis(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj(
          '/buy-electricity/pay-ben-electric'
        );
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_4UJL3Q7xrHDyFXo1(bh);
      //appendnew_next_sd_AYyH1xdjdWRd4Vis
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AYyH1xdjdWRd4Vis');
    }
  }

  sd_4UJL3Q7xrHDyFXo1(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Electricity purchased successfully', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_4UJL3Q7xrHDyFXo1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4UJL3Q7xrHDyFXo1');
    }
  }

  sd_zMcN8BNi0mEkTsqY(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Wa gafa', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_zMcN8BNi0mEkTsqY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zMcN8BNi0mEkTsqY');
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
  //appendnew_flow_electricityComponent_Catch
}
