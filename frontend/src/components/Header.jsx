import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";

export default function Header({
  title,
  showBack = false,
  onBack,
  rightElement = null,
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate("/");
  };

  return (
    <header className="relative w-full mx-auto flex items-center justify-between border rounded-md px-3 py-2 mb-6">
      <div className="flex items-center gap-2">
        {showBack && (
          <Button
            label="목록으로"
            variant="secondary"
            icon={<FaArrowLeft />}
            onClick={handleBack}
          />
        )}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
          {title}
        </h1>
      </div>
      {rightElement && <div>{rightElement}</div>}
    </header>
  );
}
