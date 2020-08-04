import React from 'react'
import ColletionItem from '../../components/collections-item/collection-item.components';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';
import {
    CollectionContainer,
    CollectionTitle,
    ItemsContainer,
} from './collection.styles'

const CollectionPage = ({collection}) =>{ 
    const {title,items} = collection;
    console.log(collection);
    return(
        <CollectionContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <ItemsContainer>
            {
                items.map(item => (
                    <ColletionItem key={item.id} item={item}/>
                    )
                )
            }
            </ItemsContainer>
        </CollectionContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) 
});

export default connect(mapStateToProps)(CollectionPage);