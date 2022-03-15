// import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

export default function Auth() {
    return (
        <Authenticator variation="modal" socialProviders={['amazon', 'apple', 'facebook', 'google']}>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.attributes.preferred_username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}