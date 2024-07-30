// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-sign_in',
  templateUrl: './sign_in.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sign_inComponent {
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
      this.sd_5JsP3BNwG80wAkMx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5JsP3BNwG80wAkMx(bh) {
    try {
      bh = this.sd_iI58iEnEmdYSWYDm(bh);
      //appendnew_next_sd_5JsP3BNwG80wAkMx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5JsP3BNwG80wAkMx');
    }
  }

  closeDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mfqLSper1omktTPw(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Sb0a1V1pjDzITnGc');
    }
  }

  pin(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_9CLuEYB1TzPU05xD(bh);
      //appendnew_next_pin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rvCb7QucNCHV92xN');
    }
  }

  showPwd(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_olX5fx6icE5Q4Xbo(bh);
      //appendnew_next_showPwd
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XJ5ZX8tG1tuM0zaz');
    }
  }
  //appendnew_flow_sign_inComponent_start

  sd_iI58iEnEmdYSWYDm(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_ic4YpsSwlTCKhn8J(bh);
      //appendnew_next_sd_iI58iEnEmdYSWYDm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iI58iEnEmdYSWYDm');
    }
  }

  sd_ic4YpsSwlTCKhn8J(bh) {
    try {
      this.page.submitted = false;
      this.page.remotePin = { remotePin: '', email: '' };
      this.page.visible = false;
      bh = this.sd_0LqEzkpXv0YuSuCa(bh);
      //appendnew_next_sd_ic4YpsSwlTCKhn8J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ic4YpsSwlTCKhn8J');
    }
  }

  sd_0LqEzkpXv0YuSuCa(bh) {
    try {
      this.page.route = this.__page_injector__.get(MAT_DIALOG_DATA);

      this.sd_3JvHdLCcxxTN7THh(bh);
      //appendnew_next_sd_0LqEzkpXv0YuSuCa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0LqEzkpXv0YuSuCa');
    }
  }

  sd_3JvHdLCcxxTN7THh(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.route);
      //appendnew_next_sd_3JvHdLCcxxTN7THh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3JvHdLCcxxTN7THh');
    }
  }

  sd_mfqLSper1omktTPw(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.dialogData);

      //appendnew_next_sd_mfqLSper1omktTPw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfqLSper1omktTPw');
    }
  }

  sd_9CLuEYB1TzPU05xD(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_UdRvwnLEBzAcm6lf(bh);
      //appendnew_next_sd_9CLuEYB1TzPU05xD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9CLuEYB1TzPU05xD');
    }
  }

  sd_UdRvwnLEBzAcm6lf(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh.url = page.ssdURL + 'log-in';

      console.log(bh.input.form);
      bh = this.sd_WzVxROdcEEMuelsA(bh);
      //appendnew_next_sd_UdRvwnLEBzAcm6lf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UdRvwnLEBzAcm6lf');
    }
  }

  async sd_WzVxROdcEEMuelsA(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2mBlqnLVRMP9wtrS(bh);
      } else {
        bh = await this.sd_eiXSYQiBpFistKk0(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WzVxROdcEEMuelsA');
    }
  }

  sd_2mBlqnLVRMP9wtrS(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_1n4WZa2iHs9EFx9Y(bh);
      //appendnew_next_sd_2mBlqnLVRMP9wtrS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2mBlqnLVRMP9wtrS');
    }
  }

  sd_1n4WZa2iHs9EFx9Y(bh) {
    try {
      const page = this.page;
      page.remotePin.email = page.result.email;
      console.log('Body: ', page.remotePin);
      console.log('Navigate user to: ', page.route);
      bh = this.sd_rhrrt9AyjDtBExxI(bh);
      //appendnew_next_sd_1n4WZa2iHs9EFx9Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1n4WZa2iHs9EFx9Y');
    }
  }

  sd_rhrrt9AyjDtBExxI(bh) {
    try {
      let outputVariables = this.closeDialog();

      bh = this.sd_Lb4YpPPAWpr2NFGO(bh);
      //appendnew_next_sd_rhrrt9AyjDtBExxI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rhrrt9AyjDtBExxI');
    }
  }

  async sd_Lb4YpPPAWpr2NFGO(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.remotePin,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ThxTUviuYsW41lAu(bh);
      //appendnew_next_sd_Lb4YpPPAWpr2NFGO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lb4YpPPAWpr2NFGO');
    }
  }

  sd_ThxTUviuYsW41lAu(bh) {
    try {
      const page = this.page;
      page.router.navigate([page.route]);
      //appendnew_next_sd_ThxTUviuYsW41lAu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ThxTUviuYsW41lAu');
    }
  }

  sd_eiXSYQiBpFistKk0(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ENTER YOUR PIN', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_eiXSYQiBpFistKk0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eiXSYQiBpFistKk0');
    }
  }

  sd_olX5fx6icE5Q4Xbo(bh) {
    try {
      const page = this.page;
      page.visible = !page.visible;
      //appendnew_next_sd_olX5fx6icE5Q4Xbo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_olX5fx6icE5Q4Xbo');
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
  //appendnew_flow_sign_inComponent_Catch
}
