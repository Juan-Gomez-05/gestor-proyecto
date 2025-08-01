from fastapi import APIRouter
from pydantic import BaseModel
from bll.permisosRol_bll import PermisosRolBLL

router = APIRouter(prefix="/permisos-rol", tags=["PermisosRol"])

class PermisoModuloIn(BaseModel):
    modulo: str
    rol_id: int
    crear: bool
    editar: bool
    eliminar: bool
    seleccionar: bool

@router.get("/")
def listar():
    return PermisosRolBLL.listar()

@router.get("/{rol_id}")
def por_rol(rol_id: int):
    return PermisosRolBLL.por_rol(rol_id)

@router.post("/")
def crear(p: PermisoModuloIn):
    return PermisosRolBLL.crear(p)

@router.put("/{permiso_id}")
def actualizar(permiso_id: int, p: PermisoModuloIn):
    return PermisosRolBLL.actualizar(permiso_id, p)
