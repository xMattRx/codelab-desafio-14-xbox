import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

export default function FAQAccordion() {
    const faqs: FAQ[] = [
        {
            question: 'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            question: 'O que está incluído no Xbox Series X?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            question: 'Como sei se minha TV é compatível com 4K?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center w-full py-12 px-[25.5px] lg:items-start md:px-8 lg:max-w-[1216px]">
            <h3 className="font-inter font-semibold text-[24px] lg:text-[48px] mb-[34px] md:mb-[32px] leading-[130%] text-center">
                <span className="text-[#9BF00B]">Perguntas</span> frequentes
            </h3>

            <div className="w-full max-w-md md:max-w-full">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full text-left font-medium text-white py-4 md:py-[22px] lg:py-[32px]"
                        >
                            <span className="font-inter font-medium text-[12px] lg:text-[24px] leading-[150%] text-white">
                                {faq.question}
                            </span>

                            <motion.span
                                animate={{
                                    rotate: openIndex === index ? 180 : 0,
                                    color: openIndex === index ? '#9BF00B' : '#7e807e',
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <ChevronDown style={{ color: 'currentColor' }} size={20} />
                            </motion.span>

                        </button>

                        <AnimatePresence>
                            {openIndex === index && faq.answer && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden font-inter font-medium text-[12px] lg:text-[18px] leading-[150%] text-[#C0C0C0] mb-4 lg:mb-6"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <hr className="border-t border-[#2E2E2E]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
