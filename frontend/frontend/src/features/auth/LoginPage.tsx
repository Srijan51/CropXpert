import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Mail, Lock, Eye, EyeOff, Smartphone, ShieldCheck, Leaf, CloudLightning, TrendingUp } from "lucide-react";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({ username: email, password });
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: <Leaf className="w-4 h-4" />, label: "Disease Detection", desc: "AI-powered leaf analysis" },
    { icon: <CloudLightning className="w-4 h-4" />, label: "Weather Alerts", desc: "Real-time risk forecasting" },
    { icon: <TrendingUp className="w-4 h-4" />, label: "Yield Insights", desc: "Data-driven crop analytics" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Trusted Platform", desc: "10,000+ farmers onboard" },
  ];

  return (
    <div
      className="min-h-screen w-full relative flex flex-col"
      style={{
        backgroundImage: "url('/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Top Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 sm:px-12 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-icon.png" alt="CropXpert Icon" className="w-10 h-10 object-contain" />
          <img src="/logo-text.png" alt="CropXpert" className="h-7 object-contain" />
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-white text-sm font-medium">
            🌐 English ▾
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left: Hero section */}
          <div className="flex-1 text-white space-y-7 max-w-xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">AI-Powered Crop Intelligence</span>
            </div>

            {/* Hero heading */}
            <h1
              style={{
                fontFamily: "'Compacta BT', 'Compacta Standard', 'League Gothic', 'Oswald', Impact, 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(48px, 5.5vw, 74px)",
                lineHeight: "1.15",
                letterSpacing: "1.5px",
                wordSpacing: "4px",
              }}
            >
              <span className="block text-white">Smart Decisions for</span>
              <span className="block">
                <span style={{ color: "#f5c518" }}>Healthier</span>
                <span className="text-white"> Crops</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-sm">
              CropXpert empowers farmers with AI insights, real-time weather, disease detection &amp; sustainable solutions to maximize yield and profit.
            </p>

            {/* Feature badges grid */}
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 hover:bg-white/15 transition-all"
                >
                  <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-[#8f2e29]/70 flex items-center justify-center text-white">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{f.label}</div>
                    <div className="text-white/60 text-xs leading-tight">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-6 pt-1">
              <div>
                <div className="text-white font-bold text-xl">10K+</div>
                <div className="text-white/60 text-xs">Active Farmers</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-white font-bold text-xl">95%</div>
                <div className="text-white/60 text-xs">Detection Accuracy</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-white font-bold text-xl">30+</div>
                <div className="text-white/60 text-xs">Crop Types</div>
              </div>
            </div>
          </div>

          {/* Right: Premium Login Card */}
          <div className="w-full max-w-sm">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.35)] p-8 border border-white/60 space-y-5">
              {/* Card Header */}
              <div className="flex flex-col items-center gap-1 pb-1">
                <img src="/logo-icon.png" alt="CropXpert" className="w-12 h-12 object-contain mb-1" />
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Welcome Back!</h2>
                <p className="text-gray-400 text-sm text-center">Login to continue to your CropXpert account</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm border border-red-100 flex items-center gap-2">
                  <span className="text-red-400">⚠</span> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Email or Mobile Number
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f2e29]/70" />
                    <input
                      type="text"
                      required
                      placeholder="Enter your email or mobile number"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] placeholder-gray-300 transition-all text-gray-800"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Password
                    </label>
                    <a href="#" className="text-xs text-[#8f2e29] hover:underline font-semibold">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f2e29]/70" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-11 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] placeholder-gray-300 transition-all text-gray-800"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white font-bold py-3.5 rounded-xl transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 text-base tracking-wide"
                  style={{
                    background: loading
                      ? "#8f2e29"
                      : "linear-gradient(135deg, #a33530 0%, #8f2e29 50%, #7a2622 100%)",
                    boxShadow: "0 4px 20px rgba(143, 46, 41, 0.45)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Logging in...
                    </span>
                  ) : (
                    <>Login <span aria-hidden className="text-lg">→</span></>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-150" style={{ backgroundColor: "#e5e7eb" }} />
                  <span className="text-gray-400 text-xs font-medium">or continue with</span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
                </div>

                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                  >
                    <Smartphone className="w-4 h-4 text-[#395c34]" />
                    Mobile OTP
                  </button>
                </div>

                {/* Sign up link */}
                <p className="text-center text-sm text-gray-400 pt-1">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#8f2e29] font-bold hover:underline">
                    Register
                  </Link>
                </p>
              </form>
            </div>

            {/* Trust badge below card */}
            <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Secure login · SSL encrypted · No spam</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
