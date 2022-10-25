import React, {useState} from 'react';

interface InavIcon {
    key: string,
    src: string,
}

function LeftPannel() {
    const [active, setActive] = useState("home");

    function setNavicon (key: string, src:string): JSX.Element {
        if (key === active){
            return <li className='w-16 my-4 border-l-4 flex items-center justify-center box-border cursor-pointer' key={key} onClick={() => {setActive(key)}}><img src={src} alt={key} /></li>
        }else {
            return <li className='w-16 my-4 border-0 flex items-center justify-center cursor-pointer' key={key} onClick={() => {setActive(key)}}><img src={src} alt={key} /></li>
        }
    }

    const navIcons: InavIcon[] = [
        {
            key: "home",
            src: "/media/leftnav/home.png",
        },
        {
            key: "stats",
            src: "/media/leftnav/stats.png",
        },
        {
            key: "building",
            src: "/media/leftnav/building.png",
        },
        {
            key: "shop",
            src: "/media/leftnav/shop.png",
        },
        {
            key: "eye",
            src: "/media/leftnav/eye.png",
        },
        {
            key: "shape",
            src: "/media/leftnav/shape.png",
        },
        {
            key: "documents",
            src: "/media/leftnav/documents.png",
        },
        {
            key: "money",
            src: "/media/leftnav/money.png",
        },
    ]   

    return (
    <header className="bg-thpurp rounded-xl h-[90vh] w-16 absolute top-1/2 left-8 -translate-y-1/2 py-8 flex flex-col items-center justify-between">
        <img src="/media/leftnav/logo.png" alt="Logo" />
        <nav>
            <ul className='list-none pb-24'>
                {navIcons.map(navIcon => { return setNavicon(navIcon.key, navIcon.src)})}
            </ul>
        </nav>
        <img src="/media/leftnav/settings.png" alt="Settings" />
    </header>
  );
}

export default LeftPannel;
