import { CSSProperties, ReactNode, useCallback, useMemo, useState } from 'react';

export interface HideableProps {
  children: ReactNode;
  containerStyle?: CSSProperties;
}

export const Hideable: React.FC<HideableProps> = ({ children, containerStyle = {} }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisible((currVisibility) => !currVisibility);
  }, []);

  const _containerStyle = useMemo(
    () => ({ ...style.container, ...containerStyle }),
    [containerStyle],
  );

  return (
    <div style={_containerStyle}>
      {visible && children}
      <button onClick={toggleVisibility}>{visible ? 'Hide -' : 'Show +'}</button>
    </div>
  );
};

const style: Record<string, CSSProperties> = {
  container: {
    padding: '0.3em 0.5em',
  },
};
