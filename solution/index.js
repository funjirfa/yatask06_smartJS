module.exports = class {
  *[Symbol.iterator]() {
    for (const item of this.items) {
      yield item
    }
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }

  constructor(data) {
    this.items = []
    if (typeof data !== 'undefined') {
      for (const value of data) {
        this.add(value)
      }     
    }
  }

  add(data) {
    if (!this.items.find((item) => item === data)) {
      this.items.push(data)
    }
    return this
  }

  get size() {
    return this.items.length
  }

  *keys() {
    for (const item of this.items) {
      yield item
    }
  }

  *values() {
    for (const item of this.items) {
      yield item
    }
  }

  *entries() {
    for (const item of this.items) {
      yield [item, item]
    }
  }

  clear() {
    this.items = []
  }

  delete(data) {
    const index = this.items.findIndex((item) => item === data)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }

  has(data) {
    return !!this.items.find((item) => item === data)
  }

  forEach(fn, data) {
    for (const item of this.items) {
      fn.bind(data)(item)
    }
  }
}
