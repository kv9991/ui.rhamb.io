import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from '../src/components/button';
import { List } from '../src/components/list';
import { Icon } from '../src/components/icon';
import { withDefaultDecorator } from '../utils/with-default-decorator';

withDefaultDecorator(() => {
  const buttonStories = storiesOf('Button', module);

  buttonStories.add('Basic buttons', () => (
    <List
      style={{
        padding: 0,
        listStyleType: 'none',
      }}
    >
      <List.Item>
        <Button>Click me</Button>
      </List.Item>
      <List.Item>
        <Button arrowed>Click me</Button>
      </List.Item>
      <List.Item>
        <Button arrowed icon={<Icon size={15} icon="Watch" />}>
          Click me
        </Button>
      </List.Item>
    </List>
  ));

  buttonStories.add('Accent buttons', () => (
    <List
      style={{
        padding: 0,
        listStyleType: 'none',
      }}
    >
      <List.Item>
        <Button accent>Click me</Button>
      </List.Item>
      <List.Item>
        <Button accent arrowed>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button accent arrowed icon={<Icon size={15} icon="Watch" />}>
          Click me
        </Button>
      </List.Item>
    </List>
  ));

  buttonStories.add('Ghost buttons', () => (
    <List
      style={{
        padding: 0,
        listStyleType: 'none',
      }}
    >
      <List.Item>
        <Button ghost>Click me</Button>
      </List.Item>
      <List.Item>
        <Button ghost arrowed>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button arrowed ghost icon={<Icon size={15} icon="Watch" />}>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button accent ghost>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button accent ghost arrowed>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button accent ghost arrowed icon={<Icon size={15} icon="Watch" />}>
          Click me
        </Button>
      </List.Item>
    </List>
  ));

  buttonStories.add('Transparent buttons', () => (
    <List
      style={{
        padding: 0,
        listStyleType: 'none',
      }}
    >
      <List.Item>
        <Button transparent>Click me</Button>
      </List.Item>
      <List.Item>
        <Button transparent arrowed>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button arrowed transparent icon={<Icon size={15} icon="Watch" />}>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button accent transparent>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button accent transparent arrowed>
          Click me
        </Button>
      </List.Item>
      <List.Item>
        <Button
          accent
          transparent
          arrowed
          icon={<Icon size={15} icon="Watch" />}
        >
          Click me
        </Button>
      </List.Item>
    </List>
  ));
});
