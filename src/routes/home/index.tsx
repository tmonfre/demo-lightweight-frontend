import { useCallback, useState } from 'react';
import { FadeLoad } from '../../components';
import { query } from '../../utils';

import './styles.scss';

const Home = (): JSX.Element => {
  const [input, setInput] = useState<string>();
  const [response, setResponse] = useState<string>();

  const onSubmit = useCallback(async () => {
    if (!input) return;
    const localResponse = await query(input);
    setResponse(localResponse);
  }, [input]);

  return (
    <FadeLoad>
      <div id="home-container">
        <p>Hello World</p>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={onSubmit} type="button">Submit</button>
        <p>{response}</p>
      </div>
    </FadeLoad>
  );
};

export default Home;
