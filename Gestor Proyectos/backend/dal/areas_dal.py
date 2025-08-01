from config import get_connection

class AreasDAL:
    @staticmethod
    def crud_area(
        accion: int,
        idArea: int = None,
        nombreArea: str = None,
        activo: int = None
    ):
        conn = get_connection()
        cur = conn.cursor()
        # llamamos al SP sp_ManageAreas con 4 params
        cur.execute(
            "EXEC dbo.sp_ManageAreas ?,?,?,?",
            (accion, idArea, nombreArea, activo)
        )

        rows = []
        if cur.description:
            cols = [c[0] for c in cur.description]
            for r in cur.fetchall():
                row = dict(zip(cols, r))
                # convertir fechaIntegracion a string o cadena vacía
                dt = row.get('fechaIntegracion')
                row['fechaIntegracion'] = dt.isoformat() if dt else ''
                rows.append(row)

        conn.commit()
        cur.close()
        conn.close()
        return rows