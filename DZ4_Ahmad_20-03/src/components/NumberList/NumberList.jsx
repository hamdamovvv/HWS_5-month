import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addNumber, clearList} from '/src/actions/actions';

const NumberList = ({numbers, addNumber, clearList}) => {
    const [value, setValue] = useState('');
    const [previousValue, setPreviousValue] = useState(0)


    const handleAdd = () => {
        if (!value) return;
        const number = parseInt(value);
        if (isNaN(number)) return;
        addNumber(number + previousValue);
        setValue('');
        setPreviousValue(number + previousValue);
    };

    return (
        <div>
            <h2>Number List</h2>
            <input type="number" value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={clearList}>Clear</button>
            <ul>
                {numbers.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    numbers: state.numbers,
});

const mapDispatchToProps = {
    addNumber,
    clearList,
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberList);
