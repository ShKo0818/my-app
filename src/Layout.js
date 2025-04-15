// Layout.js
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 必要に応じてトークン削除
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar onLogout={handleLogout} />
        <main className="col-md-9 col-lg-10 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
