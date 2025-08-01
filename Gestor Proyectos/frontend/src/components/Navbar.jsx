import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Typography,
  Drawer,
  Grid,
  Button,
  Popconfirm,
} from "antd";
import {
  DashboardOutlined,
  ProfileOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";
import "./Navbar.css";

const { Sider } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

export default function Navbar({ collapsed, setCollapsed }) {
  const nav = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [permisosModulo, setPermisosModulo] = useState([]);

  const userSGP = JSON.parse(localStorage.getItem("userSGP")) || {};
  const nombre = userSGP.Nombre || "Usuario";
  const rolNombre = userSGP.NombreRol || "Sin rol";
  const rolID = userSGP.RolID;

  useEffect(() => {
    const fetchPermisos = async () => {
      if (!rolID) return;
      try {
        const { data } = await api.get(`/permisos-modulo/${rolID}`);
        localStorage.setItem("permisosModuloSGP", JSON.stringify(data));
        setPermisosModulo(data);
      } catch (err) {
        console.error("Error cargando permisos por módulo", err);
      }
    };

    fetchPermisos();
  }, [rolID]);

  const tienePermiso = (modulo) => {
    const permiso = permisosModulo.find(
      (p) => p.Modulo?.toLowerCase() === modulo.toLowerCase()
    );
    return permiso?.Seleccionar;
  };

  const showPermisos = ["ADMINISTRADOR", "GERENTE"].includes(
    rolNombre.toUpperCase()
  );

  const items = [
    ...(tienePermiso("Dashboard.jsx")
      ? [{ key: "/dashboard", icon: <DashboardOutlined />, label: "Dashboard" }]
      : []),
    ...(tienePermiso("Proyectos.jsx")
      ? [{ key: "/proyectos", icon: <ProfileOutlined />, label: "Proyectos" }]
      : []),
    ...(tienePermiso("PermisosRol.jsx") && showPermisos
      ? [
          {
            key: "/permisosRol",
            icon: <ProfileOutlined />,
            label: "Permisos Rol",
          },
        ]
      : []),
  ];

  const onClick = ({ key }) => {
    nav(key);
    if (isMobile) setDrawerVisible(false);
  };

  const renderMenuContent = () => (
    <>
      <div className="navbar-logo">
        <img
          src="/assets/imagenes/logo.png"
          alt="Systemgroup Project"
          style={{
            width: collapsed ? "32px" : "120px",
            transition: "width 0.2s",
          }}
        />
        {!collapsed && (
          <>
            <Text style={{ display: "block", marginTop: "8px", color: "#fff" }}>
              Systemgroup Optime
            </Text>
            <div style={{ marginTop: "12px" }}>
              <Text strong style={{ color: "#fff" }}>
                {nombre}
              </Text>
              <br />
              <Text style={{ fontSize: "12px", color: "#ddd" }}>
                {rolNombre}
              </Text>
            </div>
          </>
        )}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={onClick}
        items={items}
      />

      <Popconfirm
        title="¿Estás seguro de que quieres cerrar sesión?"
        okText="Sí"
        cancelText="No"
        onConfirm={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userSGP");
          localStorage.removeItem("permisosModuloSGP");
          window.location.replace("/login");
        }}
      >
        <Button
          danger
          type="primary"
          icon={<LogoutOutlined />}
          block
          style={{ margin: "16px auto", display: "block" }}
        >
          Salir
        </Button>
      </Popconfirm>
    </>
  );

  return (
    <>
      {isMobile ? (
        <>
          <div
            style={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1001,
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={() => setDrawerVisible(true)}
          >
            <MenuOutlined style={{ fontSize: 24, color: "#001529" }} />
          </div>

          <Drawer
            visible={drawerVisible}
            placement="left"
            closable={false}
            onClose={() => setDrawerVisible(false)}
            bodyStyle={{ padding: 0, background: "#001529" }}
          >
            {renderMenuContent()}
          </Drawer>
        </>
      ) : (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={200}
          className="navbar-vertical"
        >
          {renderMenuContent()}
        </Sider>
      )}
    </>
  );
}
