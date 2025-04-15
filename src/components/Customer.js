import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const mockData = {
          "1": {
            id: "1",
            companyName: "YAMADAテクノロジー（株）",
            personInCharge: "山田 太郎",
            email: "yamada@example.com",
            phone: "090-1111-2222",
            address: "東京都港区赤坂1-1-1",
            previousContacts: [
              { name: "山田 一郎", email: "ichiro@example.com", phone: "090-0000-0001" },
              { name: "山田 花子", email: "hanako@example.com", phone: "090-0000-0002" }
            ]
          },
          "2": {
            id: "2",
            companyName: "SATO電機工業（株）",
            personInCharge: "佐藤 花子",
            email: "satoh@example.com",
            phone: "080-3333-4444",
            address: "大阪府大阪市北区梅田2-2-2",
            previousContacts: [
              { name: "佐藤 三郎", email: "saburo@example.com", phone: "080-0000-0003" },
              { name: "田中 次郎", email: "jirou@example.com", phone: "080-0000-0004" }
            ]
          },
          "3": {
            id: "3",
            companyName: "鈴木工業（株）",
            personInCharge: "小林 次郎",
            email: "suzuki@example.com",
            phone: "070-5555-6666",
            address: "愛知県名古屋市中区栄3-3-3",
            previousContacts: [
              { name: "鈴木 一郎", email: "ichiro.suzuki@example.com", phone: "070-0000-0005" },
              { name: "山本 花", email: "hana.yamamoto@example.com", phone: "070-0000-0006" }
            ]
          }
        };

        // ローカルストレージの追加データを取得
        const storedCustomers = JSON.parse(localStorage.getItem("customCustomers")) || {};
        const combinedData = { ...mockData, ...storedCustomers };

        const data = combinedData[id];

        if (data) {
          setCustomer(data);
        } else {
          setError("顧客情報が見つかりません");
        }
      } catch (err) {
        setError("データ取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p className="text-danger">エラー: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>{customer.companyName}の詳細</h2>
      <p><strong>担当者：</strong>{customer.personInCharge}</p>
      <p><strong>メール：</strong>{customer.email}</p>
      <p><strong>電話番号：</strong>{customer.phone}</p>
      <p><strong>住所：</strong>{customer.address}</p>

      <hr />

      <h4>過去の担当者一覧</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>名前</th>
            <th>メール</th>
            <th>電話番号</th>
          </tr>
        </thead>
        <tbody>
          {customer.previousContacts?.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h4>地図</h4>
      <div style={{ 
          width: "100%", 
          height: "400px", 
          textAlign: "center", 
          border: "2px solid #000", 
          borderRadius: "8px", 
          overflow: "hidden" 
        }}>
        <img 
          src="https://via.placeholder.com/640x360/0bd/fff?text=Hello!!!" 
          alt="仮の地図データ" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </div>
    </div>
  );
}

export default Customer;
