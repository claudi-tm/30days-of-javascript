const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function isThis(product) {
    return product === product;
}

function rateProduct(user, rate, product) {
    let index;
    if (products.includes(product) && users.includes(user)) {
        for (let p of products){
            let rating_details = {
                userId: user._id,
                rate: rate
            }
            if (p === product) product.ratings.push(rating_details); 
        }
    }
}

function averageRating(product){
    let sum = 0;
    let quant_of_ratings;
    if (products.includes(product)){
        quant_of_ratings = product.ratings.length;
        console.log(quant_of_ratings);
        for (let rating of product.ratings){
            console.log("sum: " + rating.rate);
            sum += rating.rate;
        } 
    }
    console.log(sum);
    return sum / quant_of_ratings;
}

function likeProduct(user, product){
    if (users.includes(user), products.includes(product)){
        if (product.likes.includes(user._id)) {
            product.likes.pop();
            console.log(product.likes);
        } else {
            product.likes.push(user._id);
            console.log(product.likes);
        }
    }
}


rateProduct(users[0], 10, products[1]);

console.log(averageRating(products[0]))

likeProduct(users[2], products[1]);