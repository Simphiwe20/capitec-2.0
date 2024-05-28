// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_54PzYAXeeWhXZO4M from 'app/sd-services/api_service'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(private sd_54PzYAXeeWhXZO4M: sd_54PzYAXeeWhXZO4M.api_service) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
