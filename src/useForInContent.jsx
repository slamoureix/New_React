import React from 'react'

export default function useForInContent(datas, classes) {
    const arr = [];
    for(const value in datas){arr.push(
        <li className={classes} key={value}><span>{value}</span>&#8239;: {datas[value]}</li>
        )}
    return arr
}
