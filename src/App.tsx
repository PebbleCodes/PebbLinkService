import { Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
    const [links, setTodos] = useState<Array<Schema["ShortLinkDataStore"]["type"]>>([]);

    useEffect(() => {
        client.models.ShortLinkDataStore.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
    }, []);

    function createLink() {
        let input = window.prompt("URL: ");
        let link = input ? input : '';
        client.models.ShortLinkDataStore.create({
            id: "test",
            user: "username",
            short_link: link,
            short_description: "Short description",
            long_description: "Long description",
        });
    }

    /*
    function deleteTodo(id: string) {
        client.models.Todo.delete({id});
    }
    */

    // TODO: add implementation for social providers
    return (
        <Authenticator
            signUpAttributes={['preferred_username', 'given_name', 'family_name']}
            // socialProviders={['amazon', 'apple', 'facebook', 'google']}>
        >
            {({ signOut, user }) => (
                <main>
                    <h1>{user?.username}'s todos</h1>
                    <button onClick={createLink}>+ new</button>
                    <ul>
                        {links.map((link) => (
                            <li>
                                {link.short_link}
                            </li>
                        ))}
                    </ul>
                    <div>
                        🥳 App successfully hosted. Try creating a new todo.
                        <br/>
                        <button onClick={signOut}>Sign out</button>
                    </div>
                </main>
            )}
        </Authenticator>
    );
}

export default App;

/*
onClick={() => deleteTodo(todo.id)}
                                key={todo.id}
 */