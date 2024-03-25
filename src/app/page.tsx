import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Article from "@/components/Article";

// md
const md = `
### sx-demo

- 内容1
- 内容2
`

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Topbar siteName="sx-demo" />
      <div className="flex-1 flex">
        <Navbar />
        <Article content={md} />
      </div>
      <Footer siteName="sx-demo" />
    </main>
  );
}
