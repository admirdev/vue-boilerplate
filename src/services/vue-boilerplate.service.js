import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

import Constants from '../constants/constants.js'

class VueBoilerPlateService {
    /**
     * This function returns some Lorem ipsum data
     * @returns A list of Lorem ipsum objects
     */
    getLoremIpsum() {
        return [
            {
                id: 1,
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et faucibus odio. Ut vel massa facilisis, posuere ligula in, iaculis orci.',
                image: 'https://source.unsplash.com/eMzblc6JmXM/700x400'
            },
            {
                id: 2,
                title: 'Lorem ipsum',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et faucibus odio. Ut vel massa facilisis, posuere ligula in, iaculis orci.',
                image: 'https://source.unsplash.com/IwYAo4G7Kr8/700x400'
            }
        ]
    }

    /**
     * This function returns some Lorem ipsum data from an API 
     * @returns A list of Lorem ipsum objects from an API
     */
    getLoremIpsumFromAPI() {
        return axios.get(Constants.API_URL + 'controller')
    }
}

export default new VueBoilerPlateService()
