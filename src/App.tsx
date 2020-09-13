import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button';
import { Menu, MenuItem, SubMenu } from './components/Menu';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Icon from './components/Icon';

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon={'arrow-down'} size={'10x'} theme={'danger'} />
        <Menu
          defaultIndex={'0'}
          mode={'vertical'}
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
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Primary Large
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
          Primary Small
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
          Danger Large
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Danger Small
        </Button>
        <Button
          btnType={ButtonType.Link}
          href={'https://www.baidu.com'}
          target={'_blank'}
        >
          Baidu Link
        </Button>
        <Button
          disabled
          btnType={ButtonType.Link}
          href={'https://www.baidu.com'}
        >
          Baidu Link Disabled
        </Button>
      </header>
    </div>
  );
}

export default App;
