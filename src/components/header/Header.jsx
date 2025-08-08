import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="content">
            <NavLink to="/post">Добавить</NavLink>
            <NavLink to="/get">Посмотреть</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
