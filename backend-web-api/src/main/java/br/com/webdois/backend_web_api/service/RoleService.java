package br.com.webdois.backend_web_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.webdois.backend_web_api.entity.Role;

import br.com.webdois.backend_web_api.repository.RoleRepository;

@Service
public class RoleService {
    private RoleRepository roleRepository;


    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    
    
    public List<Role> create(Role role) {
        roleRepository.save(role);
        return list();
    }

    public List<Role> list() {
        return roleRepository.findAll();
    }

    public List<Role> update(Role role) {
        roleRepository.save(role);
        return list();
    }

    public List<Role> delete(long id) {
        roleRepository.deleteById(id);
        return list();
    }
}
