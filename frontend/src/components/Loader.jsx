export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      </div>

      <p className="text-gray-600 text-sm animate-pulse"> LOADING...</p>
    </div>
  );
}
