import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabWarpper } from './style'
import ScrollView from '@/base-ui/scroll-view/index'
const Tab = memo((props) => {
    const { Tabclick } = props
    const [currentindex, setindex] = useState(0)
    function btnchange(index, name) {
        setindex(index)
        Tabclick(index, name)
    }
    return (
        <TabWarpper>
            <ScrollView>
                {
                    props.TabNames.map((item, index) => {
                        return <div onClick={e => btnchange(index, item)} className={classNames('item', { active: index === currentindex })} key={index}>
                            {item}
                        </div>
                    })
                }
            </ScrollView>
        </TabWarpper>
    )
})

Tab.propTypes = {
    TabNames: PropTypes.array
}

export default Tab