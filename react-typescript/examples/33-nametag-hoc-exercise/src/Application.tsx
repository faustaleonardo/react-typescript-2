import React from 'react';

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

type WithUserProps = {
  user: UserModel;
};

const currentUser = {
  displayName: 'J Mascis',
  accountId: '123',
  isVerified: true
};

function withCurrentUser<T extends WithUserProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithUserProps>) => {
    return <WrappedComponent {...(props as T)} user={currentUser} />;
  };
}

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => {
  const NameTagWithCurrentUser = withCurrentUser(NameTag);

  return (
    <section>
      <NameTagWithCurrentUser salutation="Howdy" />
    </section>
  );
};
export default Application;
