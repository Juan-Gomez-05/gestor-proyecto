from fastapi import HTTPException
from dal.roles_dal import RolesDAL

class RolesBLL:
    @staticmethod
    def listar_roles():
        return RolesDAL.crud_rol(4)

    @staticmethod
    def obtener_rol(rol_id: int):
        result = RolesDAL.crud_rol(5, rol_id=rol_id)
        if not result:
            raise HTTPException(status_code=404, detail="Rol no encontrado")
        return result[0]

    @staticmethod
    def crear_rol(nombre_rol: str):
        return RolesDAL.crud_rol(1, nombre_rol=nombre_rol)[0]

    @staticmethod
    def actualizar_rol(rol_id: int, nombre_rol: str):
        return RolesDAL.crud_rol(2, rol_id=rol_id, nombre_rol=nombre_rol)[0]

    @staticmethod
    def eliminar_rol(rol_id: int):
        return RolesDAL.crud_rol(3, rol_id=rol_id)[0]