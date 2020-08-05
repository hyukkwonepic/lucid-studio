import { Styled } from './utility-bar.styles';
import { FC, useState, useRef, useEffect } from 'react';

const Title: FC<{
  title: string;
  onChange: (string) => void;
}> = ({ title, onChange }) => {
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
      onChange(e.target.value);
    }
    setMode('text');
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      const target = e.target as EventTarget & HTMLInputElement;
      if (target.value) {
        onChange(target.value);
      }
      setMode('text');
    }
  };

  return (
    <Styled.Title>
      {mode === 'text' ? (
        <span onClick={handleTitleClick}>{title}</span>
      ) : (
        <input
          ref={inputRef}
          autoCorrect="off"
          autoComplete="off"
          autoCapitalize="off"
          defaultValue={title}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
        />
      )}
    </Styled.Title>
  );
};

type UtilityBarProps = {
  title: string;
  onTitleChange: (string) => void;
};

const UtilityBar: FC<UtilityBarProps> = ({ title, onTitleChange }) => {
  return (
    <Styled.UtilityBar>
      <Title title={title} onChange={onTitleChange} />
    </Styled.UtilityBar>
  );
};

export default UtilityBar;
