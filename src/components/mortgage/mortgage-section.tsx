'use client'

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface Props {}

const currencyConfig = {
    'MDL': { min: 50000, max: 7000000, step: 10000, annualRate: 8.30, effectiveRate: 8.62 },
    'EUR': { min: 2000, max: 350000, step: 200, annualRate: 7.12, effectiveRate: 7.35 },
    'USD': { min: 2000, max: 30000, step: 200, annualRate: 6.30, effectiveRate: 6.32 },
};

export const MortgageSection: React.FC<Props> = ({}) => {
    const t = useTranslations("mortgage");
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [minLoanAmount, setMinLoanAmount] = useState(50000);
    const [maxLoanAmount, setMaxLoanAmount] = useState(7000000);
    const [loanAmountStep, setLoanAmountStep] = useState(10000);
    const [termMonths, setTermMonths] = useState(300);
    const [currency, setCurrency] = useState('MDL');
    
    // Calculate mortgage details
    const annualRate = currencyConfig[currency as keyof typeof currencyConfig].annualRate;
    const effectiveRate = currencyConfig[currency as keyof typeof currencyConfig].effectiveRate;
    const monthlyRate = annualRate / 100 / 12;
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    const totalPayment = monthlyPayment * termMonths;

    useEffect(() => {
        const config = currencyConfig[currency as keyof typeof currencyConfig];
        setLoanAmount((config.min + config.max) / 2);
        setMinLoanAmount(config.min);
        setMaxLoanAmount(config.max);
        setLoanAmountStep(config.step);
        setTermMonths(300);
    }, [currency]);
    
    const formatCurrency = (amount: number) => {
        return amount
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            .replace('.', ',');
    };

    const formatAmount = (amount: number) => {
        return amount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <section className="w-full flex gap-8 py-14 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="border bg-white p-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Calculator */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {t('title')}
                                </h1>
                                <p className="text-gray-600">
                                    {t('desc')}
                                </p>
                                {/* <div className="flex gap-4 mb-6">
                                    <button className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
                                        imobiliar
                                    </button>
                                    <span className="px-4 py-2 text-gray-600 text-sm">
                                        pentru refinanțare
                                    </span>
                                </div> */}
                            </div>

                            {/* Currency Selection */}
                            <div className="flex gap-6">
                                {['MDL', 'EUR', 'USD'].map((curr) => (
                                    <label key={curr} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="currency"
                                            value={curr}
                                            checked={currency === curr}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                                        />
                                        <span className="text-gray-700 font-medium">{curr}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Loan Amount Slider */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-600 font-medium">{t('loan_amount')}</label>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {formatAmount(loanAmount)} {currency}
                                    </span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min={minLoanAmount}
                                        max={maxLoanAmount}
                                        step={loanAmountStep}
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>{t('from')} {formatAmount(minLoanAmount)} {currency}</span>
                                        <span>{t('to')} {formatAmount(maxLoanAmount)} {currency}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Term Slider */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="text-gray-600 font-medium">{t('loan_term')}</label>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {termMonths} {t('months')}
                                    </span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="6"
                                        max="360"
                                        step="6"
                                        value={termMonths}
                                        onChange={(e) => setTermMonths(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>{t('from')} 6 {t('months')}</span>
                                        <span>{t('to')} 360 {t('months')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method
                            <div className="space-y-4">
                                <h3 className="text-gray-700 font-medium">primesc salariul / pensia</h3>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                                        />
                                        <span className="text-gray-700">pe un card maib</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="other"
                                            checked={paymentMethod === 'other'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                                        />
                                        <span className="text-gray-700">alte venituri</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="other-bank"
                                            checked={paymentMethod === 'other-bank'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                                        />
                                        <span className="text-gray-700">pe un card emis de altă bancă</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="history"
                                            checked={paymentMethod === 'history'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
                                        />
                                        <span className="text-gray-700">am o istorie creditară pozitivă</span>
                                    </label>
                                </div>
                            </div> */}
                        </div>

                        {/* Right Column - Results */}
                        <div className="space-y-6 bg-gray-100 p-10">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{t('monthly_payment')}</span>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {formatCurrency(monthlyPayment)} {currency}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{t('total_payment')}</span>
                                    <span className="text-lg font-bold text-gray-900">
                                        {formatCurrency(totalPayment)} {currency}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{t('interest_type')}</span>
                                    <span className="font-bold text-gray-900">{t('flotant')}</span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{t('interest_rate')}</span>
                                    <span className="font-bold text-gray-900">{annualRate}%</span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">{t('efective_annual_rate')}</span>
                                    <span className="font-bold text-gray-900">{effectiveRate}%</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {t('subtotal_desc')}
                            </p>

                            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium cursor-pointer py-4 px-6 transition-colors duration-200">
                                {t('button_calculate')}
                            </button>

                            {/* <div className="border-t pt-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">Graficul plăților</span>
                                    <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                                        Bună ziua<br />vă pot ajuta?
                                    </button>
                                </div>
                                
                                <div className="text-center">
                                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm underline">
                                        Informații precontractuale
                                    </button>
                                </div>
                                
                                <p className="text-xs text-gray-500 text-center leading-relaxed">
                                    suma afișată este orientativă și nu reprezintă un 
                                    angajament contractual al maib.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #14b8a6;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                
                .slider::-moz-range-thumb {
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #14b8a6;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                
                .slider::-webkit-slider-track {
                    background: linear-gradient(to right, #14b8a6 0%, #14b8a6 ${((loanAmount - 50000) / (7000000 - 50000)) * 100}%, #e5e7eb ${((loanAmount - 50000) / (7000000 - 50000)) * 100}%, #e5e7eb 100%);
                }
                
                input[type="range"]:nth-of-type(2)::-webkit-slider-track {
                    background: linear-gradient(to right, #14b8a6 0%, #14b8a6 ${((termMonths - 6) / (360 - 6)) * 100}%, #e5e7eb ${((termMonths - 6) / (360 - 6)) * 100}%, #e5e7eb 100%);
                }
            `}</style>
        </section>
    );
};