import renderer from 'react-test-renderer';

import { Section } from './section';

it('should match snapshot', () => {
  const tree = renderer
    .create(
      <Section header={<h1>Main</h1>}>
        <div>Section</div>
        <Section header={<h2>Secondary</h2>}>
          <span>Section</span>
        </Section>
      </Section>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
