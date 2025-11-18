import Utility from '@Utils/Utility.js';
import { GenericObject } from '@Types';
import Environment from '@Modules/environment/Environment.js';
import { AxiosResponse } from 'axios';
declare class DistribuicaoHandler {
    environment: Environment;
    utility: Utility;
    metodo: string;
    constructor(environment: Environment, utility: Utility, metodo: string);
    /**
     * Métodos para tratativas do DistribuicaoDFe do CTe
     */
    protected salvaArquivos(XMLDistribuicaoInJson: GenericObject, XMLDistribuicao: string, chCTe: string): void;
    deCompressDFeXML(loteDistDFeInt: AxiosResponse<any, any>, metodo: string, xmlConsulta: string): string[];
    decodeDocZip(docZip: any): string;
    removeSignatureTag(xmlString: string): string;
    parseXml(xmlString: string): undefined;
    getChCTe(parsedResult: GenericObject): any;
    getTipo(parsedResult: GenericObject): "res" | "event" | "proc";
    handleResponse(XMLDistribuicaoInJson: GenericObject, XMLDistribuicao: string, chCTe: string): void;
}
export default DistribuicaoHandler;
