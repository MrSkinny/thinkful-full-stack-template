/* global describe, it */
import React from 'react';
import { mount, shallow } from 'enzyme';
import chai from 'chai';

import Header from '../../../client/js/components/Header';

const should = chai.should();

describe('<Header />', function () {
  it('should contain Header', function () {
    const wrapper = shallow(<Header />);
    wrapper.find('div').should.contain('Header');
  });
});
