"use client";

import Image from "next/image";
import { Tabs } from "../../components/ui/tab";
// import dhjd from '../../../public/file.svg'
interface DummyContentProps {
    src: string;
}
export function TabsDemo() {
    const tabs = [
        {
            title: "ProctorParhai",
            value: "ProctorParhai",
            content: (
                <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-white bg-gradient-to-br bg-[#1E76C5]">
                    <DummyContent src="https://syslab.ai/assets/images/service-icon-02.png" />
                    <p className="md:text-4xl font-bold text-black mb-2">ProctorParhai</p>
                    <p className="text-gray-400">This innovative app utilizing AI for online proctoring. ProctorParhai ensures exam integrity by confirming candidate identity, monitoring focus, detecting unauthorized materials, and preventing external assistance.</p>
                </div>
            ),
        },
        {
            title: "iParhai",
            value: "iParhai",
            content: (

                <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-white bg-gradient-to-br bg-[#1E76C5]">
                    <DummyContent src="https://syslab.ai/assets/images/service-icon-03.png" />
                    <p className="md:text-4xl font-bold text-black mb-2">iParhai</p>
                    <p className="text-gray-400">This product is developed to meet the growing needs of online education. It provides an adaptive and adaptable solution to deliver contents according to the specific needs of a learner. It is being adopted by various schools.</p>
                </div>
            ),
        },
        {
            title: "Eyecon",
            value: "Eyecon",
            content: (
                <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-white bg-gradient-to-br bg-[#1E76C5]">
                    <DummyContent src="https://syslab.ai/assets/images/service-icon-04.png" />
                    <p className="md:text-4xl font-bold text-black mb-2">Eyecon</p>
                    <p className="text-gray-400">This project is focused on detecting mixed critical events using computer vision. In that, mixed criticality is determined using context-aware based system. Using state-of-the-art technology such as Vision Transformers and Visual Language Models the project automatically determines different types of criticalities in a smart city using real-time.</p>
                </div>
            ),
        }
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-20 mb-10">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = ({ src }: { src: string }) => {
    return (
        <Image
            src={src}
            alt="Product Image Here!"
            width={70} // Smaller width
            height={70} // Smaller height
            className="object-cover object-left-top mb-8" // Adjusted width and height using Tailwind
        />

    );
};

export default DummyContent;