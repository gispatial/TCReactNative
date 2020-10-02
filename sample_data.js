const { default: config } = require("./config")

let data = {
    "homeBanner": [
        {
            image: "https://tripcarte.asia/wp-content/uploads/2020/08/AFamosa-Safari-Wonderland-Day-Tour-Featured-Image.jpg",
        },
        {
            image: "https://tripcarte.asia/wp-content/uploads/2020/03/Colmar-Tropicale-And-Genting-Highland-Tour-6-300x300.jpg",
        }
    ],
    "brands": [
        {
            "name": "Top Destination",
            "image": "https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png",
            "id": 1
        },
        {
            "name": "Special Promotion",
            "image": "https://www.iconfinder.com/data/icons/advertisement-marketing/512/sale_banner-512.png",
            "id": 2
        },
        {
            "name": "Most Popular",
            "image": "https://thumbs.dreamstime.com/z/most-popular-icon-vector-100621114.jpg",
            "id": 3
        },
        {
            "name": "New Attractions",
            "image": "https://i.pinimg.com/originals/33/99/36/339936505946c5a1e2553122e0a4e4fa.jpg",
            "id": 4
        }
    ],
    "categories": [
        {
            "name": "Top",
            "image": "http://intelvue.com/demo/app-template/light/p2.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/1.png",
            "id": 1,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "http://intelvue.com/demo/app-template/light/p1.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/2.png",
            "id": 2,
            "title_position": "left"
        },
        {
            "name": "Top",
            "image": "http://intelvue.com/demo/app-template/light/p4.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/3.png",
            "id": 3,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "http://intelvue.com/demo/app-template/light/p5.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/4.png",
            "id": 4,
            "title_position": "left"
        }
    ],
    "items": [
        {
            "name": "Scenic Day Cruise - Langkawi",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/11/SCENIC-DAY-CRUISE.jpg",
                "https://tripcarte.asia/wp-content/uploads/2019/11/Sunset-Party-Cruise-2-300x300.jpg"
            ],
            "price": "RM99",
            "id": 1,
            "rating": 3,
            "brand_name": "by Avante Yacht Charters",
            "description": "<h3>Full Description</h3><p>Nice Dude</p>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "DARK MANSION 3D GLOW",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/Dark-7-600x400.jpg",
                "http://intelvue.com/demo/app-template/light/p3.png"
            ],
            "price": "RM40",
            "special_price": "RM20",
            "id": 2,
            "rating": 4,
            "brand_name": "THE DARK MUSEUM",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "THE HABITAT PENANG HILL",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/Habitat-new-1.jpg",
                "http://intelvue.com/demo/app-template/light/p5.png"
            ],
            "price": "RM99",
            "special_price": "RM160",
            "id": 3,
            "brand_name": "THE HABITAT",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>Standard Entry.</p>"
        },{
            "name": " Instant Confirmation | Available Today",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/entopia.jpg",
                "http://intelvue.com/demo/app-template/light/p6.png"
            ],
            "price": "RM99",
            "special_price": "RM60",
            "id": 4,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/small-600x276.jpg",
                "http://intelvue.com/demo/app-template/light/p2.png"
            ],
            "price": "RM99",
            "special_price": "RM60",
            "id": 5,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },{
            "name": "T-Shirt 0xx",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2020/03/Colmar-Tropicale-And-Genting-Highland-Tour-6.jpg",
                "http://intelvue.com/demo/app-template/light/p4.png"
            ],
            "price": "RM200",
            "special_price": "RM160",
            "id": 6,
            "brand_name": "My Brand",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        }
    ],
    "cart": {
        "lines": [
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                "rate": "$200",
                "linetotal": "$200",
                "id": 1,
                "qty": 1
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                "rate": "$200",
                "linetotal": "$600",
                "id": 1,
                "qty": 3
            }
        ],
        "summary": {
            "total": "$1000",
            "subtotal": "$800",
            "estimatedshipping": "$100",
            "taxtotal": "$100"
        }
    },
    "addresses": [
        {
            "name": "Demo Address 1",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": true,
            "id": 1
        },
        {
            "name": "Demo Address 2",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 2
        },
        {
            "name": "Demo Address 3",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 3
        },
        {
            "name": "Demo Address 4",
            "address": "Lorem 01, Ipsum 0900, \nTX, US",
            "selected": false,
            "id": 4
        }
    ],
    "orders": [
        {
            "id": 1,
            "order_no": "SO-10001",
            "date": "2019/12/12",
            "status": "pending",
            "statusLabel": "Pending",
            "total": "$1000",
            "summary": {
                "total": "$1000",
                "shippingtotal": "$100",
                "taxtotal": "$100",
                "subtotal": "$800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                }
            ]
        },
        {
            "id": 3,
            "order_no": "SO-10002",
            "date": "2019/12/12",
            "status": "billed",
            "statusLabel": "Billed",
            "total": "$1000",
            "summary": {
                "total": "$1000",
                "shippingtotal": "$100",
                "taxtotal": "$100",
                "subtotal": "$800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                }
            ]
        },
        {
            "id": 2,
            "order_no": "SO-10003",
            "date": "2019/12/12",
            "status": "cancelled",
            "statusLabel": "Cancelled",
            "total": "$1000",
            "summary": {
                "total": "$1000",
                "shippingtotal": "$100",
                "taxtotal": "$100",
                "subtotal": "$800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "Lorem Ipsum Item",
                    "sku": "TESTITEM",
                    "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                },
                {
                    "id": 2,
                    "name": "Lorem Ipsum Item 2",
                    "sku": "TESTITEM2",
                    "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                    "rate": "$200",
                    "qty": 2,
                    "total": "$400"
                }
            ]
        }
    ],
    "filters": {
        "colors": [
            {"id": 1, "label": "Black"},
            {"id": 2, "label": "White"},
            {"id": 3, "label": "Red"},
            {"id": 4, "label": "Maroon"},
            {"id": 5, "label": "Blue"},
            {"id": 6, "label": "Grey"},
        ],
        "sizes": [
            {"id": 1, "label": "XSm"},
            {"id": 2, "label": "Sm"},
            {"id": 3, "label": "M"},
            {"id": 4, "label": "L"},
            {"id": 5, "label": "XL"},
            {"id": 6, "label": "XXL"},
            {"id": 7, "label": "XXXL"},
            {"id": 8, "label": "XXXXL"},
        ]
    }
}

