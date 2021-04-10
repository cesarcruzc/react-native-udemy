
interface Person {
    name: string,
    age: number,
    address: Address
}

interface Address {
    country: string,
    apartment: number
}

export const LiteralObjects = () => {

    const person: Person = {
        name: "Cesar",
        age: 30,
        address: {
            country: "Colombia",
            apartment: 506
        }
    }

    return (
        <>
            <h3>Literal objects</h3>
            <code>
                <pre>
                    {JSON.stringify(person, null, 2)}
                </pre>
            </code>
        </>
    )
}
