import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header>
        <NavBar />
      </header>
      <div style={{
        padding: "10px 20px", 
      }}>
      <h1>Douglas Wai</h1>
      <p>Desenvolvedor Web</p>
      </div>
    </main>
  );
}
