URLSearchParams

Form Data、Request Payload、Query String Parameters





```javascript
// 通过 response.json()  得到数据
const response = await fetch(state.task_result_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task_id: state.task_id,
      curr_step: state.curr_step,
      content: state.question,
    }),
  })

  if (!response.ok) throw response.statusText

  let responseJson: responseJson = await response.json()
  const { code, Data, msg } = responseJson
```

