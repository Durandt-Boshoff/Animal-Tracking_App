import { useSelector } from 'react-redux';

function TestRedux() {
    const groups = useSelector((state) => state.groups.groups);
    const animals = useSelector((state) => state.animals.animals);

    return (
        <div>
            <h1>Test Redux</h1>

            <h2>Groups</h2>

            {groups.map((group) => (
                <p key={group.id}>
                    {group.name}
                </p>
            ))}

            <h2>Animals</h2>

            {animals.map((animal) => (
                <p key={animal.id}>
                    {animal.breed} #{animal.number}
                </p>
            ))}
        </div>
    );
}

export default TestRedux;