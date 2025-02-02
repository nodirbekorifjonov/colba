const HomeTeam = () => {
    const team = [
        {
            name: "dONIYOR NASRIDDINOV",
            description: "Colba ta’lim markazi asoschisi",
            img: "/assets/doniyornasriddinov.png",
            srcSet: "/assets/doniyornasriddinov@2x.png",
            bgColor: "rgba(132,212,255,0.5)",
            color: "#008CDA",
        },
        {
            name: "Jahongir Nasriddinov",
            description: "Colba ta’lim markazi asoschisi",
            img: "/assets/jahongirnasriddinov.png",
            srcSet: "/assets/jahongirnasriddinov@2x.png",
            bgColor: "rgba(13,227,206,0.5)",
            color: "#007E72",
        },
        {
            name: "Sardorbek hayitboyev",
            description: "Colba ta’lim markazi direktori",
            img: "/assets/sardorbekhayitboyev.png",
            srcSet: "/assets/sardorbekhayitboyev@2x.png",
            bgColor: "rgba(135,116,243,0.5)",
            color: "#3A2E83",
        },
    ]
    return (
        <div className="pt-[130px] pb-[60px]">
            <div className="site-container">
                <h2 className="text-[64px] uppercase font-semibold text-center mb-6 max-[840px]:text-[48px] max-[840px]:mb-4 max-[700px]:text-[32px] max-[700px]:mb-2">BIZNING
                    <span className="gradient-text"> JAMOA</span>
                </h2>
                <div className="team-description flex gap-10 p-6 primary-gradient rounded-3xl text-white text-[24px] mb-2 max-[1300px]:flex-wrap max-[1300px]:gap-6 max-[840px]:text-[20px]">
                    <span className="block w-[615px] min-[1300px]:shrink-0 ">Colba ta&apos;lim markazi jamoasi keng ko&apos;lamli mutaxassislik va zamonaviy ko&apos;nikmalarga ega, bir oliy maqsad yo&apos;lida birlashgan fidoyilardan tashkil topgan.</span>
                    <p>Jamoamizda yillar davomida past-balandni ko&apos;rgan, boy tajribaga ega yoshi katta mutaxassislardan tortib zamon bilan hamnafas va eng yangi texnologiyalardan xabardor yoshlargacha mavjud va bu Colbani o&apos;z sohasida yetakchi bo&apos;lishiga yordam beradi.</p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                    {
                        team.map((member, idx) => (
                            <div key={idx} className="p-6 flex flex-col gap-6 rounded-3xl col-span-2 max-[1340px]:col-span-3 max-[860px]:col-span-4 max-[860px]:col-start-2 max-[655px]:col-span-6" style={{ backgroundColor: member.bgColor }}>
                                <div className="">
                                    <h5 className="uppercase text-[28px] leading-[1.28] font-semibold mb-1 max-[700px]:text-[24px]" style={{ color: member.color }}>{member.name}</h5>
                                    <p className="text-[20px] leading-[1.4] max-[700px]:text-[18px]">{member.description}</p>
                                </div>
                                <div className="w-[380px] h-[380px]  max-[1340px]:w-full max-[480px]:h-[350px]">
                                    <img src={member.img} alt="" srcSet={`${member.img} 1x, ${member.srcSet} 2x`} className="w-full h-full object-cover rounded-2xl object-top" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeTeam