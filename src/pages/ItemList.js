import React, { Component } from 'react';
import axios from 'axios';
import Item from '../components/Item'
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import '../styles/ItemList.scss'


@inject("itemDataStore")
@observer
class ItemList extends Component {
    componentDidMount () {
        this.getList()
    }
    async getList() {
        const apiUrl = 'dummy-data/cats.json';

        const { data } = await axios.get(apiUrl)
        this.props.itemDataStore.setItemData(data)
    }


    render() {
        const {pathname} = this.props.location

        const list = this.props.itemDataStore.itemList.map(item => (<Item key={item._id} item={item} pathname={pathname}></Item>))


        return (
            <div className="item-list-container">
                <div>{list}</div>
            </div>
        );
    }
}

export default ItemList;