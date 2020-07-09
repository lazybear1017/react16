import { observable, action, runInAction } from 'mobx'

import { getTable } from '@/services/api'

export default class Table {
  @observable
  data = []

  @observable
  msg = '先吃饭先吃饭xcf熊程峰'

  @action
  async getTable (params) {
    const data = await getTable(params)

    runInAction(() => {
      this.data = data
    })
  }
}
