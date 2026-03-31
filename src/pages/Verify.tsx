import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Verify() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);

    if (!/^\d+$/.test(pastedData)) {
      return;
    }

    const newCode = pastedData.split('');
    while (newCode.length < 6) {
      newCode.push('');
    }
    setCode(newCode.slice(0, 6));

    const nextEmptyIndex = newCode.findIndex((digit) => !digit);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');

    if (verificationCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      navigate('/status-tracker');
    }, 1000);
  };

  const handleResend = () => {
    setCode(['', '', '', '', '', '']);
    setError('');
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-white mb-3">Check your phone</h1>
          <p className="text-sm text-gray-400">
            We sent a 6-digit code to <span className="text-white">•••-••-7823</span>
          </p>
        </div>

        <form onSubmit={handleVerify}>
          <div className="flex justify-center gap-3 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-14 h-14 bg-[#1a1a1a] border border-gray-700 rounded-lg text-center text-xl text-white focus:outline-none focus:border-[#b89968] transition-colors"
              />
            ))}
          </div>

          {error && (
            <div className="mb-6 text-center text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || code.some((digit) => !digit)}
            className="w-full bg-[#b89968] hover:bg-[#a68959] text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={handleResend}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Didn't receive a code? Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
