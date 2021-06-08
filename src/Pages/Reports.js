import React from 'react'
import {useSelector} from 'react-redux'

const Reports = () => {
    const report = useSelector(state => state)
    console.log(report)
    return (
        <div>
            hi
        </div>
    )
}

export default Reports
