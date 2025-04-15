// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import Login from "./pages/LoginPage";
import CustomerRegister from "./pages/CustomerRegister"; // ← 追加
import LoginPage from "./pages/LoginPage";
import Customer from "./components/Customer";
import CustomerForm from "./components/CustomerForm"; // ←これに変更


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        {/* サイドバーありのルートたち */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<CustomerRegister/>} />
          <Route path="/customer/:id" element={<Customer />} /> {/* 追加 */}
          <Route path="/update/:id" element={<CustomerForm />} /> {/* ← 更新用ルート */}
      
          {/* 他のページもここに追加 */}
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
