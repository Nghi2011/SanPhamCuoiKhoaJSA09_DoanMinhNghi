const selectPictureType = document.getElementById("pictureTypeSelect")
const buttonSubmit = document.getElementById("btnSubmit")
const APOD_Form_Request = document.getElementById("formGroup")
const Mars_Rover_Photos_Form_Request =document.getElementById("formGroup2")
const getStartDate = document.getElementById("chooseStartDate")
const getEndDate= document.getElementById("chooseEndDate")
const buttonSubmit2 = document.getElementById("btnSubmit2")
function analyseData(data){
    console.log(data)
    data.photos.forEach(function(getData){
        const htmlCodeContainer = `<div class="card" style="width: 18rem;">
    <img src="${getData.img_src}" class="card-img-top" alt="...">
    <div class="card-body">
      <h2 id="NASA_Rover_Photo_Id">ID của bức ảnh: ${getData.id}</h2>
      <p class="card-text text-info-emphasis">Ngày Trái Đất: ${getData.earth_date}</p>
      <p class="card-text text-info-emphasis">Thông tin về rover:</p>
      <ul class="list-group">
        <li class="list-group-item">Tên của rover: ${getData.rover.name}</li>
        <li class="list-group-item">Tên của camera: ${getData.camera.name}</li>
        <li class="list-group-item">Ngày phóng rover: ${getData.rover.launch_date}</li>
        <li class="list-group-item">Ngày hạ rover: ${getData.rover.landing_date}</li>
        <li class="list-group-item">Tình trạng hiện tại: ${getData.rover.status}</li>
      </ul>
    </div>`
    NASA_List_Of_Rover_Details.innerHTML+= htmlCodeContainer
    })
}
let NASA_List_Of_Rover_Details = document.getElementById("NASA_Rover_List_Of_Details")
let API_URL ="https://api.nasa.gov/mars-photos/api/v1/rovers/"
const roverSelect = document.getElementById("roverSelect")
const buttonSubmit3 = document.getElementById("btnSubmit3")
const queryGetForm = document.getElementById("queryGetForm")
let API_Data_Save_Times = 0
let space_Picture_Library_Respond = document.getElementById("space_Picture_Library_Respond")
console.log(space_Picture_Library_Respond)
function returnAPOD_PictureDate(APOD_Picture_Date){
    console.log(APOD_Picture_Date)
    // let newAPOD_Picture_Information =JSON.parse(APOD_Picture_Information)Information
    // let APOD_Picture_Information_New =JSON.parse(APOD_Picture_Information)InformationnewAPOD_Picture_Information
    localStorage.setItem("APOD_Picture_Information",JSON.stringify(APOD_Picture_Date))
    location.href="space_Picture_Library_ViewResult.html"
}
function APIDataProcess(data){
    
    localStorage.setItem("NASA_APOD_DataSave",JSON.stringify(data))
    var NASA_DataSave = JSON.parse(localStorage.getItem("NASA_APOD_DataSave"))
    // console.log(NASA_DataSave)
    // console.log(JSON.stringify(NASA_DataSave))
    NASA_DataSave.forEach(function(APOD_Picture){
        if (APOD_Picture.media_type === "image"){
            
            // let APOD_Picture_Date =String(APOD_Picture.date)
            // console.log(typeof APOD_Picture_Date)[0]${}<button class="btn btn-success " onclick="returnAPOD_PictureDate()console.log(JSON.stringify(APOD_Picture))>Xem chi tiết</button>"https://api.nasa.gov/planetary/apod?api_key=Fz9A7djeGb1keklSN4qpNUgEIGyvzzk4hNh3kOdq&date=${APOD_Picture.date}"
            const NASA_Image_Card_ForImage =`<div class="card" style="width: 18rem;">
                <img src="${APOD_Picture.hdurl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text" id="pictureTitle">Tiêu đề: ${APOD_Picture.title}</p>
                    <p class="card-text" id="pictureDate">Ngày: ${APOD_Picture.date}</p>
                    <p class="card-text" id="pictureMediaType">Phương thức: ${APOD_Picture.media_type}</p>
                    <p class="card-text" id="author_Information">Tác giả: ${APOD_Picture.copyright}</p>
                </div>`
                    space_Picture_Library_Respond.innerHTML +=NASA_Image_Card_ForImage
        }
        
    })   
}
let API_Queries_Units_Array =["&start_date=","&end_date="]
buttonSubmit.addEventListener("click",function(){
    if (selectPictureType.value ==="..."){
        alert("Vui lòng chọn loại hình ảnh mà bạn muốn tìm!")
    }
    else{
        // const buttonId ="SubmitButton"// letAPODAPODAPODfA_OreturnDateOfA_APOD_PictureAPOD_Picture.dateAPOD_Picture.datelet test = 1${}_DateDate.dateString()DateDate"
        if(selectPictureType.value ==="APOD_Pictures"){
            if (APOD_Form_Request.classList.contains("d-none")){
                APOD_Form_Request.classList.remove("d-none")
            }
        }
        if (selectPictureType.value ==="Mars_Rovers_Photos"){
            if (Mars_Rover_Photos_Form_Request.classList.contains("d-none")){
                Mars_Rover_Photos_Form_Request.classList.remove("d-none")
            }
        }
    }
})
const dateSubmit = document.getElementById("dateSubmit")
dateSubmit.addEventListener("click",function(){
    if(getStartDate.value ==="" || getEndDate.value===""){
        alert("Vui lòng chọn đầy đủ ngày bắt đầu và ngày kết thúc")
    }
    else{
        // if (da)
        let startDate =API_Queries_Units_Array[0]+getStartDate.value
        let endDate = API_Queries_Units_Array[1]+getEndDate.value
        console.log(startDate,endDate)
        let API_URL_With_Queries ="https://api.nasa.gov/planetary/apod?api_key=Fz9A7djeGb1keklSN4qpNUgEIGyvzzk4hNh3kOdq"+startDate+endDate
        console.log(API_URL_With_Queries)
        fetch(API_URL_With_Queries+startDate)
        .then(response =>response.json())
        .then(data => APIDataProcess(data))
        .catch(error =>console.error("Lỗi khi fetch API!",error))
        API_Data_Save_Times ++
        console.log(true)
        console.log(API_Data_Save_Times)
        
        
    }
})
buttonSubmit2.addEventListener("click",function(){
    if (roverSelect.value === "..."){
        alert("Vui lòng chọn một rover thích hợp!")
    }
    else {
        
        if (queryGetForm.classList.contains("d-none")){
            queryGetForm.classList.remove("d-none")
        }
    }
})
 const roverCameraSelect= document.getElementById("roverCameraSelect")
    const chooseRange = document.getElementById("numberOfPicture")
    const showRange = document.getElementById("showRange")
    chooseRange.addEventListener("click",function(){
      showRange.innerText = chooseRange.value +" Bức ảnh"
    })
    const button_Submit3 = document.getElementById("btnSubmit3")
    console.log(button_Submit3)
    button_Submit3.addEventListener("click",function(){
        if (roverCameraSelect.value ==="..."|| chooseRange.value ==="..."){
        alert("Hãy chọn đầy đủ thông tin để có thể tìm kiếm hình ảnh!")
      }
      else {
        var newAPI_URL =API_URL+roverSelect.value+"/photos"
        API_URL = newAPI_URL
        console.log(API_URL)
        if (roverCameraSelect.value === "all"){
            API_URL+="?sol="+chooseRange.value+"&api_key=Fz9A7djeGb1keklSN4qpNUgEIGyvzzk4hNh3kOdq"
        }
        else {
            API_URL+="?sol="+chooseRange.value+"&camera="+roverCameraSelect.value+"&api_key=Fz9A7djeGb1keklSN4qpNUgEIGyvzzk4hNh3kOdq"
        }
        // "
        console.log(API_URL)
        fetch(API_URL)
        .then(response => response.json())
        .then(data => analyseData(data))
        .catch(error => console.error("Lỗi khi fetch API!",error))
        API_URL ="https://api.nasa.gov/mars-photos/api/v1/rovers/"
        // API_URLconst?<h2 id="NASA_Rover_Sol">Sol: ${getData.sol}</h2>.rover
      }  
    })
    