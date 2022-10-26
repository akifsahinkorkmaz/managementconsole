import React, {useState} from 'react';

interface InavIcon {
    key: string,
    src: string,
}

function LeftPannel() {
    const [active, setActive] = useState("home");

    const navIcons: InavIcon[] = [
        {
            key: "home",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/home.png",
        },
        {
            key: "stats",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/stats.png",
        },
        {
            key: "building",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/building.png",
        },
        {
            key: "shop",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/shop.png",
        },
        {
            key: "eye",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/eye.png",
        },
        {
            key: "shape",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/shape.png",
        },
        {
            key: "documents",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/documents.png",
        },
        {
            key: "money",
            src: "https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/money.png",
        },
    ]; 

    function setNavicon (key: string, src:string): JSX.Element {
        if (key === active){
            return <li className='w-16 my-4 border-l-4 flex items-center justify-center box-border cursor-pointer pl-1' key={key} onClick={() => {setActive(key)}}><img src={src} alt={key} /></li>
        }else {
            return <li className='w-16 my-4 border-0 flex items-center justify-center cursor-pointer transition-all hover:pl-2' key={key} onClick={() => {setActive(key)}}><img src={src} alt={key} /></li>
        }
    }

    return (
    <header className="bg-thpurp rounded-xl h-[90vh] w-16 fixed top-1/2 left-8 -translate-y-1/2 py-8 flex flex-col items-center justify-between">
        <a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/logo.png" alt="Logo" /></a>
        <nav>
            <ul className='list-none pb-16'>
                {navIcons.map(navIcon => { return setNavicon(navIcon.key, navIcon.src)})}
            </ul>
        </nav>
        <a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/leftnav/settings.png" alt="Settings" /></a>
    </header>
  );
}

export default LeftPannel;
