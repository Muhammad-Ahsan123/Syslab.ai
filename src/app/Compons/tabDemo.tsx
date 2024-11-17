"use client";

import Image from "next/image";
import { Tabs } from "../../components/ui/tab";

export function TabsDemo() {
    const tabs = [
        {
            title: "Proctor Parhai",
            value: "Proctor Parhai",
            content: (
                <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="md:text-4xl font-bold text-white">Proctor Parhai</p>
                    <p>This innovative app utilizing AI for online proctoring. ProctorParhai ensures exam integrity by confirming candidate identity, monitoring focus, detecting unauthorized materials, and preventing external assistance.</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "iParhai",
            value: "iParhai",
            content: (

                <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="md:text-4xl font-bold text-white">iParhai</p>
                    <p>This product is developed to meet the growing needs of online education. It provides an adaptive and adaptable solution to deliver contents according to the specific needs of a learner. It is being adopted by various schools.</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Eyecon",
            value: "Eyecon",
            content: (
                <div className="w-full overflow-hidden relative h-[400px] rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p className="text-xl md:text-4xl font-bold">Eyecon</p>
                    <p>This project is focused on detecting mixed critical events using computer vision. In that, mixed criticality is determined using context-aware based system. Using state-of-the-art technology such as Vision Transformers and Visual Language Models the project automatically determines different types of criticalities in a smart city using real-time.</p>
                    <DummyContent />
                </div>
            ),
        }
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="/linear.webp"
            alt="Product Image Here!"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] -bottom-10 inset-x-0 w-[90%] rounded-xl "
        />
    );
};