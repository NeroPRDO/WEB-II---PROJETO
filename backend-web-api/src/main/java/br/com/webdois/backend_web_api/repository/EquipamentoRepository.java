package br.com.webdois.backend_web_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.webdois.backend_web_api.entity.Equipamento;


public interface EquipamentoRepository extends JpaRepository<Equipamento, Long> {

}