export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700  py-4 mt-8">
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm">&copy; {new Date().getFullYear()} E-mAIl. Todos os direitos reservados.</p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="https://www.github.com/viniciusdeventer" target="_blank" className="hover:underline">Contato</a>
        </div>
      </div>
    </footer>
  );
}
