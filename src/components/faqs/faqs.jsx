/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MyAccordion } from "../../ui";

const Faqs = () => {
    const [list, setList] = useState([
        {
            question: "Ingliz tilini 0 dan o’rganish uchun qancha vaqt talab qilinadi?",
            answer: "Agarda barcha berilgan vazifalar o’z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so’zlashishga, to’laqonli ravishda eshitib tushunish, o’qish, fikrlarni ifodalab berish mahoratlariga ega bo’lishingiz kafolatlanadi",
            active: 1
        },
        {
            question: "Uyga vazifa qattiq nazoratga olinganmi?",
            answer: "Agarda barcha berilgan vazifalar o’z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so’zlashishga, to’laqonli ravishda eshitib tushunish, o’qish, fikrlarni ifodalab berish mahoratlariga ega bo’lishingiz kafolatlanadi",
        },
        {
            question: "Ingliz tilini bilaman, qancha muddatda IELTS topshira olaman?",
            answer: "Agarda barcha berilgan vazifalar o’z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so’zlashishga, to’laqonli ravishda eshitib tushunish, o’qish, fikrlarni ifodalab berish mahoratlariga ega bo’lishingiz kafolatlanadi",
        },
        {
            question: "Qaysi kursga mos kelishimni qanday bilaman?",
            answer: "Agarda barcha berilgan vazifalar o’z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so’zlashishga, to’laqonli ravishda eshitib tushunish, o’qish, fikrlarni ifodalab berish mahoratlariga ega bo’lishingiz kafolatlanadi",
        },
        {
            question: "Kurs uchun kitob sotib olishim kerakmi?",
            answer: "Agarda barcha berilgan vazifalar o’z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so’zlashishga, to’laqonli ravishda eshitib tushunish, o’qish, fikrlarni ifodalab berish mahoratlariga ega bo’lishingiz kafolatlanadi",
        },
        {
            question: "Kurs uchun kitob sotib olishim kerakmi?",
            answer: "Agarda barcha berilgan vazifalar o’z vaqtida bajarilsa, siz butunlay 0 dan 11 oy davomida ingliz tilini darajangizni baholovchi har qanday imtihon formatiga tayyorlanishga, bemalol so’zlashishga, to’laqonli ravishda eshitib tushunish, o’qish, fikrlarni ifodalab berish mahoratlariga ega bo’lishingiz kafolatlanadi",
        },
    ]);
    return (
        <div className="py-[56px] mb-[180px] faqs-bg rounded-[40px]">
            <div className="site-container">
                <h1 className="hero-title font-semibold text-white text-[59px] text-center mb-8 leading-[1.2] max-[840px]:text-[48px] max-[840px]:mb-6 max-[700px]:text-[32px] max-[415px]:text-[28px] max-[340px]:text-[24px] max-[300px]:text-[20px]">Ko&apos;p {" "}
                    <span className="bg-white py-1 px-3.5 rounded-3xl"><span className="gradient-text">so&apos;raladigan</span></span> savollar</h1>

                <div className="w-full flex justify-center gap-x-12  max-[1200px]:gap-x-6 max-[890px]:flex-col">
                    <div className="w-full max-[890px]:w-full">
                        {list.slice(0, 3).map((item, idx) => (
                            <MyAccordion key={idx} datas={item} />
                        ))}
                    </div>

                    <div className="w-full max-[890px]:w-full">
                        {list.slice(3, 6).map((item, idx) => (
                            <MyAccordion key={idx} datas={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs