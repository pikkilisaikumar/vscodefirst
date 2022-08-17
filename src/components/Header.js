import { useDispatch, useSelector } from "react-redux";

import { changeLanguage } from "../Redux/Reducer";

import "./Header.css";

const languageOptions = [
  { id: 1, value: "EN", language: "English" },
  { id: 2, value: "HI", language: "हिंदी" },
  { id: 3, value: "TE", language: "తెలుగు" },
];

const Header = () => {
  const dispatch = useDispatch();

  const languageData = useSelector((state) => state.language.language);

  console.log(languageData);

  const onChangeLanguage = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <nav className="nav-header">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png"
        alt="website logo"
      />
      <select
        className="language-dropdown"
        value={languageData}
        onChange={onChangeLanguage}
      >
        {languageOptions.map((eachOption) => (
          <option key={eachOption.id} value={eachOption.value}>
            {eachOption.language}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Header;
