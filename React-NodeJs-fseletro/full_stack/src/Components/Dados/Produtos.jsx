import React from 'react';

function Produtos(){
    const [ users, setUsers ] = React.useState([]);
    React.useEffect(async() => {
        const url = "https://api.github.com/users";    
        const response = await fetch(url);
        setUsers(await response.json());    
    }, [])

    return(
        <section className="main container py-4">
            { users.map((element) => {
                return(
                    <p key={element.id}>
                        {element.login}
                    </p>
                )
            })}
        </section>
    );
}

export default Produtos