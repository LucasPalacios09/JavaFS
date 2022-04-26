package com.fullstack.javaFS.controllers;


import com.fullstack.javaFS.dao.UsuarioDao;
import com.fullstack.javaFS.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    UsuarioDao usuarioDao;

//    @RequestMapping(value = "api/usuarios/{id}")
//    public Usuario getUsuario(@PathVariable Integer id){
//        Usuario usuario = new Usuario();
//        usuario.setId(id);
//        usuario.setNombre("Lucas");
//        usuario.setApellido("Palacios");
//        usuario.setTelefono("3815670244");
//        usuario.setEmail("lucas@palacios.com");
//        return usuario;
//    }

    @RequestMapping(value = "api/usuarios")
    public List<Usuario> getUsuarios(){

        return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public void delUsuario(@PathVariable Integer id){
        usuarioDao.delUsuario(id);
    }
}
