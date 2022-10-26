import React from 'react';


function RightPannelNav() {
  return (
    <nav>
      <ul className='list-none flex items-center justify-evenly pl-4'>
        <li className='mx-1'><a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/calendar.png" alt="Calendar"/></a></li>
        <li className='mx-1'><a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/notifications.png" alt="Notifications"/></a></li>
        <li className='mx-1'><a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/messages.png" alt="Messages"/></a></li>
        <li className='mx-1'><a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/useravatar.png" alt="User"/></a></li>
        <li className='mx-[1px]'><a href="/"><img src="https://akifsahinkorkmaz.github.io/managementconsole/media/rightnav/more.png" alt="More Options"/></a></li>
      </ul>
    </nav>
  );
}

export default RightPannelNav;
