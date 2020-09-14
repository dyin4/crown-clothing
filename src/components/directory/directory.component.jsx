import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styes.scss';
import { connect } from 'react-redux';
import { createDirectorySections, selectDirectorySelections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory =({ sections }) => 
          
(         <div className='directory-menu'>
          {sections.map(({ id, ...otherSectionProps}) => (
              <MenuItem key = {id} {...otherSectionProps} />
          ))}
          </div>
);

const mapSateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})
export default connect(mapSateToProps)(Directory);