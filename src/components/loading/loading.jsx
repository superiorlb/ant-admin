import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
const icon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
  />
)
export default function Loading({ children, loading, tip = '加载中', size = 'default' }) {
  return (
    <Spin spinning={loading} tip={tip} size={size} indicator={icon}>
      {
        children
      }
    </Spin>
  )
}

