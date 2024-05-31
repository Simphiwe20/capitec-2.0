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
  selector: 'bh-sidenav',
  templateUrl: './sidenav.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class sidenavComponent {
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
      this.sd_uSUAwfJihRMS2q65(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uSUAwfJihRMS2q65(bh) {
    try {
      bh = this.sd_FAH1XmFgVHncNH1v(bh);
      //appendnew_next_sd_uSUAwfJihRMS2q65
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uSUAwfJihRMS2q65');
    }
  }

  //appendnew_flow_sidenavComponent_start

  sd_FAH1XmFgVHncNH1v(bh) {
    try {
      this.page.profile = [
        { icon: 'my-detail-icon.png', text: 'My details', link: '/my-details' },
        {
          icon: 'email-update-icon.png',
          text: 'My email address',
          link: '/email',
        },
        { icon: 'tax-icon.png', text: 'My tax details', link: '/tax' },
        { icon: 'agreement-icon.png', text: 'My agreement & disclamers' },
        {
          icon: 'privacy-icon.png',
          text: 'Our Primary Center',
          link: '/policy',
        },
      ];
      //appendnew_next_sd_FAH1XmFgVHncNH1v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FAH1XmFgVHncNH1v');
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
  //appendnew_flow_sidenavComponent_Catch
}
