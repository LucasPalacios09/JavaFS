// Call the dataTables jQuery plugin
/*$(document).ready(function() {
    cargarUsuarios();
  $('#dataTable').DataTable();
});

async function cargarUsuarios(){

const response = await fetch("usuarios",{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },

});

    const content = await response.json();
    //console.log(content);

    let listadoHtml = '';

    for (let usuario of content) {

        let usuarioHtml = '<tr><td>' + usuario.id
        + '</td><td>'+ usuario.nombre
        +'</td><td>'+ usuario.apellido
        +'</td><td>'+ usuario.telefono
        +'</td><td>'+ usuario.email
        +'</td><td><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';

        listadoHtml += usuarioHtml;
    }

        document.querySelector('#dataTable tbody').outerHTML = listadoHtml;



}*/

(async function cargarUsuarios(){
    
    let listadoHtml = '';

    const response = await fetch("api/usuarios",{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    
    });
    
        const content = await response.json();
        //console.log(content);
    
    
        for (let usuario of content) {
    
            let usuarioHtml = '<tr><td>' + usuario.id
            + '</td><td>'+ usuario.nombre
            +'</td><td>'+ usuario.apellido
            +'</td><td>'+ usuario.telefono
            +'</td><td>'+ usuario.email
            +'</td><td><a href="#" onClick=eliminarUsuario('+usuario.id+') class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';
    
            listadoHtml += usuarioHtml;
        }
    
            //document.querySelector('#dataTable tbody').outerHTML = listadoHtml;

            const tableHead = '<thead><tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Telefono</th><th>Email</th><th>Acciones</th></tr></thead>';
            const tableBody = '<tbody>'+ listadoHtml + '</tbody></table>';
            
            const table = '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">' +
            tableHead + tableBody +
            '</table>';

        
            document.getElementById('dataTableDiv').innerHTML = table;
    
    
    })();

   async function eliminarUsuario(id){

    if (!confirm("¿Seguro que desea eliminar el usuario?")) {
        return;
    }

    const response = await fetch("api/usuarios/"+id,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        });

        location.reload();

   }



