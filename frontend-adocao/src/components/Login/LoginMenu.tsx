import "../../styles/Menu.css";

export default function LoginMenu() {
  return (
    <header>
      <nav>
        <li className="logo_adocao">
          <a href="#">ADOCÃO</a>
        </li>
        <ul className="lista_menu">
          <li>
            <a href="#">SOBRE O PROJETO</a>
          </li>
          <li>
            <a href="#">ADOTAR</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
