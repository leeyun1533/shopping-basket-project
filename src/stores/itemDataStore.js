import { observable, action } from 'mobx'
import { id } from 'postcss-selector-parser';

class ItemDataStore {
  @observable itemList
  @observable basketList

  constructor() {
    this.itemList = []
    this.basketList = []
  }

  @action.bound
  setItemData(data) {
    data.forEach(item => item.count=0)
    this.itemList = data
  }

  @action.bound
  addToBasketData(data) {
    const basket = this.basketList.find(item => item._id === data._id)
    if(!basket) {
        data.count = 1;
        this.basketList.push(data)
    } else {
        basket.count++;
    }
  }

  @action.bound
  removeBasketData(id) {
    const itemtoTake = this.basketList.find(item => item._id === id)
    itemtoTake.count--;
    if(itemtoTake.count === 0) {
        this.basketList.remove(itemtoTake)
    }
  }
  @action.bound
  removeAllBasketData(id) {
    this.basketList = []
  }
}

export default ItemDataStore