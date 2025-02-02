const Atmosphere = () => {
    const atmosphere = [
        {
            img: '/public/assets/atmos-1.png',
            srcSet: "/public/assets/atmos-1@2x.png",
            grids: "col-span-4 row-span-3 max-[1075px]:col-span-6 max-[500px]:row-span-6 max-[500px]:col-span-12"
        },
        {
            img: '/public/assets/atmos-2.png',
            srcSet: "/public/assets/atmos-2@2x.png",
            grids: "col-span-4 row-span-4 max-[1075px]:col-span-6 max-[1075px]:row-span-4 max-[500px]:row-span-6 max-[500px]:col-span-12"
        },
        {
            img: '/public/assets/atmos-3.png',
            srcSet: "/public/assets/atmos-3@2x.png",
            grids: "col-span-4 row-span-5 max-[1075px]:col-span-6 max-[1075px]:row-span-5 max-[500px]:row-span-6 max-[500px]:col-span-12"
        },
        {
            img: '/public/assets/atmos-4.png',
            srcSet: "/public/assets/atmos-4@2x.png",
            grids: "col-span-4 row-span-5 max-[1075px]:col-span-6 max-[1075px]:row-span-5 max-[500px]:row-span-6 max-[500px]:col-span-12"
        },
        {
            img: '/public/assets/atmos-5.png',
            srcSet: "/public/assets/atmos-5@2x.png",
            grids: "col-span-4 row-span-4 max-[1075px]:col-span-6 max-[1075px]:row-span-4 max-[500px]:row-span-6 max-[500px]:col-span-12"
        },
        {
            img: '/public/assets/atmos-6.png',
            srcSet: "/public/assets/atmos-6@2x.png",
            grids: "col-span-4 row-span-3 max-[1075px]:col-span-6 max-[500px]:row-span-6 max-[500px]:col-span-12"
        },
    ]
    return (
        <div id="atmosphere" className="py-[60px]">
            <div className="site-container">
                <h2 className="text-[64px] uppercase font-semibold text-center mb-6 max-[840px]:text-[48px] max-[840px]:mb-4 max-[700px]:text-[32px] max-[700px]:mb-2">COLBA
                    <span className="gradient-text"> ATMOSFERA</span>
                </h2>
                <div className="grid grid-cols-12 grid-rows-8 gap-2 max-[1075px]:grid-rows-12">
                    {atmosphere.map((atmos, idx) => (
                        <div key={idx} className={atmos.grids}>
                            <img src={atmos.img} alt="" srcSet={`${atmos.img} 1x, ${atmos.srcSet} 2x`} className="rounded-3xl w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Atmosphere