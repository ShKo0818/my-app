import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortByDate, setSortByDate] = useState(false); // 登録日で並び替えるかどうか
  const navigate = useNavigate();

  // 仮の製品データ
  const goods = [
    { id: 1, name: "PC周辺機器", revenue: "¥500,000", change: "+10%" },
    { id: 2, name: "TV周辺機器", revenue: "¥1,000,000", change: "+7%" },
    { id: 3, name: "白物家電", revenue: "¥800,000", change: "+5%" },
  ];

  // 初回のみ初期データを登録
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("customCustomers"));
    if (!existing) {
      const defaultCustomers = {
        "1001": {
          id: "1001",
          companyName: "YAMADAテクノロジー（株）",
          personInCharge: "山田 太郎",
          email: "taro.yamada@example.com",
          phone: "09012345678",
          address: "東京都港区南青山1-2-3",
          date: new Date("2024-01-01T10:00:00Z").toISOString(),  // 仮の登録日
          previousContacts: []
        },
        "1002": {
          id: "1002",
          companyName: "タナカ電機",
          personInCharge: "田中 一郎",
          email: "ichiro.tanaka@example.com",
          phone: "08098765432",
          address: "大阪市北区梅田1-1-1",
          date: new Date("2024-02-01T10:00:00Z").toISOString(),  // 仮の登録日
          previousContacts: []
        }
      };
      localStorage.setItem("customCustomers", JSON.stringify(defaultCustomers));
    }
  }, []);

  // 顧客データの取得
  useEffect(() => {
    const storedCustomers = JSON.parse(localStorage.getItem("customCustomers")) || {};
    const customerList = Object.values(storedCustomers);
    setCustomers(customerList);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const toggleSortByDate = () => {
    setSortByDate(!sortByDate);
  };

  const handleDelete = (id) => {
    const updatedCustomers = JSON.parse(localStorage.getItem("customCustomers"));
    delete updatedCustomers[id];
    localStorage.setItem("customCustomers", JSON.stringify(updatedCustomers));
    setCustomers((prevCustomers) => prevCustomers.filter(customer => customer.id !== id));
  };

  const filteredCustomers = customers.filter((c) =>
    c.companyName.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    if (sortByDate) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    } else {
      const nameA = a.companyName.toLowerCase();
      const nameB = b.companyName.toLowerCase();
      return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    }
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP");  // 日本の日付形式
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-md-9 col-lg-10 p-4">
          <div className="d-flex justify-content-between flex-wrap gap-2 mb-4">
            <h2 className="mb-0">顧客一覧</h2>
            <div className="btn-group">
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/register")}
              >
                <i className="fas fa-user-plus me-1" />
                顧客登録
              </button>
              <button onClick={handleLogout} className="btn btn-danger">
                <i className="fas fa-sign-out-alt me-1" />
                ログアウト
              </button>
            </div>
          </div>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="顧客名で検索"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* 顧客テーブル */}
          <div className="table-responsive mb-4">
            <h3>顧客一覧</h3>
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th onClick={toggleSortOrder} style={{ cursor: "pointer" }}>
                    企業名 {sortOrder === "asc" ? "⬆" : "⬇"}
                  </th>
                  <th>担当者名</th>
                  <th>メールアドレス</th>
                  <th>電話番号</th>
                  <th>住所</th>
                  <th onClick={toggleSortByDate} style={{ cursor: "pointer" }}>
                    登録日 {sortByDate && (sortOrder === "asc" ? "⬆" : "⬇")}
                  </th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {sortedCustomers.map((customer) => (
                  <tr key={customer.id}>
                    <td>
                      <Link
                        to={`/customer/${customer.id}`}
                        state={{ customer }}
                        className="customer-name text-primary fw-bold text-decoration-none"
                      >
                        {customer.companyName}
                      </Link>
                    </td>
                    <td>{customer.personInCharge}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>{formatDate(customer.date)}</td> {/* 登録日を表示 */}
                    <td>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => navigate(`/update/${customer.id}`)}
                      >
                        更新
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(customer.id)}
                      >
                        削除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 商品情報表示 */}
          <div className="table-responsive">
            <h3>商品情報</h3>
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>商品名</th>
                  <th>売上</th>
                  <th>変動</th>
                </tr>
              </thead>
              <tbody>
                {goods.map((good) => (
                  <tr key={good.id}>
                    <td>{good.name}</td>
                    <td>{good.revenue}</td>
                    <td>{good.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
