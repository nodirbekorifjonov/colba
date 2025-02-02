import { CardBox } from "../";

const HomeStatistics = () => {
    const statistics = [
        {
            type: "statistics",
            title: '10000',
            description: "Markazimizni bitirgan o’quvchilar soni",
            icon: '/assets/people.svg',
            background: 'bg-[rgba(132,212,255,0.5)]',
            color: 'rgb(0,140,218)',
            colSpan: "col-span-5 max-[975px]:col-span-4 max-[575px]:col-span-8"
        },
        {
            type: "statistics",
            title: '15',
            description: "Yildan beri faoliyat yuritamiz",
            icon: '/assets/e-learning.svg',
            background: 'bg-[rgba(13,227,206,0.5)]',
            color: '#007E72',
            colSpan: "col-span-3 max-[975px]:col-span-4 max-[575px]:col-span-8"
        },
        {
            type: "statistics",
            title: '1900+',
            description: "Hozirda tahsil olayotgan o’quvchilar soni",
            icon: '/assets/medal.svg',
            background: 'bg-[rgba(135,116,243,0.5)]',
            color: '#3A2E83',
            colSpan: "col-span-3 max-[975px]:col-span-4 max-[575px]:col-span-8"
        },
        {
            type: "statistics",
            title: '95%',
            description: "O’quvchilarning o’qishga kirish ko’rsatkichlari nisbati",
            icon: '/assets/people.svg',
            background: 'bg-[rgba(132,212,255,0.5)]',
            color: 'rgb(0,140,218)',
            colSpan: "col-span-5 max-[975px]:col-span-4 max-[575px]:col-span-8"
        },
    ];
    return (
        <div id="statistics" className="pt-[20px] pb-[170px] bg-[url(/public/assets/statistics-bg-twinkle.svg)] bg-no-repeat bg-[left_bottom_-70px]">
            <div className="site-container">
                <h2 className="about__title text-[64px] uppercase font-semibold mb-6 max-[840px]:text-[48px] max-[840px]:mb-4 max-[700px]:text-[32px] max-[700px]:mb-2">
                    COLBA <span className="gradient-text">RAQAMLARDA</span>
                </h2>
                <div className="grid grid-cols-8 gap-2">
                    {statistics.map((advantage, index) => (
                        <div key={index} className={advantage.colSpan}>
                            <CardBox {...advantage} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeStatistics