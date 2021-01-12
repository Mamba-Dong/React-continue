import React, { useMemo } from 'react';
import _ from 'lodash';

function Complex() {
    const newArr = useMemo(() => {
        const arr1 = [{ id: 1, name: 'name1' },{ id: 2, name: 'name2' },{ id: 3, name: 'name3' },{ id: 4, name: 'name4' },{ id: 5, name: 'name5' }]
        const arr2 = [{ id: 3, name: 'newName3'}]

        return _.forEach(arr1, value => {
            _.forEach(arr2, item => {
                if(value.id === item.id) {
                    value.name = item.name
                }
            })
        })
    },[])

    return (
        <div>
            {
                _.map(newArr, item => {
                    return <div key={item.id}>{item.name}</div>
                })
            }
        </div>
    )
}

export default Complex
