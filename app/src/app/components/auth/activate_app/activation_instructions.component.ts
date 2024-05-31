// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-activation_instructions',
  templateUrl: './activation_instructions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class activation_instructionsComponent {
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
      this.sd_HMDPIUvK8uKVkIqB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_HMDPIUvK8uKVkIqB(bh) {
    try {
      bh = this.sd_mUeabtoqMQt5Okk4(bh);
      //appendnew_next_sd_HMDPIUvK8uKVkIqB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HMDPIUvK8uKVkIqB');
    }
  }

  route(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_numKQxnBkjmM5McI(bh);
      //appendnew_next_route
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X1Q56T4sYoSqZZr0');
    }
  }
  //appendnew_flow_activation_instructionsComponent_start

  sd_mUeabtoqMQt5Okk4(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_HPtLA5FT2M4iizJr(bh);
      //appendnew_next_sd_mUeabtoqMQt5Okk4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mUeabtoqMQt5Okk4');
    }
  }

  sd_HPtLA5FT2M4iizJr(bh) {
    try {
      this.page.routeData = undefined;
      this.page.pic = undefined;
      bh = this.sd_WAPZpjYffdime62W(bh);
      //appendnew_next_sd_HPtLA5FT2M4iizJr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HPtLA5FT2M4iizJr');
    }
  }

  sd_WAPZpjYffdime62W(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'get-picture';
      console.log(bh.url);
      bh = this.sd_epX4M9GQYUC2uVor(bh);
      //appendnew_next_sd_WAPZpjYffdime62W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WAPZpjYffdime62W');
    }
  }

  async sd_epX4M9GQYUC2uVor(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_NMSKSPBLkevcHnu2(bh);
      //appendnew_next_sd_epX4M9GQYUC2uVor
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_epX4M9GQYUC2uVor');
    }
  }

  sd_NMSKSPBLkevcHnu2(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('accNo'));
      bh = this.sd_15SaZE9ShGJGpxcH(bh);
      //appendnew_next_sd_NMSKSPBLkevcHnu2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NMSKSPBLkevcHnu2');
    }
  }

  sd_15SaZE9ShGJGpxcH(bh) {
    try {
      const page = this.page;
      bh.image = page.result.find(
        (image: any) => image.email === page.user.email
      );

      console.log(bh.image);
      bh = this.sd_c6h43zBXSTxakxqZ(bh);
      //appendnew_next_sd_15SaZE9ShGJGpxcH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_15SaZE9ShGJGpxcH');
    }
  }

  sd_c6h43zBXSTxakxqZ(bh) {
    try {
      const page = this.page; // let file: File
      // if(bh.input.event) {
      //     file = bh.input.event.target.files
      //     page.file2 = file[0]
      //     let fileType =   page.file2['type'].split('/')[0]
      //     if(fileType != 'image') {
      //         alert("Please select an image")
      //         delete page.clientDetails.picture
      //         return
      //     }
      // }else {
      //     console.log('The is no file uploaded')
      //     return
      // }

      let fileReader = new FileReader();
      fileReader.readAsDataURL(page.pic);
      fileReader.onload = () => {
        let result = fileReader.result;
        page.userImage = result;
      };

      //appendnew_next_sd_c6h43zBXSTxakxqZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c6h43zBXSTxakxqZ');
    }
  }

  sd_numKQxnBkjmM5McI(bh) {
    try {
      const page = this.page;
      page.routeData = { data: 'activate_app' };
      bh = this.sd_cumKsxX0Tfg64LaQ(bh);
      //appendnew_next_sd_numKQxnBkjmM5McI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_numKQxnBkjmM5McI');
    }
  }

  async sd_cumKsxX0Tfg64LaQ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/prepare_for_selfie');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, this.page.routeData),
        });
      //appendnew_next_sd_cumKsxX0Tfg64LaQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cumKsxX0Tfg64LaQ');
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
  //appendnew_flow_activation_instructionsComponent_Catch
}
