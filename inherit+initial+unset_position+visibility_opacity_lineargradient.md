## Tìm hiều về 3 thuộc tính inherit, initial, unset
```sh
- inherit: Kế thừa từ thằng cha, nếu cha không có thì nó sẽ tiếp tục đi ra bên ngoài.
- initial: Đặt giá trị của thuộc tính nào đó về giá trị mặc định của browser.
- unset: Có 2 trường hợp:
    + Nó là inherit, nếu cha có thuộc tính CSS trùng với thằng con.
    + Nó là initial, nếu cha không có thuộc tính CSS trùng với thằng con.
```
## Dropdown select with position & visibility: hidden & opacity
```sh
- absolute: Không chiếm diện tích như relative (khi dịch chuyển thì khối đó vẫn đè lên chữ, không chiếm không gian).
- relative: Chiếm diện tích (khi dịch chuyển thì chữ phía sau nó sẽ dịch chuyển theo, tạo một khoảng trống nhất định nào đó)
--HTML--
<div class="dropdown">
    <div class="dropdown-select">
        <span class="dropdown-value">
            <span>Figma </span>
            <ion-icon name="caret-down-circle-outline"></ion-icon>
        </span>
    </div>
    <div class="dropdown-list">
        <div class="dropdown-item">Figma</div>
        <div class="dropdown-item">AdobeXD</div>
        <div class="dropdown-item">Photoshop</div>
    </div>
</div>
--CSS--
.dropdown{
    width: 300px;
    position: relative;
}
.dropdown-select{
    width: 100%;
    border: 1px solid #ccc;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px;
}
.dropdown-value{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.dropdown-list{
    width: 100%;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 10;
}
.dropdown-item{
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}
.dropdown-item:last-child{
    border-bottom: none;
}
.dropdown:hover .dropdown-list{
    opacity: 1;
    visibility: visible;
}
```
## Dùng background: linear-gradient()
```sh
--KHI CHƯA DÙNG--
--HTML--
<div class="demo-bg-image">
    <div class="demo-content">
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-down-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-up-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-redo-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-undo-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-undo-circle-outline"></ion-icon>
    </div>
    <div class="demo-content">
        <ion-icon name="arrow-undo-outline"></ion-icon>
    </div>
</div>
--CSS--
.demo-bg-image{
    margin-top: 15px;
    width: 100%;
    height: 300px;
    padding: 50px 150px;
    background-color: rgb(29, 28, 28);
    color: #fff;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
}
.demo-content{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
}
```
```sh
--KHI ĐÃ DÙNG--
--HTML--
<div class="demo-linear-gradient">
    <div class="demo-lg-content">
        <div class="demo-lg-icon">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-undo-circle-outline"></ion-icon>
        </div>
        <div class="demo-lg-icon">
            <ion-icon name="arrow-undo-outline"></ion-icon>
        </div>
    </div>
</div>
--CSS--
.demo-linear-gradient{
    margin-top: 15px;
    width: 100%;
    height: 300px;
    background-color: rgb(29, 28, 28);
    color: #fff;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.demo-lg-content{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 100%;
    border: 1px solid #fff;
    position: relative;
}
.demo-lg-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 70px;
}
.demo-lg-content:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #fff;
    top: 50%;
    transform: translateY(-50%);
}
.demo-lg-content:after{
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-color: #fff; */
    --dir: to right;
    background: linear-gradient(
        var(--dir),
        transparent 25%,
        #fff calc(25% + 2px),
        transparent calc(25% + 2px),
        transparent 50%,
        #fff calc(50% + 2px),
        transparent calc(50% + 2px),
        transparent 75%,
        #fff calc(75% + 2px),
        transparent calc(75% + 2px)
    );
}
@media (max-width: 46.25em) {
    .demo-lg-content, 
    .demo-bg-image{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    .demo-lg-content:before{
        height: 100%;
        width: 1px;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }
    .demo-lg-content:after{
        --dir: to bottom;
    }
}
```
[Tiếp theo >>](./font_margin+translate_tableSticket_ShorthandCSS.md)
[<< Quay về](./flexStrecth_flexShrink_LayoutWithFlexbox.md)