import logo from "../Images/logo.png";
import SearchResult from "../Result-UI/SearchResult";
import { useContext } from "react";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";
import movieSearchContext from "../Context/context-provider";

export default function Header() {
  const { searchFound } = useContext(movieSearchContext);

  const links = [
    {
      page: "Sign-In",
      href: "sign-in",
      active: window.location.pathname.startsWith("/sign-in"),
    },
    {
      page: "Create Account",
      href: "new-acc",
      active: window.location.pathname.startsWith("/new-acc"),
    },
    {
      page: "Films",
      href: "films",
      active: window.location.pathname.startsWith("/films"),
    },
    {
      page: "Lists",
      href: "lists",
      active: window.location.pathname.startsWith("/lists"),
    },
    {
      page: "Members",
      href: "members",
      active: window.location.pathname.startsWith("/members"),
    },
    {
      page: "Journals",
      href: "journals",
      active: window.location.pathname.startsWith("/journals"),
    },
  ];
  return (
    <div className="flex justify-center ">
      <div className="flex gap-10">
        <div>
          <Link to="/">
            <img src={logo} alt="letterbox-logo" width={200}></img>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              style={{
                textDecoration: "none",
                color: link.active ? "blue" : "white",
              }}
              className="text-lg"
            >
              {link.page}
            </Link>
          ))}
          <SearchForm />
        </div>
      </div>
      {searchFound && <SearchResult />}
    </div>
  );
}
