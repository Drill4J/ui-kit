import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { NumberInput } from './number-input';

describe('NumberInput', () => {
  const mockFn = jest.fn();
  const props = {
    onChange: mockFn,
    disabled: false,
    checked: false,
    error: false,
    placeholder: 'placeholder initial state',
    value: 'input component',
    type: 'text',
  };

  it('Should render a NumberInput', () => {
    const tree = renderer
      .create(
        <>
          <NumberInput
            placeholder="enter text..."
          />
          <NumberInput
            placeholder="enter text..."
            disabled
          />
          <NumberInput
            placeholder="enter text..."
            error
          />
        </>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with initial state', () => {
    const wrapper = mount(
      <NumberInput {...props} />,
    );
    wrapper.find('input').simulate('change');
    expect(mockFn).toHaveBeenCalled();
    expect(wrapper.prop('value')).toContain('input component');
    expect(wrapper.prop('placeholder')).toContain('placeholder initial state');
  });
});
