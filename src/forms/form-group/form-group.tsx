import styled from 'styled-components';

import { COLORS, FONTS } from '../../theme';

interface Props {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  optional?: boolean;
  actions?: React.ReactNode;
}

export const FormGroup = ({
  className, children, label, optional, actions,
}: Props) => (
  <div className={className}>
    <Panel>
      <Label>{label}</Label>
      <div>
        <Panel>
          {optional && <OptionalLabel>Optional</OptionalLabel>}
          {actions && <Actions>{actions}</Actions>}
        </Panel>
      </div>
    </Panel>
    <Input>{children}</Input>
  </div>
);

const Panel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-family: ${FONTS.SEMI_BOLD};
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.MONOCHROME.BLACK};
`;

const OptionalLabel = styled.span`
  line-height: 16px;
  font-size: 12px;
  color: ${COLORS.MONOCHROME.DEFAULT};
`;

const Actions = styled.div`
  display: flex;
  margin-left: 8px;
`;
const Input = styled.div`
  width: 100%;
  margin-top: 8px;
`;
