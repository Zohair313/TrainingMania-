import React from 'react';
import { X, Info, Shield, Users, BookOpen, AlertCircle, PlayCircle } from 'lucide-react';

const WelcomeModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-5xl max-h-[95vh] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-12 duration-500 border border-white/20">

                {/* Header - Fixed */}
                <div className="relative h-40 md:h-48 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-white blur-[100px] animate-pulse"></div>
                        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 rounded-full bg-white blur-[100px] animate-pulse delay-700"></div>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95 cursor-pointer z-20 group"
                    >
                        <X size={24} />
                    </button>

                    <div className="text-center relative z-10 px-8">
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md leading-none">Training Mania</h1>
                        <p className="text-indigo-100 font-bold mt-2 text-sm md:text-lg opacity-90">Hardware-Free Demo Mode Instructions</p>
                    </div>
                </div>

                {/* Content Section - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-slate-50/50 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Admin Portal Section */}
                        <div className="bg-white p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                                    <Shield size={22} />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">Admin Portal</h2>
                            </div>
                            <ul className="space-y-4 text-slate-600 font-medium text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                    <p><span className="text-slate-900 font-bold">Quick Access:</span> No password required. Use any email like <code className="bg-indigo-50 px-2 py-0.5 rounded text-indigo-600 text-xs">admin@demo.com</code></p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                    <p><span className="text-slate-900 font-bold">New Training:</span> Upload PDFs/Videos to generate AI tests instantly.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                    <p><span className="text-slate-900 font-bold">Analytics:</span> Track candidates and detailed performance reports.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Candidate Portal Section */}
                        <div className="bg-white p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                                    <Users size={22} />
                                </div>
                                <h2 className="text-xl font-black text-slate-900 tracking-tight">Candidate Portal</h2>
                            </div>
                            <ul className="space-y-4 text-slate-600 font-medium text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                                    <p><span className="text-slate-900 font-bold">AI Assistant:</span> Ask real-time questions about your course content.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                                    <p><span className="text-slate-900 font-bold">E-Proctoring:</span> Secure exam mode with tab-switch detection active.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                                    <p><span className="text-slate-900 font-bold">Certificates:</span> Downloadable awards for successful module completion.</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Simple Footer */}
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={onClose}
                            className="w-full md:w-auto px-12 py-5 bg-indigo-600 text-white font-black text-xl rounded-2xl hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 cursor-pointer group"
                        >
                            WATCH DEMO
                            <PlayCircle className="w-6 h-6 group-hover:scale-125 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
