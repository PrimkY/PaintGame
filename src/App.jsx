import React from 'react';

const App = () => {
    console.log('hello');
    const arrayOfSmth = [{name:'Ivanko', surname: '', id:1}];
    arrayOfSmth.push({name:'Karinko', surname: '', id:2});
    return arrayOfSmth.map((item) => {
        return (
            <div key={arrayOfSmth.id}>
                {item.name}
            </div>
        );
    })
}

export default App;