if(config.layoutMode == 'dark') {
    data = {
        "homeBanner": [
            {
                image: "http://intelvue.com/demo/app-template/dark/main-banner.jpg",
            },
            {
                image: "http://intelvue.com/demo/app-template/light/main-banner.jpg",
            }
        ],
        "brands": [
            {
                "name": "Brand 1",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-1.png",
                "id": 1
            },
            {
                "name": "Brand 2",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-2.png",
                "id": 2
            },
            {
                "name": "Brand 3",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-3.png",
                "id": 3
            },
            {
                "name": "Brand 4",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-4.png",
                "id": 4
            }
        ],
        "categories": [
            {
                "name": "Top",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-1.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-1.png",
                "id": 1
            },
            {
                "name": "Bottom",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-2.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-2.png",
                "id": 2,
                "title_position": "left"
            },
            {
                "name": "Top",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-3.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-3.png",
                "id": 3
            },
            {
                "name": "Bottom",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-4.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-4.png",
                "id": 4,
                "title_position": "left"
            }
        ],
        "items": [
            {
                "name": "T-Shirt 0xx Small Size nala box",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-1.png",
                    "http://intelvue.com/demo/app-template/dark/product-2.png"
                ],
                "price": "$200",
                "id": 1,
                "rating": 3,
                "brand_name": "My Brand",
                "description": "<h3>Full Description</h3><p>Nice Dude</p>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "http://intelvue.com/demo/app-template/dark/product-3.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 2,
                "rating": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-3.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 3,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-4.png",
                    "http://intelvue.com/demo/app-template/dark/product-5.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-5.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 5,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-3.png",
                    "http://intelvue.com/demo/app-template/dark/product-2.png"
                ],
                "price": "$200",
                "special_price": "$160",
                "id": 6,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            }
        ],
        "cart": {
            "lines": [
                {
                    "name": "Langkawi:",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-1.png",
                    "rate": "$200",
                    "linetotal": "$200",
                    "id": 1,
                    "qty": 1
                },
                {
                    "name": "Penang:",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "rate": "$200",
                    "linetotal": "$600",
                    "id": 1,
                    "qty": 3
                }
            ],
            "summary": {
                "total": "$1000",
                "subtotal": "$800",
                "estimatedshipping": "$100",
                "taxtotal": "$100"
            }
        },
        "addresses": [
            {
                "name": "Demo Address 1",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": true,
                "id": 1
            },
            {
                "name": "Demo Address 2",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 2
            },
            {
                "name": "Demo Address 3",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 3
            },
            {
                "name": "Demo Address 4",
                "address": "Lorem 01, Ipsum 0900, \nTX, US",
                "selected": false,
                "id": 4
            }
        ],
        "orders": [
            {
                "id": 1,
                "order_no": "SO-10001",
                "date": "2019/12/12",
                "status": "pending",
                "statusLabel": "Pending",
                "total": "$1000",
                "summary": {
                    "total": "$1000",
                    "shippingtotal": "$100",
                    "taxtotal": "$100",
                    "subtotal": "$800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    }
                ]
            },
            {
                "id": 3,
                "order_no": "SO-10002",
                "date": "2019/12/12",
                "status": "billed",
                "statusLabel": "Billed",
                "total": "$1000",
                "summary": {
                    "total": "$1000",
                    "shippingtotal": "$100",
                    "taxtotal": "$100",
                    "subtotal": "$800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    }
                ]
            },
            {
                "id": 2,
                "order_no": "SO-10003",
                "date": "2019/12/12",
                "status": "cancelled",
                "statusLabel": "Cancelled",
                "total": "$1000",
                "summary": {
                    "total": "$1000",
                    "shippingtotal": "$100",
                    "taxtotal": "$100",
                    "subtotal": "$800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "Lorem Ipsum Item",
                        "sku": "TESTITEM",
                        "image": "http://intelvue.com/demo/app-template/item-2.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    },
                    {
                        "id": 2,
                        "name": "Lorem Ipsum Item 2",
                        "sku": "TESTITEM2",
                        "image": "http://intelvue.com/demo/app-template/item-3.jpg",
                        "rate": "$200",
                        "qty": 2,
                        "total": "$400"
                    }
                ]
            }
        ],
        "filters": {
            "colors": [
                {"id": 1, "label": "Black"},
                {"id": 2, "label": "White"},
                {"id": 3, "label": "Red"},
                {"id": 4, "label": "Maroon"},
                {"id": 5, "label": "Blue"},
                {"id": 6, "label": "Grey"},
            ],
            "sizes": [
                {"id": 1, "label": "XSm"},
                {"id": 2, "label": "Sm"},
                {"id": 3, "label": "M"},
                {"id": 4, "label": "L"},
                {"id": 5, "label": "XL"},
                {"id": 6, "label": "XXL"},
                {"id": 7, "label": "XXXL"},
                {"id": 8, "label": "XXXXL"},
            ]
        }
    }
}

export default data;
