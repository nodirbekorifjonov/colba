import { CardBox } from "../"

const HomeAdvantages = () => {
    const advantages = [
        {
            type: "advantages",
            title: 'Laboratoriya',
            description: "O’quvchilar laboratoriyada kimyo fanidan nazariy o’rgangan bilimlarini amaliy mustahkamlashlari uchun barcha zaruriy sharoitlar yaratilgan. Laboratoriya mashg’ulotlari uchun esa alohida mutaxassis ustoz biriktirilgan.",
            icon: '/assets/people.svg',
            background: 'bg-[rgba(132,212,255,0.5)]',
            color: 'rgb(0,140,218)',
            colSpan: "col-span-8 max-[975px]:col-span-16"
        },
        {
            type: "advantages",
            title: '24/7 Support',
            description: "24/7 support orqali o'quvchilar istalgan paytlarida xoh markazda bo'lsin, xoh masofadan turib ustozlaridan yordam olishlari mumkin. Sababli ravishda qoldirilgan darslarni ham yordamchi ustozi bilan o’zlashtirib olishi mumkin.",
            icon: '/assets/medal.svg',
            background: 'bg-[rgba(135,116,243,0.5)]',
            color: '#3A2E83',
            colSpan: "col-span-8 max-[975px]:col-span-16"
        },
        {
            type: "advantages",
            title: 'Qulay jadval',
            description: "Darslarimiz o'quvchiga hech qanday noqulaylik tug'dirmasligi uchun ularga qulay bo'lgan vaqtlar inobatga olinib dars jadvali tuziladi.",
            icon: '/assets/e-learning.svg',
            background: 'bg-[rgba(13,227,206,0.5)]',
            color: '#007E72',
            colSpan: "col-span-6 max-[975px]:col-span-16"
        },
        {
            type: "advantages",
            title: 'Tadbirlar',
            description: "O'quvchilar darslardan tashqari vaqtlarini mazmunli tashkil etish maqsadida tadbirlar tashkil etiladi. Tadbirga har tomonlama o'quvchilarmizga o'rnak bola oluvchi, ularga to'gri va foydali maslahatlar bera oluvchi shaxslar chaqiriladi.",
            icon: '/assets/people.svg',
            background: 'bg-[rgba(132,212,255,0.5)]',
            color: 'rgb(0,140,218)',
            colSpan: "col-span-10 max-[975px]:col-span-16"
        },
        {
            type: "advantages",
            title: 'Sertifikat',
            description: "Darslarimizda doimiy faol bo'lib, vazifalarni o'z vaqtida bajarib, imtihonlardan o'tib, kurslarimizni muvaffaqiyatli tamomlagan o'quvchilarimiz uchun \"Colba\" da o'qiganligini tasdiqlovchi masxus sertifikatlar taqdim etiladi",
            icon: '/assets/medal.svg',
            background: 'bg-[rgba(135,116,243,0.5)]',
            color: '#3A2E83',
            colSpan: "col-span-10 max-[1262px]:col-span-9 max-[975px]:col-span-16"
        },
        {
            type: "advantages",
            title: 'Co-working',
            description: "Co-working hududimiz o'quvchilar darslardan keyin va darslari yo'q paytlarda kelib dars qilishlari uchun tashkil etilgan va barcha zaruriy sharoitlar yaratilgan.",
            icon: '/assets/e-learning.svg',
            background: 'bg-[rgba(13,227,206,0.5)]',
            color: '#007E72',
            colSpan: "col-span-6 max-[1262px]:col-span-7 max-[975px]:col-span-16"
        },
    ];

    return (
        <div id="advantages" className="pt-[52px] pb-[100px] bg-[url(/assets/advantages-bg-arrow.svg)] bg-no-repeat bg-[right_220px_bottom_-10px] max-[1450px]:bg-[right_180px_bottom_-20px] max-[1370px]:bg-[right_120px_bottom_-20px] max-[1200px]:bg-[right_70px_bottom_-20px] max-[1100px]:bg-[right_20px_bottom_-20px] max-[1000px]:bg-[right_bottom_-30px] max-[720px]:bg-none max-[720px]:pb-[50px]">
            <div className="site-container flex flex-col">
                <h2 className="about__title text-[64px] uppercase font-semibold mb-6 max-[840px]:text-[48px] max-[840px]:mb-4 max-[700px]:text-[32px] max-[700px]:mb-2">
                    NIma uchun <span className="gradient-text">bizning maktab</span>
                </h2>
                <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-2 mb-8">
                    {advantages.map((advantage, index) => (
                        <div key={index} className={advantage.colSpan}>
                            <CardBox {...advantage} />
                        </div>
                    ))}
                </div>
                <a href="#" className="gradient-btn self-center">Ariza qoldirish</a>
            </div>
        </div>
    );
};

export default HomeAdvantages;
