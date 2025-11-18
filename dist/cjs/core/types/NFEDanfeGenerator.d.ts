import { LayoutNFe, ProtNFe } from './NFEAutorizacao';
export type NFEGerarDanfeProps = {
    /**
     * @param {NFe} data - Dados da NFe
     */
    data: {
        /**
         * @param {LayoutNFe  | LayoutNFe[]} NFe - Dados da NFe
         */
        NFe: LayoutNFe | LayoutNFe[];
        /**
         * @param {ProtNFe} protNFe - Dados da aturoziação de uso da NFe
         */
        protNFe?: ProtNFe;
        /**
         * @param {ProtNFe} protNFe - Força remoção da mensagem de "NFe não transmitida"
         */
        forceTransmitida?: boolean;
    };
    /**
     * @param {string} chave - Chave da NFe
     */
    chave: string;
    /**
     * @param {string} outputPath - Local onde a DANFE será gravada
     */
    outputPath: string;
    /**
     * @param {number} pageWidth - Largura da Página
     */
    pageWidth?: number;
    /**
     * @param {string} logoPath - Caminho para arquivo de logo (PNG/JPG) - OPCIONAL
     */
    logoPath?: string;
    /**
     * @param {Buffer} logoBuffer - Buffer da imagem do logo (alternativa ao logoPath) - OPCIONAL
     */
    logoBuffer?: Buffer;
    /**
     * @param {'header-left' | 'header-right' | 'header-center'} logoPosition - Posição do logo no cabeçalho - OPCIONAL (default: 'header-right')
     */
    logoPosition?: 'header-left' | 'header-right' | 'header-center';
    /**
     * @param {number} logoWidth - Largura do logo em pontos - OPCIONAL (default: 100)
     */
    logoWidth?: number;
    /**
     * @param {number} logoHeight - Altura do logo em pontos - OPCIONAL (default: 50)
     */
    logoHeight?: number;
    /**
     * @param {number} maxDescriptionLength - Número máximo de caracteres para descrição de produtos - OPCIONAL (default: 120)
     */
    maxDescriptionLength?: number;
    /**
     * @param {number} itemLineHeight - Altura da linha do item em pontos - OPCIONAL (default: calculado automaticamente)
     */
    itemLineHeight?: number;
};
