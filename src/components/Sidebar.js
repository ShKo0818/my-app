import { useNavigate, Link } from "react-router-dom";

function Sidebar({ onLogout }) {
  const navigate = useNavigate();

  return (
    <nav
      className="col-md-3 col-lg-2 sidebar d-flex flex-column justify-content-between"
      style={{
        backgroundColor: "#f0f8ff",
        borderRight: "4px solid #007bff",
      }}
    >
      <div>
        <h4 className="text-center my-4">営業管理アプリ</h4>

        {/* ホーム画面ボタン */}
        <Link to="/dashboard" className="btn btn-primary w-100 mb-3 d-flex align-items-center">
          <i className="fas fa-home me-2"></i>
          ホーム画面
        </Link>

        {/* 顧客登録ボタン */}
        <Link to="/register" className="btn btn-outline-primary w-100 mb-3 d-flex align-items-center">
          <i className="fas fa-user-plus me-2"></i>
          顧客登録
        </Link>
      </div>

      <div className="px-3 mb-3">
        <div className="bg-secondary text-white rounded p-3 mb-3">
          <div className="fw-bold">
            <i className="fas fa-user me-2"></i>
            ゲストユーザー
          </div>
          <div className="small">user@example.com</div>
        </div>

        <button onClick={onLogout} className="btn btn-danger w-100 d-flex align-items-center">
          <i className="fas fa-sign-out-alt me-2"></i>
          ログアウト
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
