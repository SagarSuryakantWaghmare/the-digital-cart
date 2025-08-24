import React from 'react'

const NewArrivals = () => {
  const NewArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        }
      ]
    },
    {
      _id: "2",
      name: "Trendy Hoodie",
      price: 1500,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Trendy Hoodie",
        }
      ]
    },
    {
      _id: "3",
      name: "Casual T-Shirt",
      price: 800,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual T-Shirt",
        }
      ]
    },
    {
      _id: "4",
      name: "Denim Jeans",
      price: 2000,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Denim Jeans",
        }
      ]
    },
    {
      _id: "5",
      name: "Sneakers",
      price: 2500,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Sneakers",
        }
      ]
    },
    {
      _id: "6",
      name: "Formal Shirt",
      price: 1300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Formal Shirt",
        }
      ]
    },
    {
      _id: "7",
      name: "Leather Belt",
      price: 600,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Leather Belt",
        }
      ]
    }
  ]

  return (
    <section>
        <div className='container mx-auto text-center mb10 relative '>
          <h2 className="text3xl font-bold mb-4">
            Explore New Arrivals
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover
          </p>
        </div>
    </section>
  )
}

export default NewArrivals
