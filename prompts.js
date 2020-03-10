module.exports = [
  {
    name: 'ui',
    type: 'list',
    message: '请选择UI库',
    choices: [
      {
        name: 'Element UI',
        value: 'element-ui'
      },
      {
        name: 'iView',
        value: 'iview'
      },
      {
        name: 'none',
        value: 'none'
      }
    ],
    default: 'none'
  }
]