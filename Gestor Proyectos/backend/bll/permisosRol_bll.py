from dal.permisosRol_dal import PermisosRolDAL
from fastapi import HTTPException

class PermisosRolBLL:

    @staticmethod
    def listar():
        return PermisosRolDAL.crud(3)

    @staticmethod
    def obtener_por_rol(rol_id:int):
        result = PermisosRolDAL.crud(4, rol_id=rol_id)
        if not result:
            raise HTTPException(status_code=404, detail="Permisos no encontrados")
        return result[0]

    @staticmethod
    def actualizar(rol_id, data):
        return PermisosRolDAL.crud(
            2,
            permiso_modulo_id=permiso_id,
            crear=payload.crear,
            editar=payload.editar,
            eliminar=payload.eliminar,
            seleccionar=payload.seleccionar
        )[0]
    
    @staticmethod
    def crear(payload):
        return PermisosRolDAL.crud(
            1,
            modulo=payload.modulo,
            rol_id=payload.rol_id,
            crear=payload.crear,
            editar=payload.editar,
            eliminar=payload.eliminar,
            seleccionar=payload.seleccionar
        )[0]
