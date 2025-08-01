# src/bll/areas_bll.py
from fastapi import HTTPException
from pyodbc import IntegrityError
from dal.areas_dal import AreasDAL

class AreasBLL:
    @staticmethod
    def listar_areas():
        # acción 1 = GetAll
        return AreasDAL.crud_area(1)

    @staticmethod
    def obtener_area(idArea: int):
        # acción 2 = GetById
        result = AreasDAL.crud_area(2, idArea)
        if not result:
            raise HTTPException(status_code=404, detail="Área no encontrada")
        return result[0]

    @staticmethod
    def crear_area(data):
        # acción 3 = Insert
        try:
            new = AreasDAL.crud_area(3, None, data.nombreArea, data.activo)[0]
            return new
        except IntegrityError as e:
            raise HTTPException(status_code=400, detail=f"Error al crear área: {e}")

    @staticmethod
    def actualizar_area(idArea: int, data):
        # acción 4 = Update
        try:
            updated = AreasDAL.crud_area(4, idArea, data.nombreArea, data.activo)[0]
            return updated
        except IntegrityError as e:
            raise HTTPException(status_code=400, detail=f"Error al actualizar área: {e}")

    @staticmethod
    def eliminar_area(idArea: int):
        # acción 5 = Delete
        deleted = AreasDAL.crud_area(5, idArea)
        # puedes devolver ok o examinar RowsAffected si lo devuelve tu SP
        return {"deleted": True}
