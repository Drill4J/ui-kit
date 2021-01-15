import { BEM } from '@redneckz/react-bem-helper';

import { Icons } from '../icon';
import { Panel } from '../../layouts';

import styles from './general-alerts.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
}

const generalAlerts = BEM(styles);

export const GeneralAlerts = generalAlerts(({
  className, children = 'Internal service error', type,
}: Props) => (
  <div className={className}>
    <Content type={type}>
      {getMessageIcon(type)}
      {children}
    </Content>
  </div>
));

const Content = generalAlerts.content(Panel);
const MessageIcon = generalAlerts.messageIcon('div');

function getMessageIcon(type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO') {
  switch (type) {
    case 'ERROR': {
      return (
        <MessageIcon type={type}>
          <Icons.Cancel height={16} width={16} />
        </MessageIcon>
      );
    }
    case 'SUCCESS': {
      return (
        <MessageIcon type={type}>
          <Icons.Checkbox height={16} width={16} />
        </MessageIcon>
      );
    }
    case 'WARNING': {
      return (
        <MessageIcon type={type}>
          <Icons.Warning height={16} width={16} />
        </MessageIcon>
      );
    }
    default: {
      return (
        <MessageIcon type={type}>
          <Icons.Info height={16} width={16} />
        </MessageIcon>
      );
    }
  }
}
