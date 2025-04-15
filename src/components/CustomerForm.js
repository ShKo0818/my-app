import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // 顧客IDを取得（更新時のみ）
  const [form, setForm] = useState({
    companyName: "",
    personInCharge: "",
    email: "",
    phone: "",
    address: "",
  });

  // 初期値として既存データを取得（更新モード時）
  useEffect(() => {
    if (id) {
      const existing = JSON.parse(localStorage.getItem("customCustomers")) || {};
      const target = existing[id];
      if (target) {
        setForm({
          companyName: target.companyName,
          personInCharge: target.personInCharge,
          email: target.email,
          phone: target.phone,
          address: target.address,
        });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("customCustomers")) || {};

    // 登録か更新かを分岐
    const customerId = id || Date.now().toString();
    const previousContacts = id && existing[id]?.previousContacts || [];

    const newCustomer = {
      id: customerId,
      ...form,
      previousContacts,
      date: existing[customerId]?.date || new Date().toISOString(), // 登録日がある場合は保持
    };

    const updated = { ...existing, [customerId]: newCustomer };
    localStorage.setItem("customCustomers", JSON.stringify(updated));

    navigate("/dashboard");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "顧客情報の更新" : "顧客登録フォーム"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>会社名</label>
          <input
            name="companyName"
            className="form-control"
            maxLength="50"
            onChange={handleChange}
            value={form.companyName}
            required
          />
        </div>
        <div className="mb-3">
          <label>担当者名</label>
          <input
            name="personInCharge"
            className="form-control"
            maxLength="25"
            onChange={handleChange}
            value={form.personInCharge}
            required
          />
        </div>
        <div className="mb-3">
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            className="form-control"
            maxLength="50"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div className="mb-3">
          <label>電話番号</label>
          <input
            name="phone"
            className="form-control"
            maxLength="11"
            onChange={handleChange}
            value={form.phone}
            required
          />
        </div>
        <div className="mb-3">
          <label>住所</label>
          <input
            name="address"
            className="form-control"
            maxLength="40"
            onChange={handleChange}
            value={form.address}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "更新する" : "登録"}
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
