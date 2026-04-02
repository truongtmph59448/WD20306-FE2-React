import { Button } from "antd";
import { useUser } from "../context/UserContext";

const Login = () => {
  const { setUser } = useUser();

  const handleLogin = () => {
    setUser({
      name: "Truong",
      avatar: "f:\Downloads\FBDown.to_AQMfXHR1NpRLL96MNZKVZYxcz8_rN0Lf_vu4jjkbMNo2NKVl9kn1DysFdrEgodSvfmVvnaemBEb7kpD_oBpTAYoO-PBWvaSnFX72UTvP7ng8Eg_720p_(HD).mp4",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>

      <Button danger onClick={handleLogout} style={{ marginLeft: 10 }}>
        Logout
      </Button>
    </div>
  );
};

export default Login;