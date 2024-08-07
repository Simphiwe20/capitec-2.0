// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-my_details',
  templateUrl: './my_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class my_detailsComponent {
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
      this.sd_ndCcGfh1OZ06B1SY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ndCcGfh1OZ06B1SY(bh) {
    try {
      bh = this.sd_xyBLfv2MRtAwqMVf(bh);
      //appendnew_next_sd_ndCcGfh1OZ06B1SY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ndCcGfh1OZ06B1SY');
    }
  }

  formLog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Jww2DnA0AVHAJf1u(bh);
      //appendnew_next_formLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MWXdfGlNAGbQzt7m');
    }
  }

  back(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ovhUK2X1ZZSciRFf(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BDpaVOGl9wHAEAD5');
    }
  }
  //appendnew_flow_my_detailsComponent_start

  sd_xyBLfv2MRtAwqMVf(bh) {
    try {
      bh = this.sd_9dwFqJuKNpLT9alF(bh);
      //appendnew_next_sd_xyBLfv2MRtAwqMVf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xyBLfv2MRtAwqMVf');
    }
  }

  sd_9dwFqJuKNpLT9alF(bh) {
    try {
      bh.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_GBIm80ZcCtEHO1sG(bh);
      //appendnew_next_sd_9dwFqJuKNpLT9alF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9dwFqJuKNpLT9alF');
    }
  }

  sd_GBIm80ZcCtEHO1sG(bh) {
    try {
      this.page.disabled = true;
      this.page.location = undefined;
      this.page.profile = undefined;
      this.page.hide = true;
      this.page.dob = undefined;
      bh = this.sd_e8TZuQT6I6jJ65Gp(bh);
      //appendnew_next_sd_GBIm80ZcCtEHO1sG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GBIm80ZcCtEHO1sG');
    }
  }

  sd_e8TZuQT6I6jJ65Gp(bh) {
    try {
      this.page.location = this.__page_injector__.get(Location);
      bh = this.sd_yeEPbSTFD4r4g4Um(bh);
      //appendnew_next_sd_e8TZuQT6I6jJ65Gp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e8TZuQT6I6jJ65Gp');
    }
  }

  sd_yeEPbSTFD4r4g4Um(bh) {
    try {
      this.page.results = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_1rFfUC8JdaxeqB1y(bh);
      //appendnew_next_sd_yeEPbSTFD4r4g4Um
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yeEPbSTFD4r4g4Um');
    }
  }

  sd_1rFfUC8JdaxeqB1y(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdURL + 'get-customers';

      console.log('ssdURL: ', bh.url);
      bh = this.sd_byfXoeEVszCBX6Zd(bh);
      //appendnew_next_sd_1rFfUC8JdaxeqB1y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1rFfUC8JdaxeqB1y');
    }
  }

  async sd_byfXoeEVszCBX6Zd(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.users = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_PnEta2viXfeh8A9o(bh);
      //appendnew_next_sd_byfXoeEVszCBX6Zd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_byfXoeEVszCBX6Zd');
    }
  }

  sd_PnEta2viXfeh8A9o(bh) {
    try {
      const page = this.page;
      console.log(page.users);
      console.log('Result values: ', page.results);

      page.results = page.users.find(
        (user) => user.email == page.results.email
      );

      console.log('Logged In users: ', page.results);

      page.profile = new FormGroup({
        fullName: new FormControl({
          value: page.results.fullName,
          disabled: page.disabled,
        }),
        nickName: new FormControl({
          value: page.results.nickName
            ? page.results.nickName
            : page.results.fullName.split(' ')[0],
          disabled: page.disabled,
        }),
        idNum: new FormControl({
          value: page.results.idNum,
          disabled: page.disabled,
        }),
        contacts: new FormControl({
          value: page.results.contacts,
          disabled: page.disabled,
        }),
        // email :new FormControl ({value:page.results.email,disabled: page.disabled})
      });

      bh.dob = page.results.idNum.substring(0, 6);
      let [y, m, d] = [
        bh.dob.substring(0, 2),
        bh.dob.substring(2, 4),
        bh.dob.substring(4, 6),
      ];
      console.log('date of birth', bh.dob);
      console.log(y, m, d);

      // y = Number(y)

      if (Number(y) <= 8) {
        bh.dob = m + '/' + d + '/' + '20' + y;
        console.log('DOB: ', bh.dob);
        console.log('DOB: ', new Date(bh.dob));
      } else {
        bh.dob = m + '/' + d + '/' + '19' + y;
        console.log('DOB: ', bh.dob);

        console.log('DOB: ', new Date(bh.dob));
      }

      page.dob = new Date(bh.dob);
      this.sd_PEAoC4jYU9pajsGm(bh);
      //appendnew_next_sd_PnEta2viXfeh8A9o
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PnEta2viXfeh8A9o');
    }
  }

  sd_PEAoC4jYU9pajsGm(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.profile);
      //appendnew_next_sd_PEAoC4jYU9pajsGm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PEAoC4jYU9pajsGm');
    }
  }

  sd_Jww2DnA0AVHAJf1u(bh) {
    try {
      const page = this.page;
      console.log('Form values: ', page.profile.value);
      console.log('User details: ', page.results);
      bh = this.sd_MTHfmRGokcaQDjJH(bh);
      //appendnew_next_sd_Jww2DnA0AVHAJf1u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jww2DnA0AVHAJf1u');
    }
  }

  sd_MTHfmRGokcaQDjJH(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.profile.controls.nickName.status,
          'enabled',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_VDHuomHkWmw8HXAb(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.profile.controls.nickName.status,
          'DISABLED',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_3IwqZR2o1tfPvSJi(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MTHfmRGokcaQDjJH');
    }
  }

  sd_VDHuomHkWmw8HXAb(bh) {
    try {
      sessionStorage.setItem('accNo', JSON.stringify(this.page.profile.value));
      bh = this.sd_EpOryVh8BqpFznqp(bh);
      //appendnew_next_sd_VDHuomHkWmw8HXAb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VDHuomHkWmw8HXAb');
    }
  }

  sd_EpOryVh8BqpFznqp(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_e64XEJPGJE0B5fh3(bh);
      //appendnew_next_sd_EpOryVh8BqpFznqp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EpOryVh8BqpFznqp');
    }
  }

  sd_e64XEJPGJE0B5fh3(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'update';
      console.log(page.profile.value);
      bh = this.sd_Xg5ewzd7Yzgq3CKJ(bh);
      //appendnew_next_sd_e64XEJPGJE0B5fh3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e64XEJPGJE0B5fh3');
    }
  }

  async sd_Xg5ewzd7Yzgq3CKJ(bh) {
    try {
      if (
        this.sdService.operators['neq'](
          this.page.profile.value.email,
          this.page.results.email,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_FD2uZb0WecBdLNqq(bh);
      } else {
        bh = await this.sd_xnjDnReLa8czDDtW(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Xg5ewzd7Yzgq3CKJ');
    }
  }

  sd_FD2uZb0WecBdLNqq(bh) {
    try {
      const page = this.page;
      console.log('User: ', page.result);

      page.results.email = page.profile.value.email;

      console.log('updated user infor: ', page.results);

      bh = this.sd_m5d2c48Poq5hHpAJ(bh);
      //appendnew_next_sd_FD2uZb0WecBdLNqq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FD2uZb0WecBdLNqq');
    }
  }

  async sd_m5d2c48Poq5hHpAJ(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.setInfor(
        this.page.results
      );

      bh = this.sd_mpKj9Hjo1T46hz3u(bh);
      //appendnew_next_sd_m5d2c48Poq5hHpAJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m5d2c48Poq5hHpAJ');
    }
  }

  async sd_mpKj9Hjo1T46hz3u(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/confirm_updates');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_mpKj9Hjo1T46hz3u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mpKj9Hjo1T46hz3u');
    }
  }

  async sd_xnjDnReLa8czDDtW(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.profile.value,
      };
      this.page.results = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_HrLEMErrCnWdOT9H(bh);
      //appendnew_next_sd_xnjDnReLa8czDDtW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xnjDnReLa8czDDtW');
    }
  }

  sd_HrLEMErrCnWdOT9H(bh) {
    try {
      const page = this.page;
      console.log('FIRST CONDITION', page.results.value);
      //appendnew_next_sd_HrLEMErrCnWdOT9H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HrLEMErrCnWdOT9H');
    }
  }

  sd_3IwqZR2o1tfPvSJi(bh) {
    try {
      const page = this.page;
      page.hide = !page.hide;
      page.disabled = false;
      bh = this.sd_YaTIqtDiQ8PBo9AD(bh);
      //appendnew_next_sd_3IwqZR2o1tfPvSJi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3IwqZR2o1tfPvSJi');
    }
  }

  sd_YaTIqtDiQ8PBo9AD(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.profile.controls.fullName.status,
          'enabled',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gnxMStWrZrdr7iDR(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.profile.controls.fullName.status,
          'DISABLED',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ozcgboC9LBKlKYSb(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YaTIqtDiQ8PBo9AD');
    }
  }

  sd_gnxMStWrZrdr7iDR(bh) {
    try {
      const page = this.page;
      page.profile.controls.fullName.status = 'DISABLED';
      page.profile.controls.nickName.status = 'DISABLED';
      page.profile.controls.idNum.status = 'DISABLED';
      page.profile.controls.contacts.status = 'DISABLED';
      page.profile.controls.email.status = 'DISABLED';
      bh = this.sd_Ev4QIAOydzxuw9JI(bh);
      //appendnew_next_sd_gnxMStWrZrdr7iDR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gnxMStWrZrdr7iDR');
    }
  }

  sd_Ev4QIAOydzxuw9JI(bh) {
    try {
      const page = this.page;
      console.log('disabled');
      //appendnew_next_sd_Ev4QIAOydzxuw9JI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ev4QIAOydzxuw9JI');
    }
  }

  sd_ozcgboC9LBKlKYSb(bh) {
    try {
      const page = this.page; // page.profile.controls.fullName.status = 'enabled';
      page.profile.controls.nickName.status = 'enabled';
      // page.profile.controls.idNum.status = 'enabled';
      // page.profile.controls.contacts.status = 'enabled';
      page.profile.controls.email.status = 'enabled';
      bh = this.sd_HGugHOALWZf8acey(bh);
      //appendnew_next_sd_ozcgboC9LBKlKYSb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ozcgboC9LBKlKYSb');
    }
  }

  sd_HGugHOALWZf8acey(bh) {
    try {
      const page = this.page;
      console.log('enabled');
      //appendnew_next_sd_HGugHOALWZf8acey
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HGugHOALWZf8acey');
    }
  }

  sd_ovhUK2X1ZZSciRFf(bh) {
    try {
      const page = this.page; // page.location.back();
      console.log('page.location', page.location);
      //appendnew_next_sd_ovhUK2X1ZZSciRFf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ovhUK2X1ZZSciRFf');
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
  //appendnew_flow_my_detailsComponent_Catch
}
