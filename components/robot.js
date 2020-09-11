import React, { Component } from 'react'
import {Image} from 'react-native';

export default class robot extends Component {
    render() {
        const imageSource ={uri:"https://p0ct8ommu0.vcdn.com.vn/media/catalog/product/cache/95cb36d3254e0a20b33361b06e7c0ce9/magento/VECTO/RC2108/RC2108_2.jpg"

        }
        return (
            <Image source={imageSource}
                    style={ { width:200, height:200}}
            ></Image>

        )
    }
}
