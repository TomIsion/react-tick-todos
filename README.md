# 基于 React 技术栈的 滴答清单 ⏰

## 所用技术栈

- react
- react-router

## 开发流程

### 1. 划分路由

- `/` 根目录 对应所有的清单条目
- `/detail/:id` 详细的清单条目 对应某条详细内容

### 2. 确定数据结构

```
{
  id: 编号,
  summarize: 一句话的概括,
  createTime: 创建时间,
  priorityLevel: 优先级,
  endTime: 到期时间,
  status: 当前状态,
  type: 任务类型（描述类/子任务类）,
  percent: 任务完成百分比,
  details: {
    subTask: [
      {
        id: 编号,
        summarize: 描述,
        status: 状态,
      }
    ],
    description: 描述,
    comments: [
      {
        id: 编号,
        summarize: 内容,
        createTime: 创建时间,
      }
    ]
  },
}
```

## Todos

