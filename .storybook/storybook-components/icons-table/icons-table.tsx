import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Icons } from '../../../src/components';

import styles from './icons-table.module.scss';

const iconsTable = BEM(styles);

interface Props extends IconProps {
  className?: string;
}

interface IconProps {
  width?: number;
  height?: number;
  onClick?: () => void;
  viewBox?: string;
  rotate?: number;
  'data-test'?: string;
}

export const IconsTable = iconsTable(({ className }: Props) => {
  const StorybookIcons = Object.keys(Icons);
  return (
    <div className={className}>
      <IconInfo>
        {`The following npm package, @drill4j/ui-kit, includes the ${StorybookIcons.length} icons converted to SvgIcon components.`}
      </IconInfo>
        <h3>Icon Props Types</h3>
      <IconProps>
        <div><strong>Property</strong></div>
        <div><strong>Type</strong></div>
        <div>width</div>
        <div>number</div>
        <div>height</div>
        <div>number</div>
        <div>onClick</div>
        <div>() => void</div>
        <div>viewBox</div>
        <div>string</div>
        <div>rotate</div>
        <div>number</div>
        <div>'data-test'</div>
        <div>string</div>
      </IconProps>
      <IconsTableContent>
        {StorybookIcons.map((key) => {
          const Icon = Icons[key as keyof typeof Icons];
          return (
            <IconWrapper>
              <div><Icon height={16} width={16} /></div>
              <IconLabel>{key}</IconLabel>
              <IconStorySource>{`code: <Icons.${key} />`}</IconStorySource>
            </IconWrapper>
          );
        })}
      </IconsTableContent>
    </div>
  );
});

const IconInfo = iconsTable.iconInfo('span');
const IconProps = iconsTable.iconProps('div');
const IconsTableContent = iconsTable.iconsTableContent('div');
const IconWrapper = iconsTable.iconWrapper('div');
const IconLabel = iconsTable.iconLabel('div');
const IconStorySource = iconsTable.iconStorySource('div');
