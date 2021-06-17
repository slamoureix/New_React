import React from 'react'

export default function useMapContent(datas, classes) {
    return datas.map(v => <li key={v} classes={classes}>{v}</li>)
}
