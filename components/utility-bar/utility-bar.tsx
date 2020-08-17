import { Styled } from './utility-bar.styles';
import { FC, useState, useRef, useEffect } from 'react';
import { useTitle } from '../../hooks/useTitle';

const Title: FC = () => {
  // const { title, setTitle } = useEditor();
  const title = useTitle();

  const inputRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<'text' | 'edit'>('text');

  useEffect(() => {
    if (mode === 'edit') {
      inputRef.current.select();
    }
  }, [mode, inputRef]);

  const handleTitleClick = () => {
    setMode('edit');
  };

  const handleInputBlur = (e) => {
    if (e.target.value) {
      title.setValue(e.target.value);
    }
    setMode('text');
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      const target = e.target as EventTarget & HTMLInputElement;
      if (target.value) {
        title.setValue(target.value);
      }
      setMode('text');
    }
  };

  return (
    <Styled.Title>
      {mode === 'text' ? (
        <span onClick={handleTitleClick}>{title.value}</span>
      ) : (
        <input
          ref={inputRef}
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          defaultValue={title.value}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
        />
      )}
    </Styled.Title>
  );
};

const UtilityBar: FC = () => {
  return (
    <Styled.UtilityBar>
      <Title />
    </Styled.UtilityBar>
  );
};

export default UtilityBar;
