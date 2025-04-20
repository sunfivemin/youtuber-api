export default function Button({
  label = "확인",
  onClick,
  variant = "primary",
  disabled = false,
  icon = null,
}) {
  const base =
    "px-4 py-2 rounded font-semibold text-sm transition inline-flex items-center gap-1 whitespace-nowrap";

  const styles = {
    primary: `${base} bg-blue-500 hover:bg-blue-600 text-white `,
    secondary: `${base} bg-gray-200 hover:bg-gray-300 text-gray-800`,
    danger: `${base} bg-red-500 hover:bg-red-600 text-white`,
    outline: `${base} border border-blue-500 text-blue-500 hover:bg-blue-50`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
