import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
const Icon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
)
export default function Loading({ children }) {
  return (
    <Spin indicator={<Icon />}>
      {
        children
      }
    </Spin>
  )
}

