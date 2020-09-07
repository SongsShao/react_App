import React, { useState, useEffect } from 'react'
import { Button, Input, List, Typography } from 'antd'

const { Search } = Input

function FriendListItem(props) {
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {

  })

  const onSearchList = v => {
    console.log('搜索词条', v)
    let lists = []
    lists.push(v)
    setList(list + lists)
  }
  return (
    <>
      <Search
        placeholder='请输入搜索词条'
        enterButton='搜索'
        size='large'
        onSearch={value => onSearchList(value)}
      />
      {list !== [] && (
        <List
          header={<div>搜索记录</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text>
              {' '}
              {item}
            </List.Item>
          )}
        />
      )}
    </>
  )
}

export default FriendListItem
