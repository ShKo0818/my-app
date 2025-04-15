import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function UpdateCustomerPage() {
  const { state } = useLocation(); // 受け取った顧客情報
  const customer = state?.customer;
  const [name, setName] = useState(customer?.name || "");
  const [email, setEmail] = useState(customer?.email || "");
  const [phone, setPhone] = useState(customer?.phone || "");
  const [revenue, setRevenue] = useState(customer?.revenue || "");
  const [change, setChange] = useState(customer?.change || "");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const updatedCustomer = {
      ...customer,
      name,
      email,
      phone,
      revenue,
      change,
    };

    // 顧客情報を更新してダッシュボードに戻る
    navigate("/dashboard", { state: { updatedCustomer } });
  };

  return (
    <div className="container">
      <h2>顧客情報の更新</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">企業名</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">メールアドレス</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">電話番号</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="revenue" className="form-label">売上</label>
          <input
            type="text"
            id="revenue"
            className="form-control"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="change" className="form-label">前年比</label>
          <input
            type="text"
            id="change"
            className="form-control"
            value={change}
            onChange={(e) => setChange(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">更新</button>
      </form>
    </div>
  );
}

export default UpdateCustomerPage;
