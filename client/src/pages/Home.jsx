import FormUpload from "../components/FormUpload";
import FooterTerms from "../components/FooterTerms";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900 p-4">
      <Intro />
      <div className="flex flex-col items-center justify-center flex-1">
        <FormUpload />
      </div>
      <FooterTerms />
    </div>
  );
}
