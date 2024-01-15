import { CSSProperties, ReactElement, ReactNode, useState } from 'react';

export interface TabProps {
  label: string;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = () => null;

export interface TabsProps {
  children: ReactElement<TabProps>[] | ReactElement<TabProps>;
}

export const Tabs: React.FC<TabsProps> = ({ children: tabs }) => {
  const [activeTabIndex, setActiveTabeIndex] = useState(0);

  const _tabs = Array.isArray(tabs) ? tabs : [tabs];

  return (
    <div style={styles.container}>
      <div className="tabBar" style={styles.tabBar}>
        {_tabs.map((currTab, i) => (
          <div key={i} onClick={() => setActiveTabeIndex(i)} style={styles.tab}>
            {currTab.props.label}
          </div>
        ))}
      </div>
      <div className="currTabContent">{_tabs[activeTabIndex].props.children}</div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    width: 400,
    minHeight: 400,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
  },
  tabBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
  tab: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
    padding: 5,
  },
};
