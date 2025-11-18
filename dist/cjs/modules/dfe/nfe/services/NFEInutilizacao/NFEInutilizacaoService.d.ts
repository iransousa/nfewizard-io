import Environment from '@Modules/environment/Environment.js';
import Utility from '@Utils/Utility.js';
import XmlBuilder from '@Adapters/XmlBuilder.js';
import { InutilizacaoData } from '@Types';
import BaseNFE from '@Modules/dfe/base/BaseNFe.js';
import { AxiosInstance } from 'axios';
import { GerarConsultaImpl, NFEInutilizacaoServiceImpl, SaveFilesImpl } from '@Interfaces';
declare class NFEInutilizacaoService extends BaseNFE implements NFEInutilizacaoServiceImpl {
    constructor(environment: Environment, utility: Utility, xmlBuilder: XmlBuilder, axios: AxiosInstance, saveFiles: SaveFilesImpl, gerarConsulta: GerarConsultaImpl);
    protected gerarXml(chave: InutilizacaoData): string;
    /**
     * Método para criação do ID de Inutilização
     */
    private criarId;
    /**
     * Sobrescreve o método pai para determinar o modelo baseado nos dados de inutilização
     */
    protected getModelo(data?: InutilizacaoData): string;
    /**
     * Método utilitário para criação do XML a partir de um Objeto
     */
    gerarXmlNFeInutilizacao(data: InutilizacaoData): string;
}
export default NFEInutilizacaoService;
