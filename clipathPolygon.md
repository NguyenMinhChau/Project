## Clip-path Polygon
```sh
Cần phải xác định đúng vị trí tọa độ của các điểm cần nối trong một khối.
```
## Fallback color biến trong CSS
```css  
Ứng dụng làm drak mode của một trang web.
--HTML--
<html lang="en" class="dark">
    ...
    <body>
        <div class="boxed"></div>
    </body>
</html>
---CSS--
.boxed{
    width: 200px;
    height: 200px;
    background-color: var(---black, orange);
}
html.dark {
    ---black: black;
}
```
## Sử dụng Slick Slide
[Slick Slide >>](https://kenwheeler.github.io/slick/)
```html
- Cài evondev snippet -> html-slick-slide import thư viện JS -> Enter
- Cài evondev snippet -> html-slick-css import thư viện css -> Enter
--HTML--
<div class="slick-slider-content">
    <div class="image-slider">
        <img src="https://images.unsplash.com/photo-1639657742894-f77323974ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" class="image-item-slider">
    </div>
    <div class="image-slider">
        <img src="https://images.unsplash.com/photo-1639669047277-32640a26bdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" class="image-item-slider">
    </div>
</div>
--CSS--
.slick-slider-content{
    margin-top: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    position: relative;
    padding-bottom: 25px;
    padding: 20px;
}
.image-slider{
    width: 500px;
    height: 500px;
}
.image-slider .image-item-slider{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    padding: 0 5px;
}
/* CUSTOM CSS SLIDER SLICK */
.button-controls{
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    background-color: #fff;
    border-radius: 100px;
    cursor: pointer;
    border: none;
    outline: none;
    border: 1px solid red;
    z-index: 10;
}
.slick-prev {
    left: 0;
}
.slick-next {
    right: 0;
}

.slick-dots{
    list-style: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0;
    display: flex!important;
    justify-content: center;
    align-items: center;
}
.slick-dots li button{
    font-size: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 0 2px!important;
}
li.slick-active button{
    background-color: rgb(71, 71, 71);
}
--JS--
$('.slick-slider-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev button-controls'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next button-controls'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
    ],
});
```
## Thuộc tính transfron-origin
```sh
 - Dùng để định tâm cho phần tử (lấy tâm đó để làm mốc) -> Thường dùng cho việc xoay phần tử transfrom: rotate()
 1. transfrom-origin: top left;
 2. transfrom-origin: top right;
 3. transfrom-origin: center center;
 4. transfrom-origin: bottom left;
 5. transfrom-origin: bottom right;
 6. transfrom-origin: top center;
 7. transfrom-origin: bottom center;
 8. transfrom-origin: left center;
 9. transfrom-origin: right center;
```
[<< Quay về](./font_margin+translate_tableSticket_ShorthandCSS.md)