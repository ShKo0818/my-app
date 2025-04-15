// LoginPage.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap読み込み（npmで入れてる場合）

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // フォームの送信を防止
    console.log("ログイン:", { email, password });
    navigate("/dashboard");
  };

  const handleGuestLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div
        className="login-container"
        style={{
          width: "400px",
          backgroundColor: "#ffffff",
          padding: "40px 30px",
          borderRadius: "10px",
          boxShadow: "0 7px 30px -10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="login-title"
          style={{
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "30px",
            color: "#007bff",
          }}
        >
          営業管理デモアプリ
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="メールアドレスを入力"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="パスワードを入力"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{ height: "48px", fontWeight: "600" }}>
            ログイン
          </button>

          <button
            type="button"
            onClick={handleGuestLogin}
            className="btn btn-secondary w-100 mt-2"
            style={{ height: "48px", fontWeight: "600" }}
          >
            ゲストモードで使う
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
