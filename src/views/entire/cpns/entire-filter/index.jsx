import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWarpper } from './style'
import filterdata from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo((props) => {
    const [items, setitems] = useState([])
    function itemClick(item) {
        const newitems = [...items];
        if (newitems.includes(item)) {
            console.log(newitems);
            let index = newitems.findIndex(key => key === item)
            console.log(index);
            newitems.splice(index, 1)
            setitems(newitems)
        } else {
            newitems.push(item);
            setitems(newitems)
        }
    }
    return (
        <FilterWarpper>
            <div className="filter">
                {
                    filterdata.map((item, index) => {
                        return <div className={classNames('item', { active:items.includes(item)  })} key={index} onClick={e => itemClick(item)}>{item}</div>
                    })
                }
            </div>
        </FilterWarpper>
    )
})

EntireFilter.propTypes = {}

export default EntireFilter