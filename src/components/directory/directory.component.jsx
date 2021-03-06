import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Cochin',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-g98DMbHaCMM2xRN_xVwt-z_9MnSvhpCRA&usqp=CAU',
          id:1,
         
        },
        {
          title: 'Hyderabad',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9ErwJue3Q_ykfUUmy2q4-6XfJ6CDnnmF-Q&usqp=CAU',
          id:2,
          linkUrl: 'hyderabad'
        },
        {
          title: 'Bangalore',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDrW-njBBYX7KG4T-enf1qGHHo1nRaqWwng&usqp=CAU',
          id:3,
          linkUrl: 'bangalore'
        },
        
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
