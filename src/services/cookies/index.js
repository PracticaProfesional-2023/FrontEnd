import Cookies from 'js-cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: (key) => Cookies.get(key),
    set: (key, value) => Cookies.set(key, value, {
        expires: 7
    }),
    delete: (key) => Cookies.remove(key)
}