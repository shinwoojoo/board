import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="header" onClick={() => router.push("/")}>
      <h1>My Website</h1>
    </header>
  );
};

export default Header;
