import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionsPreview from '../collections-preview/collections-preview.components'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import {CollectionOverviewContainer} from './collection-overview.styles.jsx'

const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map(({id , ...otherCollectionProps}) => (
            <CollectionsPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);