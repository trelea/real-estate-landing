'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Home} from "lucide-react";
import { useLocale } from "next-intl";
import programsData from "./mortgage-data.json";

const PrimaCasaPrograms = () => {
    const [activeProgram, setActiveProgram] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const locale = useLocale();

    type Locale = "ro" | "en" | "ru";
    const localeKey = (["ro", "en", "ru"].includes(locale) ? locale : "en") as Locale;
    const programs = programsData[localeKey];

    return (
        <div className="w-full">
            {/* Programs Header */}
            <div className="flex flex-col md:flex-row gap-4">
                {programs.map((program) => (
                    <button
                        key={program.id}
                        onClick={() => { setShowModal(true); setActiveProgram(program.id); }}
                        className={`flex-1 text-center p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer border-gray-200 bg-gray-50 hover:border-gray-3000`}
                    >
                        <div className="flex justify-center mb-4">
                            <div className={`p-3 rounded-lg transition-colors duration-300 bg-gray-300`}>
                                <Home className={`w-8 h-8 text-gray-600`} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {program.title}
                        </h3>
                    </button>
                ))}
            </div>

            {/* Modal for detailed info, with blurry background */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                        <h2 className="text-2xl font-bold mb-4">
                            {programs[activeProgram].title}
                        </h2>
                        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                            <Image
                                src={programs[activeProgram].content?.image ? programs[activeProgram].content?.image : ""}
                                alt={programs[activeProgram].title}
                                width={800}
                                height={400}
                                className="w-full h-auto mb-4 rounded"
                            />
                            {programs[activeProgram].content?.details.map((detail, index) => (
                                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                                    <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
                                    <p className="text-gray-700" style={{ whiteSpace: 'pre-line' }}>{detail.description}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                            x
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrimaCasaPrograms;