import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import { Menu, MenuItem } from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <MenuItem>cool link 3</MenuItem>
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
