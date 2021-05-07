import * as React from 'react';
import styled from 'styled-components';

import { Icons } from '../../../src';

import { COLORS, FONTS } from '../../../src/theme';


interface IconProps {
  width?: number;
  height?: number;
  onClick?: () => void;
  viewBox?: string;
  rotate?: number;
  'data-test'?: string;
}

export const IconsTable = () => {
  const StorybookIcons = Object.keys(Icons);
  return (
    <div >
      <IconInfo>
        {`The following npm package, @drill4j/ui-kit, includes the ${StorybookIcons.length} icons converted to SvgIcon components.`}
      </IconInfo>
        <h3>Icon Props Types</h3>
      <IconPropsWrapper>
        <div><strong>Property</strong></div>
        <div><strong>Type</strong></div>
        <div>width</div>
        <div>number</div>
        <div>height</div>
        <div>number</div>
        <div>onClick</div>
        <div>() =&gt; void</div>
        <div>viewBox</div>
        <div>string</div>
        <div>rotate</div>
        <div>number</div>
        <div>'data-test'</div>
        <div>string</div>
      </IconPropsWrapper>
      <IconsTableContent>
        {StorybookIcons.map((key) => {
          const Icon = Icons[key as keyof typeof Icons];
          return (
            <IconWrapper>
              <div><Icon height={18} width={18} /></div>
              <IconLabel>{key}</IconLabel>
              <IconStorySource>{`code: <Icons.${key} />`}</IconStorySource>
            </IconWrapper>
          );
        })}
      </IconsTableContent>
    </div>
  );
};

const IconPropsWrapper = styled.div`
  display: grid;
  grid-template-columns: 115px 115px;
  width: 230px;
  font-family: ${FONTS.COND_BOLD};
  font-size: 0.9em;
  border: 1px solid ${COLORS.MONOCHROME.SHADE};
  & > * {
    padding: 5px 5px;
    border-bottom: 1px solid ${COLORS.MONOCHROME.SHADE};
    border-left: 1px solid ${COLORS.MONOCHROME.SHADE};
  }
`;

const IconInfo = styled.span`
  margin-top: 8px;
  font-size: 18px;
  font-family: ${FONTS.LIGHT};
  color: ${COLORS.MONOCHROME.SHADE};
`;

const IconsTableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1em;
  margin-top: 40px;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px;
  border: 1px solid ${COLORS.MONOCHROME.DARK_TINT};
  align-items: center;
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`;
const IconLabel = styled.div`
  font-size: 14px;
  font-family: ${FONTS.LIGHT};
  color: ${COLORS.MONOCHROME.DEFAULT};
`;
const IconStorySource = styled.div`
  max-width: 220px;
  font-family: ${FONTS.LIGHT};
  font-size: 0.7em;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  cursor: pointer;
`;
