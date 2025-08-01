from config import get_connection

class RolesDAL:
    @staticmethod
    def crud_rol(accion, rol_id=None, nombre_rol=None):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(
            "EXEC dbo.SP_CRUD_Rol ?, ?, ?",
            (accion, rol_id, nombre_rol)
        )
        cols = [c[0] for c in cursor.description]
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return [dict(zip(cols, row)) for row in rows]