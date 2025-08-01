import React, { useEffect, useState } from 'react';
import { Table, Switch, Button, message } from 'antd';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function PermisosRol() {
  const [permisos, setPermisos] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  // Validar rol y permisos
  const userSGP = JSON.parse(localStorage.getItem('userSGP')) || {};
  const permisosSGP = JSON.parse(localStorage.getItem('permisosSGP')) || {};

  if (userSGP.NombreRol?.toUpperCase() !== 'ADMINISTRADOR') {
    return <div>No autorizado</div>;
  }

  if (!permisosSGP.VerPermisosRol) {
    return <div>No tiene permiso para ver esta sección</div>;
  }

  useEffect(() => {
    fetchPermisos();
  }, []);

  const fetchPermisos = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/permisos-rol/');
      setPermisos(data);
    } catch {
      message.error('Error cargando permisos');
    } finally {
      setLoading(false);
    }
  };

  const handleSwitchChange = (rolId, field, value) => {
    setPermisos((prev) =>
      prev.map((permiso) =>
        permiso.RolID === rolId ? { ...permiso, [field]: value } : permiso
      )
    );
  };

  const handleGuardar = async (permiso) => {
    try {
      await api.put(`/permisos-rol/${permiso.RolID}`, {
        ver_todos_proyectos: permiso.VerTodosProyectos,
        ver_todas_tareas: permiso.VerTodasTareas,
        ver_tab_recursos: permiso.VerTabRecursos,
        ver_tab_financiero: permiso.VerTabFinanciero,
        ver_permisos_rol: permiso.VerPermisosRol,
      });
      message.success('Permisos actualizados');
    } catch {
      message.error('Error al actualizar permisos');
    }
  };

  const columns = [
    {
      title: 'Rol ID',
      dataIndex: 'RolID',
      key: 'RolID',
    },
    {
      title: 'Ver Todos Proyectos',
      render: (_, record) => (
        <Switch
          checked={record.VerTodosProyectos}
          onChange={(checked) =>
            handleSwitchChange(record.RolID, 'VerTodosProyectos', checked)
          }
        />
      ),
    },
    {
      title: 'Ver Todas Tareas',
      render: (_, record) => (
        <Switch
          checked={record.VerTodasTareas}
          onChange={(checked) =>
            handleSwitchChange(record.RolID, 'VerTodasTareas', checked)
          }
        />
      ),
    },
    {
      title: 'Tab Recursos',
      render: (_, record) => (
        <Switch
          checked={record.VerTabRecursos}
          onChange={(checked) =>
            handleSwitchChange(record.RolID, 'VerTabRecursos', checked)
          }
        />
      ),
    },
    {
      title: 'Tab Financiero',
      render: (_, record) => (
        <Switch
          checked={record.VerTabFinanciero}
          onChange={(checked) =>
            handleSwitchChange(record.RolID, 'VerTabFinanciero', checked)
          }
        />
      ),
    },
    {
      title: 'Ver Permisos Rol',
      render: (_, record) => (
        <Switch
          checked={record.VerPermisosRol}
          onChange={(checked) =>
            handleSwitchChange(record.RolID, 'VerPermisosRol', checked)
          }
        />
      ),
    },
    {
      title: 'Acciones',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleGuardar(record)}>
          Guardar
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Permisos por Rol</h2>
      <Table
        columns={columns}
        dataSource={permisos}
        rowKey="RolID"
        loading={loading}
        pagination={false}
      />
    </div>
  );
}
