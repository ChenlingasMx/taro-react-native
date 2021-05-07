import React, { useState } from 'react'
import { View, Form, Input, Button } from '@tarojs/components-rn'

const Detail = React.forwardRef(() => {
  const [password, setPassword] = useState('')
  return (
    <View>
      <Form onSubmit={e => window.console.log('e', e.detail.value)} >
        <View>
          <Input
            type='text'
            placeholder='请填写密码'
            name="password"
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
        </View>
        <View>
          <Button type="primary" formType="submit">提交</Button>
        </View>
      </Form>
    </View>
  )
})
export default Detail;