import React from 'react'
import './collections.overview.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionsPreview from '../collections-preview/collections-preview.components'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id , ...otherCollectionProps}) => (
            <CollectionsPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);