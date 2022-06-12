import React, { useState } from 'react';

import LeftMenu from './LeftMenu';
import Preview from './Preview';

export default function Content() {
  const [contacts, setState] = useState([]);

  return (
    <div className="flex flex-row w-full h-full">
      <LeftMenu left-menu="contacts" />
      <Preview/>
    </div>
  );
}