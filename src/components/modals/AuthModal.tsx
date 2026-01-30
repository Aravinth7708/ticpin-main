'use client';

import { useState, useRef, useEffect } from 'react';
import { X, ChevronDown, ChevronLeft, Settings, Mail, ShieldCheck, LogOut, MapPin, Search } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [view, setView] = useState<'number' | 'otp' | 'profile' | 'location'>('number');
    const [number, setNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (view === 'otp') {
            otpRefs.current[0]?.focus();
        }
    }, [view]);

    const handleOtpChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const completeLogin = () => {
        setView('profile');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">

                {/* VIEW: MOBILE NUMBER & OTP */}
                {(view === 'number' || view === 'otp') && (
                    <>
                        <div className="relative h-44 bg-gradient-to-br from-primary to-[#7a49d5] flex flex-col items-center justify-center p-8 text-white">
                            <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                            <h2 className="text-3xl font-black tracking-tighter mb-2">TICKPIN</h2>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 text-center leading-tight">
                                Discover the best of dining, events & play
                            </p>
                        </div>

                        <div className="p-10 space-y-8">
                            {view === 'number' ? (
                                <>
                                    <div className="text-center space-y-2">
                                        <h3 className="text-lg font-black text-zinc-900">Enter your mobile number</h3>
                                        <p className="text-xs font-bold text-zinc-400">Don't have an account? we'll create one for you</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 border border-zinc-100 rounded-2xl">
                                                <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-5 h-3.5 object-cover rounded-sm" />
                                                <span className="text-sm font-bold text-zinc-900">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="Enter mobile number"
                                                className="flex-1 px-5 py-3 bg-zinc-50 border border-zinc-100 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                            />
                                        </div>
                                        <button onClick={() => setView('otp')} className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-all shadow-lg active:scale-95">
                                            Continue
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-center space-y-2">
                                        <h3 className="text-lg font-black text-zinc-900">Enter OTP</h3>
                                        <p className="text-xs font-bold text-zinc-400">
                                            We've sent a code to +91 {number} <span className="text-primary cursor-pointer font-bold" onClick={() => setView('number')}>(Change)</span>
                                        </p>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="flex justify-between gap-2">
                                            {otp.map((digit, i) => (
                                                <input
                                                    key={i}
                                                    ref={(el) => { otpRefs.current[i] = el; }}
                                                    type="text"
                                                    inputMode="numeric"
                                                    className="w-11 h-11 bg-zinc-50 border border-zinc-100 rounded-xl text-center text-lg font-black focus:border-primary transition-all"
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(i, e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown(i, e)}
                                                />
                                            ))}
                                        </div>
                                        <button onClick={completeLogin} className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-all shadow-lg active:scale-95">
                                            Continue
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                )}

                {/* VIEW: PROFILE PANEL */}
                {view === 'profile' && (
                    <div className="p-6 h-[500px] flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors"><ChevronLeft size={20} /></button>
                            <h3 className="text-lg font-black tracking-tighter text-zinc-900">Profile</h3>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-[2rem] mb-8">
                            <div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-400">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-black text-zinc-900 leading-tight">Name</h4>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Client | Pro</p>
                            </div>
                        </div>

                        <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                            {[
                                { icon: <Settings size={16} />, label: 'Account Settings' },
                                { icon: <Mail size={16} />, label: 'Email Address' },
                                { icon: <ShieldCheck size={16} />, label: 'Terms & Conditions' },
                                { icon: <ShieldCheck size={16} />, label: 'Privacy Policy' },
                                { icon: <LogOut size={16} />, label: 'Logout', color: 'text-red-500' },
                            ].map((item, i) => (
                                <button key={i} className={`w-full flex items-center justify-between p-4 bg-white border border-zinc-100 rounded-2xl hover:border-primary/30 transition-all group ${item.color || 'text-zinc-600'}`}>
                                    <div className="flex items-center gap-3">
                                        <span className="opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                                        <span className="text-[13px] font-bold">{item.label}</span>
                                    </div>
                                    <ChevronDown size={14} className="-rotate-90 opacity-40 group-hover:opacity-80" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
