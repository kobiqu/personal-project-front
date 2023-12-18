import {
  header_style_1,
  header_style_2,
  header_style_3,
  header_style_4,
  header_img_1,
} from "./style/header_style";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  return (
    <header style={header_style_1}>
      <div style={header_style_2}></div>
      <img src="/logo/logo.jpg" alt="logo" style={header_img_1} />
      <div style={header_style_3}>
        <h2 style={header_style_4}>תמיד פה בשבילכם</h2>
        <h1 style={{ color: "orangered" }}>
          <PhoneIcon sx={{ marginRight: "7%" }} /> * 6575
        </h1>
      </div>
      <LoginIcon sx={{ color: "Highlight", position: "absolute" }} />
    </header>
  );
};

export default Header;
