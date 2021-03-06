import React from 'react'
import { Skeleton, Comment, Tooltip, List, Avatar, Icon, Input, Form, Button } from 'antd'
import { WhiteSpace, Flex } from 'antd-mobile'
import moment from 'moment'
import Style from './index.module.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: window.iconurl,
})
const dataComment = [
  {
    actions: [<div key='comment-list-reply-to-0' style={{ textAlign: 'left' }}>Reply to</div>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<div key='comment-list-reply-to-0' style={{ textAlign: 'left' }}>Reply to</div>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
]

const { TextArea } = Input

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout='horizontal'
    renderItem={props => <Comment {...props} />}
  />
)

class IndexMx extends React.Component {
  state={
    data: {
      title: '问题一',
      rightContent: '什么是问题？',
      content: '“问题”（problem）这个词是由两个希腊词组成的： “pro”的意思是“向前”，“ballein”的意思是“投掷”。字面意思，就是“被向前投掷的东西“，理解为现实（是什么）和理想（应该是什么）之间的相差的结果，而且需要现在或将来采取行动。',
      auth: '问题发布人： songshao',
      time: '2020-9-18 17:25:02'
    },
    comments: [],
    submitting: false,
    value: 'Please enter your thoughts!'
  }

  componentDidMount() {
    console.log('this.props', this.props)
    if (this.props.selectData) {
      this.zetState('data', this.props.selectData)
    }
  }
zetState = (index, val) => {
  this.setState({
    [index]: val
  })
}
  onCardClick = val => {
    console.log('点击事件', val)
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return
    }

    this.setState({
      submitting: true,
    })

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      })
    }, 1000)
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  };
  render() {
    const { data, comments, submitting, value } = this.state

    const Editor = ({ onChange, onSubmit, submitting, value }) => (
      <div>
        <Form.Item>
          <Input />
          <TextArea rows={4} onBlur={onChange} defaultValue={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' loading={submitting} onClick={onSubmit} type='primary'>
            Add Comment
          </Button>
        </Form.Item>
      </div>
    )

    const Content = (
      <div>
        <List style={{ textAlign: 'left', fontSize: 16, borderBottom: '1px solid #e8e8e8', height: '40px', lineHeight: '40px' }}>
          <IconFont type='icon-RectangleCopy7' style={{ fontSize: 18, color: 'red' }} />
          {data.title}
          {' '}
:
          {' '}
          {data.rightContent}
        </List>
        <WhiteSpace />
        <div style={{ fontSize: 14 }}>
          <Flex>
            <Flex.Item>
              <List style={{ textAlign: 'left', fontSize: 12, height: '25px', lineHeight: '25px' }}>
                <IconFont type='icon-RectangleCopy4' style={{ fontSize: 12 }} />
                {data.auth}
              </List>
            </Flex.Item>
            <Flex.Item>
              <List style={{ textAlign: 'right', fontSize: 12, height: '25px', lineHeight: '25px' }}>
                <IconFont type='icon-ios-shijian' style={{ fontSize: 12 }} />
                {data.time}
              </List>
            </Flex.Item>
          </Flex>

          {data.content}
        </div>
      </div>
    )

    const ConmentList = (
      <List
        className='comment-list'
        header={(
          <div style={{ textAlign: 'left' }}>
            {dataComment.length}
            {' '}
replies
          </div>
        )}
        itemLayout='horizontal'
        dataSource={dataComment}
        renderItem={item => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            >
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </Comment>
          </li>
        )}
      />
    )

    return (
      <div className={Style.indexMx} style={{ height: '100%', overflowY: 'scroll' }}>
        {Content || <Skeleton active /> }
        {ConmentList}
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={(
            <Avatar
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
              alt='Han Solo'
            />
          )}
          content={(
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          )}
        />
      </div>
    )
  }
}

export default IndexMx
