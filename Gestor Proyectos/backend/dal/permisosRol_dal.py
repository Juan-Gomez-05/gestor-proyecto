from config import get_connection

class PermisosRolDAL:

    @staticmethod
    def crud(accion, permiso_modulo_id=None, modulo=None, rol_id=None,
             crear=None, editar=None, eliminar=None, seleccionar=None):
        conn = get_connection()
        cursor = conn.cursor()
        try:
            cursor.execute("EXEC SP_CRUD_PermisosPorModuloRol ?, ?, ?, ?, ?, ?, ?, ?",
                           (accion, permiso_modulo_id, modulo, rol_id,
                            crear, editar, eliminar, seleccionar))

            if cursor.description:
                columns = [col[0] for col in cursor.description]
                return [dict(zip(columns, row)) for row in cursor.fetchall()]
            return []
        finally:
            cursor.close()
            conn.close()