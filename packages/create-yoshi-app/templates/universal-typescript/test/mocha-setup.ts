import axios from 'axios';
import { wixAxiosConfig } from '@wix/wix-axios-config';
import { baseURL } from './test-common';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

wixAxiosConfig(axios, { baseURL });
