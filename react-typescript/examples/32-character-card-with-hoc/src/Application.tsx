import * as React from 'react';
import { CharacterInformation } from './CharacterInformation';
import { CharacterType, fetchCharacter } from './characters';
import { Loading } from './Loading';

/**
 * What we want to achieve is we want the HOC to accept component that its props are the ones we expect them to be. In this case is the WithCharacterProps.
 * Because we extends it, we need to omit it to ensure the original of the props by removing the WithCharacterProps.
 */

type WithCharacterProps = {
  character: CharacterType;
};

function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithCharacterProps>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    if (loading) return <Loading />;

    return character && <Component {...(props as T)} character={character} />;
  };
}

const Application = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);
  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};

export default Application;
