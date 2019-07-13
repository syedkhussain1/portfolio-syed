const prod = process.env.NODE_ENV === 'production';

module.export = {
    'process.env.BASE_URL': prod ? 'https://portfolio-syed.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://portfolio-syed.herokuapp.com',
    
}