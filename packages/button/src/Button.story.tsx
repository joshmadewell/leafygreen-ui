import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { css } from '@leafygreen-ui/emotion';
import Icon, { glyphs } from '@leafygreen-ui/icon';
import Button, { Size, Variant } from '.';

const buttonClass = css`
  & + & {
    margin-left: 0.5rem;
  }
`;

storiesOf('Buttons', module)
  .add('Default', () => (
    <Button
      size={select('Size', Object.values(Size) as Array<Size>, Size.Normal)}
      variant={select(
        'Variant',
        Object.values(Variant) as Array<Variant>,
        Variant.Default,
      )}
      title={text('Title', 'The button title')}
      disabled={boolean('Disabled', false)}
      href={select(
        'Href',
        { 'mongodb.design': 'http://mongodb.design', none: undefined },
        undefined,
      )}
      glyph={<Icon glyph={select('Glyph', Object.keys(glyphs), 'Edit')} />}
      className={buttonClass}
    >
      {text('Children', 'Button')}
    </Button>
  ))
  .add('as custom component', () => {
    const CustomRoot = select(
      'div',
      { div: 'div', span: 'span', button: 'button' },
      'div',
    );
    const selectedGlyph = select(
      'Glyph',
      Object.keys(glyphs) as Array<any>,
      'Edit',
    );

    function CustomElement(props: object): React.ReactElement {
      return <CustomRoot {...props} />;
    }

    return (
      <Button
        as={CustomElement}
        size={select('Size', Object.values(Size) as Array<Size>, Size.Normal)}
        variant={select(
          'Variant',
          Object.values(Variant) as Array<Variant>,
          Variant.Default,
        )}
        disabled={boolean('Disabled', false)}
        className={buttonClass}
        glyph={<Icon glyph={selectedGlyph} />}
      >
        {text('Children', 'Button')}
      </Button>
    );
  });
