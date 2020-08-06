import { Styled } from './utility-bar.styles';
import { FC, useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fileNameState } from '../../recoil/atoms';

const Title: FC = () => {
  const [title, setTitle] = useRecoilState(fileNameState);

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
      setTitle(e.target.value);
    }
    setMode('text');
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      const target = e.target as EventTarget & HTMLInputElement;
      if (target.value) {
        setTitle(target.value);
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

const UtilityBar: FC = () => {
  return (
    <Styled.UtilityBar>
      <Title />
    </Styled.UtilityBar>
  );
};

export default UtilityBar;
