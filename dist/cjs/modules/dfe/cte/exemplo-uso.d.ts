/**
 * Exemplo 1: Consulta por último NSU
 *
 * Este método consulta todos os documentos disponíveis a partir do último NSU conhecido.
 * É útil para sincronização incremental de documentos.
 */
declare function exemploPorUltNSU(): Promise<void>;
/**
 * Códigos de retorno comuns
 *
 * 137 - Nenhum documento localizado
 * 138 - Documento localizado
 * 656 - Consulta a ser processada
 */
export { exemploPorUltNSU, exemploPorNSU };
/**
 * Códigos de retorno comuns
 *
 * 137 - Nenhum documento localizado
 * 138 - Documento localizado
 * 656 - Consulta a ser processada
 */
export { exemploPorUltNSU, exemploPorChave, exemploPorNSU };
