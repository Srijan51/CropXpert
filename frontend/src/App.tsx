import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Root application component with routing configuration.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold text-primary-700">🌾 CropXpert</h1><p className="mt-2 text-gray-600">AI-Powered Crop Disease & Pest Detection Advisory System</p></div>} />
          {/* TODO: Add feature routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
