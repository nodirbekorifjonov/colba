// REACT ICONS
import { Fragment, useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLang, setShowLang] = useState(false)
  const [lang, setLang] = useState('uz')

  const languages = [
    {
      name: "O'zbekcha",
      id: 'uz',
      icon: '/assets/uzb-flag.png',
      srcSet: '/assets/uzb-flag.png 1x, /assets/uzb-flag@2x.png 2x'
    },
    {
      name: "Русский",
      id: 'ru',
      icon: '/assets/russian-flag.png',
      srcSet: '/assets/russian-flag.png 1x, /assets/russian-flag@2x.png 2x'
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 885) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const showLangHandler = () => {
    setShowLang((prev) => !prev)
  }

  const setLangHandler = (item) => {
    setLang(item.id)
    setShowLang(false)
  }

  return (
    <nav className="w-full py-[24px] max-[885px]:py-[16px] bg-white font-clashdisplay font-semibold text-[16px] max-[885px]:text-[14px] text-[#475467]">
      <div className="site-container flex justify-between items-center">
        {/* LOGO */}
        <a href="#" className="mr-[48px] shrink-0 max-[1154px]:mr-0 max-[575px]:w-[120px]">
          <img src="/assets/logo-text.svg" alt="" />
        </a>
        {/* NAV LIST */}
        <ul className="nav-list flex items-center gap-[32px] mr-auto max-[1154px]:mx-auto max-[885px]:hidden">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Colba haqida
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              O’quv tizim
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Afzalliklar
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Natijalar
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQ
            </a>
          </li>
        </ul>
        <div className="nav-btns flex items-center gap-[12px] max-[885px]:hidden">
          <div className="relative">
            <button
              onClick={showLangHandler}
              className="cursor-pointer flex  items-center gap-[10px] bg-[#EFF2FF] p-[12px] rounded-[16px] relative min-[1154px]:w-[167px]"
              aria-label="Select Language"
            >
              {languages.map((item) =>
                item.id === lang ? (
                  <Fragment key={item.id}>
                    <img src={item.icon} srcSet={item.srcSet} alt={`${item.name} Flag`} />
                    <span className={`max-[1154px]:hidden ${item.id === 'ru' && "font-sans font-bold"}`}>{item.name}</span>
                    <img
                      src="/assets/dropdown-ico.svg"
                      alt="Dropdown Icon"
                      className={`${showLang ? "rotate-180" : ""} transition ml-auto`}
                    />
                  </Fragment>
                ) : null
              )}
            </button>


            <div className={`dropdown absolute w-[181px] top-12 right-[-10px] transition-opacity max-[1154px]:right-0 py-[6px] ${!showLang ? "-translate-y-[180px] invisible opacity-0" : "visible opacity-100"} `}>
              {languages.map((item) => (
                <button key={item.id} onClick={() => setLangHandler(item)} className={`cursor-pointer w-full flex items-center gap-[10px]  p-[12px] px-[20px] bg-[#EFF2FF] hover:bg-[#dae0ff] ${item.id === 'uz' ? 'rounded-t-[16px] border-b-[1px] border-[#0000000b]' : "rounded-b-[16px] font-sans font-bold"}`}>
                  <img
                    src={item.icon}
                    srcSet={item.srcSet}
                    alt=""

                  />
                  <span>{item.name}</span>
                  {item.id === lang && <img src="/assets/check-ico.svg" alt="" />}

                </button>
              ))}
            </div>
          </div>
          <a href="tel:+998935842939" className="cursor-pointer flex items-center justify-between gap-[16px] px-[16px] py-[14px] rounded-[16px] primary-gradient text-white text-[14px]">
            <img src="/assets/header-calling.svg" alt="" />
            <span className="max-[1154px]:hidden">+998 93 584 29 39</span>
          </a>
        </div>

        <button className="hidden px-[16px] py-[14px] primary-gradient rounded-[16px] text-white cursor-pointer max-[885px]:flex transition ease-in hover:-translate-y-1 max-[575px]:px-[14px] max-[575px]:py-[12px]" onClick={() => { setShowNav(true) }}>
          <IoMenu />
        </button>

        {/* Mobile nav */}
        <div
          className={`
        mobile-nav fixed flex flex-col right-0 top-0 py-[20px] px-[16px] bg-white w-[50%] max-[575px]:w-[70%] max-[375px]:w-full h-screen shadow transition duration-200 ${!showNav ? "translate-x-full" : ""
            }
        `}
        >
          <button className="px-[16px] py-[14px] cursor-pointer hover:bg-gray-100 mb-[20px] self-end text-[20px]" onClick={() => setShowNav(false)}>
            <IoClose />
          </button>
          {/* NAV LIST */}
          <ul className="nav-list flex flex-col text-end mr-auto w-full max-[1154px]:mx-auto mb-[10px]">
            <li className="nav-item border-b-1 border-gray-200">
              <a
                href="#"
                className="nav-link py-[8px] px-[16px] transition ease-linear duration-150 hover:-translate-x-3 block"
              >
                Colba haqida
              </a>
            </li>
            <li className="nav-item border-b-1 border-gray-200">
              <a
                href="#"
                className="nav-link py-[8px] px-[16px] transition ease-linear duration-150 hover:-translate-x-3 block"
              >
                O’quv tizim
              </a>
            </li>
            <li className="nav-item border-b-1 border-gray-200">
              <a
                href="#"
                className="nav-link py-[8px] px-[16px] transition ease-linear duration-150 hover:-translate-x-3 block"
              >
                Afzalliklar
              </a>
            </li>
            <li className="nav-item border-b-1 border-gray-200">
              <a
                href="#"
                className="nav-link py-[8px] px-[16px] transition ease-linear duration-150 hover:-translate-x-3 block"
              >
                Natijalar
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link py-[8px] px-[16px] transition ease-linear duration-150 hover:-translate-x-3 block"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="nav-btns absolute bottom-[50px] left-0 w-full flex items-center flex-col gap-[18px]">
            <div className="relative">
              <button
                onClick={showLangHandler}
                className="cursor-pointer flex items-center gap-[10px] bg-[#EFF2FF] p-[12px] rounded-[16px] w-[167px]"
                aria-label="Select Language"
              >
                {languages.map((item) =>
                  item.id === lang ? (
                    <Fragment key={item.id}>
                      <img src={item.icon} srcSet={item.srcSet} alt={`${item.name} Flag`} />
                      <span className={`${item.id === 'ru' && "font-sans font-bold"} `}>{item.name}</span>
                      <img
                        src="/assets/dropdown-ico.svg"
                        alt="Dropdown Icon"
                        className={`${showLang ? "" : "rotate-180"} transition ml-auto`}
                      />
                    </Fragment>
                  ) : null
                )}
              </button>


              <div className={`dropdown absolute w-[181px] bottom-12 left-[-7px] transition-opacity max-[1154px]:right-0 py-[6px] ${!showLang ? "-translate-y-[180px] invisible opacity-0" : "visible opacity-100"} `}>
                {languages.map((item) => (
                  <button key={item.id} onClick={() => setLangHandler(item)} className={`cursor-pointer w-full flex items-center gap-[10px]  p-[12px] px-[20px] bg-[#EFF2FF] hover:bg-[#dae0ff] ${item.id === 'uz' ? 'rounded-t-[16px] border-b-[1px] border-[#0000000b]' : "rounded-b-[16px] font-sans font-bold"}`}>
                    <img
                      src={item.icon}
                      srcSet={item.srcSet}
                      alt=""

                    />
                    <span>{item.name}</span>
                    {item.id === lang && <img src="/assets/check-ico.svg" alt="" />}

                  </button>
                ))}
              </div>
            </div>
            <a href="tel:+998935842939" className="cursor-pointer flex items-center justify-between gap-[16px] px-[16px] py-[14px] rounded-[16px] primary-gradient text-white text-[14px]">
              <img src="/assets/header-calling.svg" alt="" />
              <span>+998 93 584 29 39</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
