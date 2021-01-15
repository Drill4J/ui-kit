import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { TabsPanel, Tab } from './tabs';

storiesOf('Tabs', module).add('Tabs', () => {
  const [selectedTab, setSelectedTab] = useState('general');
  return (
    <TabsPanel activeTab={selectedTab} onSelect={setSelectedTab}>
      <Tab name="general">General</Tab>
      <Tab name="system">System</Tab>
      <Tab name="plugins">Plugins</Tab>
    </TabsPanel>
  );
});
