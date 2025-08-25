import { useState } from "react";
import { GoUpload } from "react-icons/go";
import { processFile, processText } from "../services/api";
import Loader from "./Loader";
import ResultCard from "./ResultCard";

export default function FormUpload() {
  const [activeTab, setActiveTab] = useState("file");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async ({ fileArg, textArg, event } = {}) => {
    if (event?.preventDefault) event.preventDefault();

    const selectedFile = fileArg ?? file;
    const emailText = textArg ?? text;

    if (!selectedFile && !emailText) {
        alert("Envie um arquivo ou digite o texto do email!");
        return;
    }

    try {
        setResult(null);
        setLoading(true);

        let data;

        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);
            data = await processFile(formData);
        } else {
            data = await processText(emailText);
        }

        setResult(data);
    } catch (error) {
        console.error(error);
        alert("Erro ao processar o email!");
    } finally {
        setLoading(false);
    }
 };


  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow rounded flex flex-col items-center">
      <div className="flex w-full mb-6">
        <button
          type="button"
          onClick={() => {
            setActiveTab("file");
            setResult(null);
            setText("");
          }}
          className={`flex-1 py-2 text-lg font-medium cursor-pointer text-center ${
            activeTab === "file"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700 transition"
          }`}
        >
          Arquivo
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("text");
            setResult(null);
            setFile(null)
          }}
          className={`flex-1 py-2 text-lg font-medium cursor-pointer text-center ${
            activeTab === "text"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700 transition"
          }`}
        >
          Texto
        </button>
      </div>

      <form onSubmit={(e) => handleSubmit({ event: e })} className="relative w-full space-y-4">
        {activeTab === "file" && (
          <>
            {!loading && !result ? (
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center gap-4 p-4 border border-blue-400 rounded w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-[250px] relative">
                  <input
                    type="file"
                    accept=".txt,.pdf"
                    id="fileInput"
                    onChange={(e) => {
                      const selectedFile = e.target.files?.[0];
                      if (selectedFile) {
                        setFile(selectedFile);
                        handleSubmit({ fileArg: selectedFile });
                        e.target.value = "";
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <GoUpload className="text-6xl sm:text-7xl text-blue-400" />
                  <label className="text-xl sm:text-2xl font-medium text-center">
                    Arraste e solte o arquivo
                  </label>
                  <label className="text-lg sm:text-xl font-medium text-center">ou</label>
                  <label
                    htmlFor="fileInput"
                    className="w-full bg-blue-400 text-white py-2 px-4 rounded cursor-pointer text-center flex items-center justify-center gap-2 hover:bg-blue-500 transition z-10"
                  >
                    Selecione
                  </label>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex flex-col items-center justify-center p-4 border border-blue-400 rounded w-full md:w-1/2 min-h-[250px] relative">
                  <input
                    type="file"
                    accept=".txt,.pdf"
                    id="fileInput2"
                    onChange={(e) => {
                      const selectedFile = e.target.files?.[0];
                      if (selectedFile) {
                        setFile(selectedFile);
                        handleSubmit({ fileArg: selectedFile });
                        e.target.value = "";
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <GoUpload className="text-6xl sm:text-7xl text-blue-400" />
                  <label className="text-xl sm:text-2xl font-medium text-center">
                    Arraste e solte o arquivo
                  </label>
                  <label className="text-lg sm:text-xl font-medium text-center">ou</label>
                  <label
                    htmlFor="fileInput2"
                    className="w-full bg-blue-400 text-white py-2 px-4 rounded cursor-pointer text-center flex items-center justify-center gap-2 hover:bg-blue-500 transition z-10"
                  >
                    Selecione
                  </label>
                </div>

                <div className="flex-1 flex items-center justify-center min-h-[250px]">
                  {loading && <Loader />}
                  {result && (
                    <ResultCard category={result.category} response={result.response} />
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === "text" && (
          <>
            {!loading && !result ? (
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center gap-4 p-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-[250px] relative">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-40 p-3 border rounded resize-none"
                    placeholder="Insira o conteúdo do e-mail aqui"
                  />
                  <button
                    type="submit"
                    className="self-start bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 ms-auto"
                    disabled={loading || !text.trim()}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 w-full items-center justify-center">
                <div className="flex flex-col flex-1 gap-4 min-h-[150px]">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-40 p-3 border rounded resize-none"
                    placeholder="Insira o conteúdo do e-mail aqui"
                  />
                  <button
                    type="submit"
                    className="self-start bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 ms-auto"
                    disabled={loading || !text.trim()}
                  >
                    Enviar
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center min-h-[250px]">
                  {loading && <Loader />}
                  {result && (
                    <ResultCard category={result.category} response={result.response} />
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
}
