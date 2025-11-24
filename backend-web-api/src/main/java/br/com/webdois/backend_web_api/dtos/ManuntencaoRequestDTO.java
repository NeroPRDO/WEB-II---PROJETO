package br.com.webdois.backend_web_api.dtos;

public class ManuntencaoRequestDTO {
    private long idf_funcionarioAtual;
    private long idf_solicitacao;


    public long getIdf_funcionarioAtual() {
        return this.idf_funcionarioAtual;
    }

    public void setIdf_funcionarioAtual(long idf_funcionarioAtual) {
        this.idf_funcionarioAtual = idf_funcionarioAtual;
    }

    public long getIdf_solicitacao() {
        return this.idf_solicitacao;
    }

    public void setIdf_solicitacao(long idf_solicitacao) {
        this.idf_solicitacao = idf_solicitacao;
    }
    

    
}
