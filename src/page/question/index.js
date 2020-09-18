import React from 'react'
import { Icon } from 'antd'
import { SearchBar } from 'antd-mobile'
import SYCardInfo from '../../component/SYCardInfo/index'

class Index extends React.Component {
  state={
    data: [
      { title: '问题一',
        rightContent: '什么是问题？',
        content: '“问题”（problem）这个词是由两个希腊词组成的： “pro”的意思是“向前”，“ballein”的意思是“投掷”。字面意思，就是“被向前投掷的东西“，理解为现实（是什么）和理想（应该是什么）之间的相差的结果，而且需要现在或将来采取行动。',
        auth: '问题发布人： songshao',
        time: '2020-9-18 17:25:02'
      },
      { title: '问题二',
        rightContent: '什么是问题？',
        content: '“问题”（problem）这个词是由两个希腊词组成的： “pro”的意思是“向前”，“ballein”的意思是“投掷”。字面意思，就是“被向前投掷的东西“，理解为现实（是什么）和理想（应该是什么）之间的相差的结果，而且需要现在或将来采取行动。',
        auth: '问题发布人： songshao',
        time: '2020-9-18 17:25:02'
      },
      { title: '问题三',
        rightContent: '什么是问题？',
        content: '“问题”（problem）这个词是由两个希腊词组成的： “pro”的意思是“向前”，“ballein”的意思是“投掷”。字面意思，就是“被向前投掷的东西“，理解为现实（是什么）和理想（应该是什么）之间的相差的结果，而且需要现在或将来采取行动。',
        auth: '问题发布人： songshao',
        time: '2020-9-18 17:25:02'
      },
      { title: '问题四',
        rightContent: '什么是问题？',
        content: '“问题”（problem）这个词是由两个希腊词组成的： “pro”的意思是“向前”，“ballein”的意思是“投掷”。字面意思，就是“被向前投掷的东西“，理解为现实（是什么）和理想（应该是什么）之间的相差的结果，而且需要现在或将来采取行动。',
        auth: '问题发布人： songshao',
        time: '2020-9-18 17:25:02'
      },
      { title: '问题五',
        rightContent: '什么是问题？',
        content: '“问题”（problem）这个词是由两个希腊词组成的： “pro”的意思是“向前”，“ballein”的意思是“投掷”。字面意思，就是“被向前投掷的东西“，理解为现实（是什么）和理想（应该是什么）之间的相差的结果，而且需要现在或将来采取行动。',
        auth: '问题发布人： songshao',
        time: '2020-9-18 17:25:02'
      }
    ]
  }

  componentDidMount() {
    // this.autoFocusInst.focus()
  }
  render() {
    const { data } = this.state
    const Content = data.map((item, index) => (
      <SYCardInfo
        key={String(index)}
        title={item.title}
        rightContent={item.rightContent}
        btnFooter
        btnFooterLeft={item.auth}
        btnFooterRight={item.time}
      >
        <div>{item.content}</div>
      </SYCardInfo>
    ))
    return (
      <div style={{ position: 'absolute', width: '100%' }}>
        <SearchBar placeholder='自动获取光标' style={{ position: 'relative' }} ref={ref => { this.autoFocusInst = ref }} />
        <div style={{ height: document.documentElement.clientHeight - 140, overflowY: 'scroll' }}>
          {Content}
        </div>

      </div>
    )
  }
}

export default Index
