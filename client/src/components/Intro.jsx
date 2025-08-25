export default function Intro() {
  return (
    <section className="max-w-4xl mx-auto p-4 mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Bem-vindo ao - E-mAIl
      </h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Este sistema permite analisar e-mails rapidamente, identificando categorias e sugerindo respostas automáticas.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Como usar:</h2>
      <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Selecione a aba <strong>Arquivo</strong> para enviar um e-mail em PDF ou TXT, ou <strong>Texto</strong> para colar o conteúdo diretamente.</li>
        <li>Clique em <strong>Enviar</strong> para processar o e-mail.</li>
        <li>Aguarde o carregamento; o resultado será exibido ao lado.</li>
        <li>Troque de aba a qualquer momento; os dados anteriores serão limpos automaticamente.</li>
      </ol>

      <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
        Dica: Certifique-se de que o arquivo enviado ou o texto esteja correto antes de enviar.
      </p>
    </section>
  );
}
