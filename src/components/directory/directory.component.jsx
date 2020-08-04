import React from 'react';
import {DirectoryContainer} from './directory.styles'
import MenuItem from '../menu-item/menu-items.component'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect'

const Directory = ({sections}) => (
  <DirectoryContainer>
    {sections.map(({id , ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
    ))}
  </DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
