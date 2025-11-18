import { CTEDistribuicaoDFeServiceImpl } from '@Interfaces';
declare class CTEDistribuicaoDFe implements CTEDistribuicaoDFeServiceImpl {
    cteDistribuicaoDFeService: CTEDistribuicaoDFeServiceImpl;
    constructor(cteDistribuicaoDFeService: CTEDistribuicaoDFeServiceImpl);
    Exec(data?: any): Promise<any>;
}
export default CTEDistribuicaoDFe;
