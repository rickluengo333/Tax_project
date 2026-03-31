import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError('Invalid email or password');
      setLoading(false);
    } else {
      navigate('/verify');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-8">
          <Shield size={14} />
          <span>Secured with multi-factor authentication</span>
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-[#c4a053] to-[#8b7038] flex items-center justify-center">
            <div className="text-white font-bold text-lg">S</div>
          </div>
          <span className="text-white text-2xl font-semibold tracking-wider">SOVEREIGN</span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Tax Preparation Client Portal</h1>
          <p className="text-sm text-gray-400">Sign in to your tax portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#b89968] hover:bg-[#a68959] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          New client? You'll receive an invite from your tax preparer.
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-[#0a0a0a] text-gray-500">Or sign in with</span>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400 mb-4">
            If your firm uses Microsoft 365 or Google Workspace, sign in below
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-[#1a1a1a] border border-gray-700 hover:bg-[#242424] text-white py-3 rounded-lg flex items-center justify-center gap-3 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
                <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"/>
                <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
              </svg>
              Sign in with Google
            </button>

            <button
              type="button"
              className="w-full bg-[#1a1a1a] border border-gray-700 hover:bg-[#242424] text-white py-3 rounded-lg flex items-center justify-center gap-3 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 23 23">
                <path fill="#f3f3f3" d="M0 0h11v11H0z"/>
                <path fill="#f35325" d="M12 0h11v11H12z"/>
                <path fill="#81bc06" d="M0 12h11v11H0z"/>
                <path fill="#05a6f0" d="M12 12h11v11H12z"/>
              </svg>
              Sign in with Microsoft
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          By signing in, you agree to our{' '}
          <button className="text-gray-400 hover:text-gray-300 underline">Terms of Service</button>
          {' '}and{' '}
          <button className="text-gray-400 hover:text-gray-300 underline">Privacy Policy</button>
        </div>
      </div>
    </div>
  );
}
