import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionItemFooterContainer,
    AddButton,
    NameInfo,
    PriceInfo,
} from './collection-item.styles.jsx'

const CollectionItem = ({item, addItem}) => {

    const {name,price,imageUrl} = item

    return(
        <CollectionItemContainer>
            <ImageContainer
                className='image'
                imageUrl = {imageUrl}
            />
            <CollectionItemFooterContainer>
                <NameInfo> {name}</NameInfo>
                <PriceInfo> ${price} </PriceInfo>
            </CollectionItemFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}> Add to Cart </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);