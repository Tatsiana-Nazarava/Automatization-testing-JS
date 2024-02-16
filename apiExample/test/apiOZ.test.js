const axios = require('axios');
const validator = require('jsonschema');
const goodInCart = require('../data/goodInCart.v1.json');

describe(`API tests OZ.by`, function () {
    test('1 - first-get-response: status code should be 200, when add good in cart', async () => {
        const response = await axios.get('https://oz.by/goods/ajax/html_box.php', {
            params: { idGoods: '10710424', type: 'html' },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json, text/javascript, */*; q=0.01'
            }
        })
        expect(response.status).toEqual(200)
    })
    test('2 - first get-response json schema should be valid', async () => {
        const response = await axios.get('https://oz.by/goods/ajax/html_box.php', {
            params: { idGoods: '10710424', type: 'html' },
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json, text/javascript, */*; q=0.01'
            }
        })
        const result = await validator.validate(response.data, goodInCart);
        expect(result.valid).toEqual(true)
    })

    test('3 - post-response status code should be 200, when login', async () => {
        const response = await axios.post('https://auth.oz.by/index.phtml?action=loginByProvider', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/javascript, */*; q=0.01'
            },
            data: {
                cl_email: 'tatyana_kravec@inbox.ru',
                cl_psw: 'HZ63R4',
                onError: 'https%3A%2F%2Foz.by%2Fpersonal%2Flogin.phtml',
                onProceed: 'https%3A%2F%2Foz.by%2Fpersonal%2Flogin.phtml',
                onSuccess: 'https%3A%2F%2Foz.by%2F',
            }
        })
        expect(response.status).toEqual(200)
    })

    test('4 - Second-get-response: status code should be 200, when go by link of top nav menu', async () => {
        const response = await axios.get('https://oz.by/home/?gcat=menu&location=/home/&label=menu_link', {
            params: {
                gcat: 'menu',
                location: '/home/',
                label: "menu_link",
            },
            headers: {
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
            }
        })
        expect(response.status).toEqual(200)
    })
})
