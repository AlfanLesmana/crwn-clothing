import React from 'react'
import CollectionItem  from '../collections-item/collection-item.components'
import {
    CollectionsPreviewContainer,
    TitleInfo,
    PreviewContainer,
} from './collections-preview.styles.jsx'

const PreviewCollection = ({title , items})=> (
    <CollectionsPreviewContainer>
        <TitleInfo> {title.toUpperCase()} </TitleInfo>
        <PreviewContainer>
            {
                items
                .filter((item,idx) => idx <4)
                .map((item)=> (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </PreviewContainer>
    </CollectionsPreviewContainer>
)

export default PreviewCollection;