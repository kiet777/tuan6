import React from 'react'
import { Link } from 'react-router-dom'
import prd1 from '../../assets/imgs/product1.jpg' 
import prd2 from '../../assets/imgs/product2.jpg' 

export default function Products({handleAddToCart}) {
  const products = [
    {
      id: 1,
      productName: 'Đồng hồ Edox Chronorally',
      productImg: prd1, 
      price: 74970000,
      description:
        'Đồng hồ Edox Chronorally 01129-TBUCBR-BUBR mang đến một thiết kế đầy tinh tế với những đường nét trên mặt số được khắc họa chi tiết và tỉ mỉ. Chiếc đồng hồ Edox này sẽ là sự lựa chọn tuyệt vời dành cho các bạn nam yêu thích phong cách vừa cổ điển vừa mạnh mẽ và sang trọng.'
    },
    {
      id: 2,
      productName: 'Đồng hồ FREDERIQUE CONSTANT',
      productImg: prd2, 
      price: 55913000,
      description:
        'Thiết kế nam tính, tạo nên phong thái đĩnh đạc cho quý ông đến từ hãng đồng hồ Frederique Constant ra đời tại Thụy Sĩ.'
    },
    {
      id: 3,
      productName: 'Đồng hồ Edox CO-1',
      productImg: prd1, 
      price: 32130000,
      description:
        'Đồng hồ Edox CO-1 45 mm Nam 10242-TINRCA-BRDR là một lựa chọn hoàn hảo cho những người đàn ông yêu thích sự mạnh mẽ và cá tính, khi sở hữu một thiết kế đậm chất thể thao và đầy mạnh mẽ.'
    },
    {
      id: 4,
      productName: 'Đồng hồ Orient Mako Solar',
      productImg: prd2, 
      price: 7005000,
      description:
        'Đồng hồ Orient Mako Solar 42.8 mm Nam RA-TX0201L10B thuộc thương hiệu Orient của Nhật Bản.'
    }
  ];

  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold text-center mb-5'>Danh sách đồng hồ</h2>
      <div className='grid grid-cols-4 gap-5'>
        {products.map((product) => {
          return (
            <div key={product.id} className='bg-white shadow-md p-4 rounded-lg'>
              <img
                src={product.productImg}
                alt={product.productName}
                className='w-80 h-80 object-cover rounded-tl-lg'
              />
              <h3 className='text-lg font-semibold mt-5'>{product.productName}</h3>
              <p className='text-red-400 font-medium text-lg'>
                Giá: {product.price.toLocaleString()} VNĐ
              </p>
              <Link
                to={`/product-detail/${product.id}`}
                state={{ product }}
                className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'
              >
                Chi tiết sản phẩm
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(product);
                }}
                className='w-full block bg-green-600 text-white py-2 rounded-lg'
              >
                Thêm sản phẩm
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
