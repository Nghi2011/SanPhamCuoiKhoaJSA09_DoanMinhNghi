let getNASA_Image_Data = JSON.parse(localStorage.getItem("APOD_Picture_Information"))
let picture_DescriptionBodyPart = document.getElementById("Picture_ViewMore_BodyPart")
let picture_Description=`<img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Tiêu đề: ${getNASA_Image_Data.title}</h5>
    <p class="card-text">Tác giả: ${getNASA_Image_Data.copyright}</p>
    <p class="card-text">Đăng ngày: ${getNASA_Image_Data.date}</p>
    <p class="card-text">Kiểu phương tiện: ${getNASA_Image_Data.media_type}</p>
    <p class="card-text">Phiên bản dịch vụ: ${getNASA_Image_Data.service_version}</p>
    <div id="descriptionShow" class="border border-success bg-success-subtle">
        <p id="picture_Description" class="text-center lead">Mô tả: ${getNASA_Image_Data.explanation}<p class="fw-bold fs-3"></p></p>
    </div>
  </div>`
picture_DescriptionBodyPart.innerHTML+=picture_Description
// ""pidữ liệu