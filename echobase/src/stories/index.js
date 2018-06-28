import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import DragonDropship from '../components/vehicles/ships/DragonDropship';
import Pilot from '../components/people/pilot/Pilot';
import Person from '../components/people/person/Person';
import ActorEditor from '../components/actors/editor/ActorEditor';
//import HomeGraph from '../components/home/HomeGraph';
//import Main from '../components/main/Main';

//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// Echobase
/*
You may need an appropriate loader to handle this file type.
storiesOf('Echobase', module).add('main', () => <Main />);
*/
// People

// who transforms over time - city slicker to backwoodsman - broke to rich
// what is reverse wealth?! city broke / country rich
storiesOf('Person', module)
  .add('male person who is young', () => (
    <div>
      <svg id="viewport" />
      <Person
        name="person"
        age="32"
        sex="male"
        status={{ label: 'city slicker', financial: 'broke', health: 125 }}
        location="city"
        shelter="basement apartment"
        handleClick={action('clicked person')}
      />
    </div>
  ))
  .add('male person who is old', () => (
    <div>
      <svg id="viewport" />
      <Person
        name="person"
        age="43"
        sex="male"
        status={{ label: 'city slicker', financial: 'broke', health: 65 }}
        location="city"
        shelter="house"
        handleClick={action('clicked person')}
      />
      <ActorEditor />
    </div>
  ))
  .add('male person who is old with beard', () => (
    <div>
      <svg id="viewport" />
      <Person
        name="person"
        age="62"
        sex="male"
        status={{ label: 'backwoodsman', financial: 'rich', health: 65 }}
        location="country"
        shelter="cabin"
        handleClick={action('clicked person')}
      />
      <ActorEditor />
    </div>
  ))
  .add('male person who is old with beard and is media', () => (
    <div>
      <svg id="viewport" />
      <Person
        name="person"
        age="62"
        sex="male"
        status={{ label: 'backwoodsman', financial: 'rich', health: 65 }}
        profession={{ label: 'medic' }}
        location="country"
        shelter="cabin"
        handleClick={action('clicked person')}
      />
      <ActorEditor />
    </div>
  ));

storiesOf('Pilot', module)
  .add('pilot with a name and click', () => (
    <div>
      <svg id="viewport" />
      <Pilot name="pilot" handleClick={action('clicked pilot')} />
    </div>
  ))
  .add('pilot with editor', () => (
    <div>
      <svg id="viewport" />
      <Pilot name="pilot" handleClick={action('clicked pilot')} />
      <ActorEditor />
    </div>
  ));

// Vehicles

storiesOf('DragonDropShip', module).add('ship with name and click', () => (
  <div>
    <svg id="viewport" />
    <DragonDropship name="dragon" handleClick={action('clicked dragon')} />
  </div>
));

/*
storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
  */
