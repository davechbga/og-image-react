
import { Header } from "@/components/Header";
import { OgImageEditor } from "@/components/OgImageEditor";
import { ThemeProvider } from "@/hooks/useTheme";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <OgImageEditor />
        </main>
        <footer className="py-6 border-t">
          <div className="container text-center text-sm text-muted-foreground">
            <p>OG Image Forge Studio - Create beautiful Open Graph images</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
