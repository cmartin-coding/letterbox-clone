import Header from "../Header/Header";

export default function PageTemplate(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
