import React, { useState } from 'react';
import Button from './components/Button';
import Transition from './components/Transition';
import { Menu, MenuItem, SubMenu } from './components/Menu';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Icon from './components/Icon';

library.add(fas);

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon={'arrow-down'} size={'10x'} theme={'danger'} />
        <Menu
          defaultIndex={'0'}
          mode={'horizontal'}
          onSelect={(selectedIndex) => alert(selectedIndex)}
          defaultOpenSubMenus={['3']}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <MenuItem>cool link 3</MenuItem>
          <SubMenu title={'sdsd'}>
            <MenuItem>111</MenuItem>
            <MenuItem>222</MenuItem>
            <MenuItem>333</MenuItem>
          </SubMenu>
        </Menu>
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
        >
          Hello
        </Button>
        <Button autoFocus>Hello</Button>
        <Button disabled>Hello Disabled</Button>
        <Button btnType={'primary'} size={'lg'} onClick={() => setShow(!show)}>
          Toggle
        </Button>
        <Button btnType={'primary'} size={'sm'}>
          Primary Small
        </Button>
        <Button btnType={'danger'} size={'lg'}>
          Danger Large
        </Button>
        <Button btnType={'danger'} size={'sm'}>
          Danger Small
        </Button>
        <Button
          btnType={'link'}
          href={'https://www.baidu.com'}
          target={'_blank'}
        >
          Baidu Link
        </Button>
        <Button disabled btnType={'link'} href={'https://www.baidu.com'}>
          Baidu Link Disabled
        </Button>

        <Transition in={show} timeout={300} animation={'zoom-in-left'}>
          <div>
            <p>sdfsdfdsdf</p>
            <p>sdfsdfdsdf</p>
            <p>sdfsdfdsdf</p>
            <p>sdfsdfdsdf</p>
            <p>sdfsdfdsdf</p>
            <p>sdfsdfdsdf</p>
          </div>
        </Transition>
        <Transition in={show} timeout={300} animation={'zoom-in-left'} wrapper>
          <Button btnType={'primary'} size={'lg'}>
            A Large Button
          </Button>
        </Transition>
      </header>
    </div>
  );
};

export default App;
