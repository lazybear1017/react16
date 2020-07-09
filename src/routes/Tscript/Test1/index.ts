import React, { FC } from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { any } from 'prop-types';

function initialFn(source: any) {
  return ({
    count: 2,
    get multiplied() {
      return source.multiplier * this.count
    },
    inc() {
      this.count += 1
    },
  });
}

const Counter: FC<{ multiplier: number }> = observer(props => {
  const store = useLocalStore(
    initialFn,
    Object.assign({ a: 1 }, props)
  )

  return (
      <h1>{'xcf'}</h1>
  )
})