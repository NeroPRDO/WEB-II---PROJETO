package br.com.webdois.backend_web_api.dtos;

public class FInalizarManuntencaoRequestDTO {
    private long idf_solicitacao;

    private String descricacaoManuntencao;

    private String orientacao;

    public String getDescricacaoManuntencao() {
        return this.descricacaoManuntencao;
    }

    public void setDescricacaoManuntencao(String descricacaoManuntencao) {
        this.descricacaoManuntencao = descricacaoManuntencao;
    }

    public String getOrientacao() {
        return this.orientacao;
    }

    public void setOrientacao(String orientacao) {
        this.orientacao = orientacao;
    }

    public long getIdf_solicitacao() {
        return this.idf_solicitacao;
    }

    public void setIdf_solicitacao(long idf_solicitacao) {
        this.idf_solicitacao = idf_solicitacao;
    }
}
