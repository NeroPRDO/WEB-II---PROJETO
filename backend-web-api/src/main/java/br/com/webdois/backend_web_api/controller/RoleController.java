package br.com.webdois.backend_web_api.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.webdois.backend_web_api.entity.Role;

import br.com.webdois.backend_web_api.service.RoleService;

@RestController
@RequestMapping("/roles")
public class RoleController {

    private RoleService roleService;


    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @PostMapping
    List<Role> create(@RequestBody Role role) {
        return roleService.create(role);
    }

     @GetMapping
    List<Role> list() {
        return roleService.list();
    }

    @PutMapping
    List<Role> update(@RequestBody  Role role) {
        return roleService.update(role);
    }

    @DeleteMapping("{id}")
    List<Role> delete(@PathVariable("id") long id) {
        return roleService.delete(id);
    }
}
