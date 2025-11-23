// Importa os módulos necessários do Angular.
import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../../shared/Nav/nav'; 
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router'; 
import { SolicitacaoService } from '../../../services/solicitacao'; 
import { FormsModule } from '@angular/forms'; 
import { solicitacaoModel } from '../../../models/solicitacaoModel';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../services/categoriaService';

@Component({
  selector: 'app-visualizar-servico', 
  standalone: true, 
  imports: [CommonModule,NavComponent, RouterModule, RouterLink, FormsModule], 
  templateUrl: './visualizar-servico.html', 
  styleUrl: './visualizar-servico.css' 
})
export class VisualizarServico implements OnInit {
  
  private categoriaService = inject(CategoriaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router); // Injetar Router para redirecionar
  private solicitacaoService = inject(SolicitacaoService);
  nomeCategoria: string = 'Carregando...';
  solicitacao?: solicitacaoModel;

  ngOnInit(): void {
    const idUrl = this.route.snapshot.paramMap.get('id');
    if (idUrl) {
      this.buscarPorId(Number(idUrl));
    }
  }

  buscarPorId(id: number) {
    this.solicitacaoService.findById(id).subscribe({
      next: (dados) => {
        // ... (seu bloco de segurança que fizemos antes) ...

        this.solicitacao = dados;

        // === NOVO BLOCO: Buscar o nome da categoria ===
        if (dados.idCategoria) {
            this.categoriaService.getById(dados.idCategoria).subscribe({
                next: (cat) => {
                    this.nomeCategoria = cat.nomeCategoria;
                },
                error: () => {
                    this.nomeCategoria = 'Não identificada';
                }
            });
        }
        // ==============================================
      },
      error: (err) => { /* ... */ }
    });
  }
}
