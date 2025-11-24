import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FuncionarioResponse {
    id: number
    nome: string
    email: string
    senha: string
    cpf: string
    dataNascimento: string
    telefone: string
    cep: string
    logradouro: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string
    role: string
    ativo: boolean
    dataCriacao: string
    dataAtualizacao: string
}


export interface FuncionarioRequest {
    id?: number
    nome?: string
    email?: string
    senha?: string
    cpf?: string
    dataNascimento?: string
    telefone?: string
    cep?: string
    logradouro?: string
    numero?: string
    complemento?: string
    bairro?: string
    cidade?: string
    estado?: string
    role?: string
    ativo?: boolean
    dataCriacao?: string
    dataAtualizacao?: string
}


@Injectable({ providedIn: 'root' })
export class FuncionarioService {
    private apiUrl = 'http://localhost:8080/funcionarios';

    constructor(private http: HttpClient) { }

    getAll(): Observable<FuncionarioResponse[]> {
        return this.http.get<FuncionarioResponse[]>(this.apiUrl);
    }

    create(funcionario: FuncionarioRequest): Observable<string> {
        return this.http.post(this.apiUrl, funcionario, { responseType: 'text' });
    }

    update(id: number, funcionario: FuncionarioRequest): Observable<string> {
        return this.http.put(`${this.apiUrl}/${id}`, funcionario, { responseType: 'text' });
    }

    remove(id: number): Observable<string> {
        return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
    }
}