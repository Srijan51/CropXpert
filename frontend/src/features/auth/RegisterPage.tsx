import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Leaf, CloudLightning, TrendingUp, User, Phone } from "lucide-react";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "farmer",
    language: "en",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(formData);
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.detail || "Failed to register");
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
      <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3 sm:py-4">
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
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">

          {/* Left: Hero section */}
          <div className="hidden md:flex flex-col flex-1 text-white space-y-6 max-w-xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">Join 10,000+ Farmers Today</span>
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

          {/* Right: Premium Register Card */}
          <div className="w-full max-w-sm mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.35)] p-5 sm:p-8 border border-white/60 space-y-4">
              {/* Card Header */}
              <div className="flex flex-col items-center gap-1 pb-1">
                <img src="/logo-icon.png" alt="CropXpert" className="w-11 h-11 object-contain mb-1" />
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Create Account</h2>
                <p className="text-gray-400 text-sm text-center">Join CropXpert and grow smarter</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-xl text-sm border border-red-100 flex items-center gap-2">
                  <span className="text-red-400">⚠</span> {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name field */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f2e29]/70" />
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] placeholder-gray-300 transition-all text-gray-800"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f2e29]/70" />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] placeholder-gray-300 transition-all text-gray-800"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f2e29]/70" />
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your mobile number"
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] placeholder-gray-300 transition-all text-gray-800"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8f2e29]/70" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Create a strong password"
                      className="w-full pl-10 pr-11 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] placeholder-gray-300 transition-all text-gray-800"
                      value={formData.password}
                      onChange={handleChange}
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

                {/* Role & Language row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Role</label>
                    <select
                      name="role"
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] text-gray-700 transition-all"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="farmer">Farmer</option>
                      <option value="extension_worker">Extension Worker</option>
                      <option value="officer">Officer</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Language</label>
                    <select
                      name="language"
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8f2e29]/25 focus:border-[#8f2e29] text-gray-700 transition-all"
                      value={formData.language}
                      onChange={handleChange}
                    >
                      <option value="en">English</option>
                      <option value="hi">हिंदी</option>
                      <option value="mr">मराठी</option>
                    </select>
                  </div>
                </div>

                {/* Register button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white font-bold py-3 rounded-xl transition-all shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 text-base tracking-wide mt-1"
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
                      Creating account...
                    </span>
                  ) : (
                    <>Create Account <span aria-hidden className="text-lg">→</span></>
                  )}
                </button>

                {/* Login link */}
                <p className="text-center text-sm text-gray-400 pt-1">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#8f2e29] font-bold hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>

            {/* Trust badge below card */}
            <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Secure registration · SSL encrypted · No spam</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
