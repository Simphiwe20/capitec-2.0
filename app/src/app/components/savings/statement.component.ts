// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { jsPDF } from 'jspdf'; //_splitter_
import * as autoTable from 'jspdf-autotable'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-statement',
  templateUrl: './statement.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class statementComponent {
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
      this.sd_gxKQRbdg8kPzuz7K(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_gxKQRbdg8kPzuz7K(bh) {
    try {
      bh = this.sd_pd2vV3DHQ3FmrTEb(bh);
      //appendnew_next_sd_gxKQRbdg8kPzuz7K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gxKQRbdg8kPzuz7K');
    }
  }

  generatePdf(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_m1eliMgupRWCpD66(bh);
      //appendnew_next_generatePdf
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EcbywtQHnBrMqCVK');
    }
  }
  //appendnew_flow_statementComponent_start

  sd_pd2vV3DHQ3FmrTEb(bh) {
    try {
      this.page.jspdf = jsPDF;
      bh = this.sd_ILlrG1WxKCfihDWc(bh);
      //appendnew_next_sd_pd2vV3DHQ3FmrTEb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pd2vV3DHQ3FmrTEb');
    }
  }

  sd_ILlrG1WxKCfihDWc(bh) {
    try {
      this.page.autoTable = autoTable;
      bh = this.sd_rx6uLMUPuILZhdh1(bh);
      //appendnew_next_sd_ILlrG1WxKCfihDWc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ILlrG1WxKCfihDWc');
    }
  }

  sd_rx6uLMUPuILZhdh1(bh) {
    try {
      this.page.options = undefined;
      this.page.jsPDF = undefined;
      this.page.win = undefined;
      this.page.pdf = undefined;
      bh = this.sd_cHLrbUR8FYzX2Loo(bh);
      //appendnew_next_sd_rx6uLMUPuILZhdh1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rx6uLMUPuILZhdh1');
    }
  }

  sd_cHLrbUR8FYzX2Loo(bh) {
    try {
      const page = this.page;
      page.options = [
        { name: 'Last 1 month' },
        { name: 'Last 3 month' },
        { name: 'Last 6 month' },
        { name: 'Last 12 month' },
        { name: 'Choose date range', range: 'Up to 3 years' },
      ];

      // let w = window.open('', '_blank')
      // console.log('Window: ', w)

      page.jsPDF = new page.jspdf();

      console.log('PDF', page.jsPDF);
      // let autoTable: autoTable
      // console.log('Table: ', page.autoTable)
      // console.log('Table: ', autoTable)
      bh = this.sd_8jXwjqighOUUXCWf(bh);
      //appendnew_next_sd_cHLrbUR8FYzX2Loo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cHLrbUR8FYzX2Loo');
    }
  }

  sd_8jXwjqighOUUXCWf(bh) {
    try {
      this.page.user = JSON.parse(localStorage.getItem('accNo'));
      //appendnew_next_sd_8jXwjqighOUUXCWf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8jXwjqighOUUXCWf');
    }
  }

  sd_m1eliMgupRWCpD66(bh) {
    try {
      const page = this.page; // Add content to the PDF.
      page.jsPDF.setFontSize(16);
      page.jsPDF.text('Savings Account Statement', 10, 10);
      page.jsPDF.setFontSize(12);
      page.jsPDF.text(`${page.user.fullName}`, 10, 20);

      let capitecLogo = new Image();
      capitecLogo.src = '../../../assets/Web/Images/capitec-l.png';
      page.jsPDF.addImage(capitecLogo, 'PNG', 130, 1, 70, 20);

      // Create a table using `jspdf-autotable`.
      const headers = [
        [
          'Transaction Date',
          'Description',
          'Money In(R)',
          'Money Out(R)',
          'Balance(R)',
        ],
      ];
      const data = [
        [new Date().toDateString(), 'Sweden', '200', '', '200'],
        [new Date().toDateString(), 'Spain', '', '- 200', '0.50'],
        // ...
      ];

      // console.log('autoTable: ', page.jsPDF.autoTable)
      console.log('jsPDF: ', page.jsPDF);

      console.log('Autotable in jsPDF: ', page.jsPDF.autoTable);

      page.jsPDF.autoTable({
        head: headers,
        body: data,
        startY: 30, // Adjust the `startY` position as needed.
      });

      page.pdf = page.jsPDF.output('datauristring');

      // var embed = "<embed width='100%' height='100%' src='" + str + "'/>"

      // let pdfURL = URL.createObjectURL(str);

      console.log('base64 pdf: ', page.pdf);

      // let windowOpen = window.open('', '_blank')
      // window.open('', '_blank').location.href = pdfURL
      // console.log('Opened window: ', windowOpen)

      // if(windowOpen) {
      // 	windowOpen.location.href = pdfURL
      // }else {
      // 	alert('Please allow pop Ups')
      // }

      // console.log(embed)
      // console.log(window)

      // page.win = window.open('http://localhost:4200/bank_statement', '_blank')

      // window.open(pdfURL);
      // console.log('Win: ', page.win)
      // document.open();

      // document.write(embed);
      // document.close()
      //appendnew_next_sd_m1eliMgupRWCpD66
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m1eliMgupRWCpD66');
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
  //appendnew_flow_statementComponent_Catch
}
