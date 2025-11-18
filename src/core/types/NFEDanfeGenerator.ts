/*
 * This file is part of NFeWizard-io.
 * 
 * NFeWizard-io is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * NFeWizard-io is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with NFeWizard-io. If not, see <https://www.gnu.org/licenses/>.
 */

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
    // pageWidth: 226.772 | 158.74;
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
