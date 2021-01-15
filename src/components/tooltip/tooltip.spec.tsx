import { shallow, ShallowWrapper } from 'enzyme';

import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  let wrapper: ShallowWrapper;
  beforeAll(() => {
    wrapper = shallow(
      <Tooltip message={<span>Tooltip</span>}>
        <div>Tooltip</div>
      </Tooltip>,
      {
        disableLifecycleMethods: true,
      },
    );
  });

  it('should match snapshot', () => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
