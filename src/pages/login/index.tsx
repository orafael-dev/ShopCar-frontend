import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Container } from "../../components/container";
import { Input } from "../../components/input";

export function Login() {
  return (
    <Container>
      <div className="flex w-full min-h-screen justify-center items-center flex-col gap-4">
        <Link to="/" className="mb-6 max-w-sm w-full">
          <img src={logoImg} alt="Logo" className="w-full" />
        </Link>

        <form className="bg-white max-w-xl w-full p-4 rounded-lg">
          <Input
          type="email"
          placeholder="Digite o seu email"
          name="email" />
        </form>
      </div>
    </Container>
  );
}
