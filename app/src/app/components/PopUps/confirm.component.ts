// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { api_service } from 'app/sd-services/api_service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirm',
  templateUrl: './confirm.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirmComponent {
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
      this.sd_QLWzyv6DlDVQyfJO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_QLWzyv6DlDVQyfJO(bh) {
    try {
      bh = this.sd_54vwdMofxVjGaRQc(bh);
      //appendnew_next_sd_QLWzyv6DlDVQyfJO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QLWzyv6DlDVQyfJO');
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
      bh = this.sd_vuTmIqMPCabDh6aJ(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xemz5o5iCHRcIf9b');
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
      bh = this.sd_WGI00ER8gMn6lOQe(bh);
      //appendnew_next_pin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EsYtUAzDmcat5TMY');
    }
  }

  confirm(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_0AqgRBQKDHTYk1G7(bh);
      //appendnew_next_confirm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ThJD7PFgdAIaS540');
    }
  }
  //appendnew_flow_confirmComponent_start

  sd_54vwdMofxVjGaRQc(bh) {
    try {
      this.page.remotePin = { remotePin: '', email: '' };
      bh = this.sd_WE3y2AaH4zuC0V16(bh);
      //appendnew_next_sd_54vwdMofxVjGaRQc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_54vwdMofxVjGaRQc');
    }
  }

  sd_WE3y2AaH4zuC0V16(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      this.sd_s6LFDBnc7MIdVVX8(bh);
      bh = this.sd_9wvCS51D5qUrb6nQ(bh);
      //appendnew_next_sd_WE3y2AaH4zuC0V16
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WE3y2AaH4zuC0V16');
    }
  }

  sd_s6LFDBnc7MIdVVX8(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.data);
      //appendnew_next_sd_s6LFDBnc7MIdVVX8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s6LFDBnc7MIdVVX8');
    }
  }

  async sd_9wvCS51D5qUrb6nQ(bh) {
    try {
      const api_serviceInstance: api_service =
        this.__page_injector__.get(api_service);

      let outputVariables = await api_serviceInstance.getCode();
      this.page.code = outputVariables.local.code;

      bh = this.sd_CZbpHWttlWzIMksV(bh);
      //appendnew_next_sd_9wvCS51D5qUrb6nQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9wvCS51D5qUrb6nQ');
    }
  }

  sd_CZbpHWttlWzIMksV(bh) {
    try {
      const page = this.page;
      console.log('Code:', page.code);
      //appendnew_next_sd_CZbpHWttlWzIMksV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CZbpHWttlWzIMksV');
    }
  }

  sd_vuTmIqMPCabDh6aJ(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.dialogData);

      //appendnew_next_sd_vuTmIqMPCabDh6aJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vuTmIqMPCabDh6aJ');
    }
  }

  sd_WGI00ER8gMn6lOQe(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_eomNOZqv3doT0uyd(bh);
      //appendnew_next_sd_WGI00ER8gMn6lOQe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WGI00ER8gMn6lOQe');
    }
  }

  sd_eomNOZqv3doT0uyd(bh) {
    try {
      const page = this.page;
      page.submitted = true;

      bh.url = page.ssdURL + 'log-in';

      console.log(bh.input.form);
      bh = this.sd_Az7vbfAZGQ1GDJB6(bh);
      //appendnew_next_sd_eomNOZqv3doT0uyd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eomNOZqv3doT0uyd');
    }
  }

  async sd_Az7vbfAZGQ1GDJB6(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_x5ScikLWMJG30igv(bh);
      } else {
        bh = await this.sd_5YkqmtOhcmZiQUsj(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Az7vbfAZGQ1GDJB6');
    }
  }

  sd_x5ScikLWMJG30igv(bh) {
    try {
      this.page.result = JSON.parse(localStorage.getItem('accNo'));
      bh = this.sd_oCGfBgIbVw26irt1(bh);
      //appendnew_next_sd_x5ScikLWMJG30igv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x5ScikLWMJG30igv');
    }
  }

  sd_oCGfBgIbVw26irt1(bh) {
    try {
      const page = this.page;
      page.remotePin.email = page.result.email;
      console.log('Body: ', page.remotePin);
      bh = this.sd_mHdOmAI2kUtZTX7B(bh);
      //appendnew_next_sd_oCGfBgIbVw26irt1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oCGfBgIbVw26irt1');
    }
  }

  async sd_mHdOmAI2kUtZTX7B(bh) {
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
      bh = this.sd_a6HHx8pjf14qgLlk(bh);
      //appendnew_next_sd_mHdOmAI2kUtZTX7B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mHdOmAI2kUtZTX7B');
    }
  }

  async sd_a6HHx8pjf14qgLlk(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_DhQcuz0ZDCysppfi(bh);
      } else {
        bh = await this.sd_A8dS5WypJ5PIw8LY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a6HHx8pjf14qgLlk');
    }
  }

  sd_DhQcuz0ZDCysppfi(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.result);

      this.sd_Gyy01HzdErZt77I8(bh);
      //appendnew_next_sd_DhQcuz0ZDCysppfi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DhQcuz0ZDCysppfi');
    }
  }

  sd_Gyy01HzdErZt77I8(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_Gyy01HzdErZt77I8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gyy01HzdErZt77I8');
    }
  }

  sd_A8dS5WypJ5PIw8LY(bh) {
    try {
      const page = this.page;
      console.log('User is empty: ', page.result);
      //appendnew_next_sd_A8dS5WypJ5PIw8LY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A8dS5WypJ5PIw8LY');
    }
  }

  sd_5YkqmtOhcmZiQUsj(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('ENTER YOUR PIN', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_5YkqmtOhcmZiQUsj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5YkqmtOhcmZiQUsj');
    }
  }

  sd_0AqgRBQKDHTYk1G7(bh) {
    try {
      const page = this.page;
      console.log('FORM: ', bh.input.form);

      bh.code = bh.input.form.value.remotePin;
      bh = this.sd_m1orLhvy8RK3qdFg(bh);
      //appendnew_next_sd_0AqgRBQKDHTYk1G7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0AqgRBQKDHTYk1G7');
    }
  }

  async sd_m1orLhvy8RK3qdFg(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_3W1Ggxtw7UILbWNv(bh);
      } else {
        bh = await this.sd_0gpat3gjscANRpem(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m1orLhvy8RK3qdFg');
    }
  }

  async sd_3W1Ggxtw7UILbWNv(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.code,
          this.page.code,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_tBCzluL9cgQ3XH5P(bh);
      } else {
        bh = await this.sd_902FLStP0z4SoWYV(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3W1Ggxtw7UILbWNv');
    }
  }

  sd_tBCzluL9cgQ3XH5P(bh) {
    try {
      const page = this.page;
      console.log('Password correct');
      bh.feedback = { feeback: 'Verification was sucessfully' };
      bh = this.sd_IYHLrPx5f2RruxSf(bh);
      //appendnew_next_sd_tBCzluL9cgQ3XH5P
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tBCzluL9cgQ3XH5P');
    }
  }

  sd_IYHLrPx5f2RruxSf(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.feedback);

      //appendnew_next_sd_IYHLrPx5f2RruxSf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IYHLrPx5f2RruxSf');
    }
  }

  sd_902FLStP0z4SoWYV(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Verification code is incorrect', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_902FLStP0z4SoWYV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_902FLStP0z4SoWYV');
    }
  }

  sd_0gpat3gjscANRpem(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please enter a code that was send to your email', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_0gpat3gjscANRpem
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0gpat3gjscANRpem');
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
  //appendnew_flow_confirmComponent_Catch
}
