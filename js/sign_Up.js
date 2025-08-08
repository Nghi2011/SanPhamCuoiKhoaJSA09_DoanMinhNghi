const API_URL ="https://68293c8b6075e87073a6037e.mockapi.io/Newaccount"
const txtUserName_Surname = document.getElementById("textUserName_Surname")
const txtUserName_Given_Name = document.getElementById("textUserName_Given_Name")
const txtEmailAddress = document.getElementById("textEmailAddress")
const txtPassWord = document.getElementById("textPassWord")
const txtBirthdate = document.getElementById("textBirthdate")
const genderSelect = document.getElementById("selectGender")
const sign_Up_Button = document.getElementById("sign_Up_Button")
let form_Validating_Respond = document.querySelectorAll(".validating_Response")
let alertContainer = document.getElementById("alertContainer")
let alertCount =0
let listOfUser =[]
const alphabet_Array = ["a","b","c","d","e","f","g","h","y","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"]
const number_Array =[1,2,3,4,5,6,7,8,9,"0"]
let alertShowLimit= 0
fetch(API_URL)
.then(respond => respond.json())
.then(data => listOfUser = data)
.catch(error => console.error("Lỗi khi fetch API!",error))
function process_User_Existence(userName){
    let checkUser_Existence = listOfUser.some(function(user){
        return user.userName == userName
        console.log(userName,user.userName)
    })
    console.log(checkUser_Existence)
    return checkUser_Existence
}
function validation_Processing(trueFalse_Array,form_Respond){
    let i =0
    trueFalse_Array.forEach(function(index){
        if (index === true){
            let invalid_Respond_First = document.querySelector(".feedback-"+i)
            console.log(invalid_Respond_First,form_Respond[i])
            form_Respond[i].classList.add("is-invalid","bg-danger-subtle")
            
        }
        i ++
    })
}

function alertShow(type,invalid_Part,respond_Index,trueFalse_Array){
    let invalidAlert_Fill_All_The_Form= "Vui lòng nhập lại đủ thông tin cá nhân của bạn"
    let invalidAlert_Fill_The_Form_Correctly ="Vui lòng định dạnh đúng cho "
    let invalidPassWord = "Mật khẩu "
    // const invalidAlert1 =``iP
        if (alertCount = 1 ){
            alertCount --
            alertContainer.innerText=""
            
        }
        if(type === 1) {
            console.log(form_Validating_Respond[0])
            // alertContainer.innerText+= invalidAlert_Fill_All_The_Form
            validation_Processing(trueFalse_Array,form_Validating_Respond)
            
            console.log(alertShowLimit,trueFalse_Array)
            
            
            // for (let i=1;i<5; i++){
            //     let invalid_Respond_First = document.querySelector(".feedback-"+i)0
            //     if (!invalid_Respond_First.classList.contains("invalid-feedback")){if (!invalid_Respond_First.classList.contains("invalid-feedback")){}
            //         invalid_Respond_First.classList.add("invalid-feedback")i
            //         invalid_Respond_First.classList.remove("d-none")
            //     }
            // }
            for (let i = 1;i <= 5; i++){
                let invalid_Respond_Second =document.querySelector(".feedback-"+i+"A")
                if (invalid_Respond_Second.classList.contains("invalid-feedback")){
                    invalid_Respond_Second.classList.remove("invalid-feedback")
                    invalid_Respond_Second.classList.add("d-none")
                    console.log(invalid_Respond_Second)
                    }
                    
                }
                
            }
            alertCount ++
         if(type === 2){
            // var invalid_Input_Location = document.querySelector(".respond"+respond_Index)
            // if (!invalid_Input_Location.classList.contains("is-invalid")){
            //     invalid_Input_Location.classList.add("is-invalid","bg-danger-subtle")
            // }
            // alertContainer.innerText+= invalidAlert_Fill_The_Form_Correctly+invalid_PartinvalidAlert_Fill_The_Form_Correctly+invalid_Partinvalid-feedbackSecond /invalidPassWordAll + invalid_PartinvalidAlert_Fill_The_Form_Correctly+invalid_Part
            var invalid_Input_Location = document.querySelector(".respond"+respond_Index)
            console.log(invalid_Input_Location)
            if (!invalid_Input_Location.classList.contains("is-invalid")){
                invalid_Input_Location.classList.add("is-invalid","bg-danger-subtle")
                invalid_Input_Location.classList.add("is-invalid","bg-danger-subtle")
                invalid_Input_Location.classList.add("is-invalid","bg-danger-subtle")
                invalid_Input_Location.classList.add("is-invalid","bg-danger-subtle")
            }
            // alertContainer.innerText+= invalidAlert_Fill_The_Form_Correctly+invalid_Part
            let invalid_Respond_First = document.querySelector(".feedback-"+respond_Index)
            let invalid_Respond_Second =document.querySelector(".feedback-"+respond_Index+"A")
            invalid_Respond_Second.textContent=invalidAlert_Fill_The_Form_Correctly+invalid_Part
            console.log(invalid_Respond_First)
            console.log(invalid_Respond_Second)
            if (!invalid_Respond_Second.classList.contains("invalid-feedback")){
                invalid_Respond_Second.classList.add("invalid-feedback")
                invalid_Respond_Second.classList.remove("d-none")
            }
            if (invalid_Respond_First.classList.contains("invalid-feedback")){
                invalid_Respond_First.classList.remove("invalid-feedback")
                invalid_Respond_First.classList.add("d-none")
            }
            
            
            alertCount ++
           console.log(invalid_Input_Location)
            alertShowLimit ++
            invalid_Input_Location.addEventListener("input",function(){
                console.log(invalid_Input_Location)
            })
        }
        if(type ===3){
            
            var invalid_Input_Location = document.querySelector(".respond"+respond_Index)
            if (!invalid_Input_Location.classList.contains("is-invalid")){
                invalid_Input_Location.classList.add("is-invalid","bg-danger-subtle")
            }
            
            // alertContainer.innerText+= invalidAlert_Fill_The_Form_Correctly+invalid_PartinvalidcAlert_Fill_The_Form_Correctly+invalid_Partinvalid-feedbackSecond /if (respond_Index== 1){} querySelectorAll4   
            let invalid_Respond_First = document.querySelector(".feedback-"+respond_Index)
            let invalid_Respond_Second =document.querySelector(".feedback-"+respond_Index+"A")
            invalid_Respond_Second.textContent=invalidPassWord + invalid_Part
            console.log(invalid_Respond_First)
            console.log(invalid_Respond_Second)
            if (!invalid_Respond_Second.classList.contains("invalid-feedback")){
                invalid_Respond_Second.classList.add("invalid-feedback")
                invalid_Respond_Second.classList.remove("d-none")
            }
            console.log(invalid_Input_Location)
            if (invalid_Respond_First.classList.contains("invalid-feedback")){
                invalid_Respond_First.classList.remove("invalid-feedback")
                invalid_Respond_First.classList.add("d-none")
            }
            // alertContainer.innerText+= invalidPassWord + invalid_Part
            alertCount ++
        }
        if (type === "userExisted!"){
            alert("Tài khoản đã tồn tại, xin vui lòng tạo tài khoản khác!")
            alertContainer.innerText+= "Tài khoản đã tồn tại, xin vui lòng tạo tài khoản khác!"
            alertCount ++
        }
        }
        



let processedPassWord = ""
function remove_Accents_And_Diacritcs_From_String(string){
    
    let newString = string.normalize("NFD").replace(/\p{Diacritic}/gu,"")
    processedPassWord = newString
    console.log(newString, processedPassWord)
    return newString
}
function check_Letters_In_Alphabet_Array(passWord){
    var newPassWord = ""
    remove_Accents_And_Diacritcs_From_String(passWord)
    console.log(processedPassWord)
    for(let index = 0; index <processedPassWord.length; index ++){
        alphabet_Array.forEach(function(alphabet_Letter_Index){
            if (processedPassWord[index] === alphabet_Letter_Index || processedPassWord[index] === alphabet_Letter_Index.toUpperCase()){
                newPassWord += processedPassWord[index]
            }
        })
    }
    return newPassWord
}


function username_Check(username){
    let number_Character_Count = 0
    for (let index = 0; index< username.length; index ++){
        number_Array.forEach(function(number){
            // console.log(username[index])=!== 0
            if (username[index] == number){
                console.log("test", username[index]," and",number)
                number_Character_Count ++
            }
        })
    }
    return number_Character_Count !== 0
}
    
const username = "Nghị2aadasdasdb21312321@3412412412412410"
let functionLoad= username_Check(username)

console.log(functionLoad)
function passWordProcess1(passWord){
    let sortedPassWord = check_Letters_In_Alphabet_Array(passWord)
    console.log(sortedPassWord)
    let passWord_Lower_Case_Letters_Count = 0
    for (let index = 0; index < sortedPassWord.length; index ++){
        if (sortedPassWord[index] !== sortedPassWord[index].toUpperCase()){
            
            passWord_Lower_Case_Letters_Count++
            // console.log(passWord_Lower_Case_Letters_Count)=
            }
    }
    return passWord_Lower_Case_Letters_Count === sortedPassWord.length 
}
function passWordProcess2(passWord){
    let number_Character_Count= 0
    remove_Accents_And_Diacritcs_From_String(passWord)
    console.log(processedPassWord)
    for(let index = 0; index <processedPassWord.length; index ++){
        number_Array.forEach(function(number_Index){
            if (processedPassWord[index] == number_Index ){
                console.log("Test")
                number_Character_Count ++
            }
        })
    }
    return number_Character_Count
}
function passWordProcess3(passWord){
    remove_Accents_And_Diacritcs_From_String(passWord)
    console.log(processedPassWord)
    for (let index = 0; index <processedPassWord.length; index ++){
        // console.log(processedPassWord[index])
        if (processedPassWord[index] ==" "){
            console.log(true)
            return true
        }
    }
    return false
}
function emailAddressProcess(emailAddress){
        let email_Split_With_At_Symbol = emailAddress.split("@")
        if (email_Split_With_At_Symbol[0]===""){
            alertShow(2,"địa chỉ Email của bạn",2)
            console.log(2)
            }
        else{
            if(emailAddress.indexOf(".")===-1){
                    alertShow(2,"địa chỉ Email của bạn",2)
                    console.log(3)
                        }
            else{
                var emailAddress_Dot_Com = email_Split_With_At_Symbol[1].split(".")
                    if (emailAddress_Dot_Com[1] !== "com"){
                        alertShow(2,"địa chỉ Email của bạn",2)
                        console.log(4)
                    }
                }
            }
        let trueFalseCheck =email_Split_With_At_Symbol[0] !=="" && emailAddress.indexOf(".")!==-1 && emailAddress_Dot_Com[1] === "com"
        console.log(trueFalseCheck)
        return trueFalseCheck
    }
// console.log(emailAddressProcess("nghidoandn@gmail.com"))rrr
// "Test"1hat0089check_Letters_In_Alphabet_Array=letProcessnconsole.logemailAddress_Valueemai=lAddress_Value()pppNpccsalphabetalphabet_!LetterpassWordSort=alphabet_Letter|r| processedPassWord[index] === alphabet_Letter_Index.toUpperCase()newPassWord += processedPassWord[index]
const passWord = "nhật00891"
let functionCheck = passWordProcess3(passWord)
console.log(functionCheck)
// console.log(passWordProcess(passWord))passWordSortpassWordProcess2 =00""
function form_Check_And_Save(){
    
    // sign_Up_Button.style.marginLeft= "125px"[,]ArrayArrayArray,
    let trueFalse_Array =[true, true, true]
    console.log(trueFalse_Array)
    processedPassWord =""
    let email_At_Symbol_Existence_Count = 0
    let surname_Value = txtUserName_Surname.value+" "
    let given_Name_Value = txtUserName_Given_Name.value
    let emailAddress_Value = txtEmailAddress.value
    let passWord_Value = txtPassWord.value
    let birthdate_Value = txtBirthdate.value
    let selectGender_Value = genderSelect.value
    function email_Symbol_Count(email,symbol){
        email_At_Symbol_Existence_Count =0
        console.log("Test")
        for (let index = 0; index < email.length; index++){
            if (email[index] === symbol){
                email_At_Symbol_Existence_Count ++
                console.log(email_At_Symbol_Existence_Count)
                // if(symbol ="@"){,1,
                    
                // }
            }
        }
        return email_At_Symbol_Existence_Count
    }
    if (surname_Value ==="" || given_Name_Value ==="" || emailAddress_Value==="" || passWord_Value ==="" || birthdate_Value ==="" || selectGender_Value==="..."){
        let trueFalse_Validate = [surname_Value ==="",given_Name_Value ==="",emailAddress_Value==="", passWord_Value ==="",birthdate_Value ==="",selectGender_Value==="..."]
        console.log(trueFalse_Validate)
        alertShow(1,"","",trueFalse_Validate)
    }
    else{
        if (surname_Value.length === 1 || given_Name_Value.length < 2){
            alertShow(2,"họ và tên của bạn",1)
        }
        else {
            var userName = surname_Value+given_Name_Value
            console.log(userName)
            if(userName.length >25 || username_Check(userName)== true){
                console.log(userName,username_Check(userName))
                alertShow(2,"họ và tên của bạn 1",1)
            }
            // if (userName.length <25 &&username_Check(userName)==false){username_Check(userName)== true,=||=ưlet,
            //     alertShow(4,"",1)<||><
            // }
            }
            if (emailAddress_Value.indexOf("@")=== -1 ||  email_Symbol_Count(emailAddress_Value,"@") >1){
                alertShow(2,"địa chỉ Email của bạn",2)
                console.log(1)
            }
            else{
                emailAddressProcess(emailAddress_Value)
            }
            if ( passWord_Value.length < 8 ){
                alertShow(3,"nên có ít nhất 8 kí tự",3)
            }
            else{
                if ((passWordProcess1(passWord_Value)) == true){
                    alertShow(3,"cần có một vài kí tự viết hoa",3)
                }
                if (passWordProcess2(passWord_Value) == 0){
                    alertShow(3,"cần có một vài kí tự chữ số",3)
                }
                if (passWordProcess3(passWord_Value) == true){
                    alertShow(3,"không được có khoảng trắng",3)
                }
            
            // n&& surname_Value+given_Name_ValuetrueFalse_ArrayListsurname_Value+given_Name_ValuetrueFalse_ArraytĐnhậpfalse
            }   
            let validation =surname_Value.length >1 && given_Name_Value.length >2 &&  userName.length<25 &&username_Check(userName) ==false && emailAddress_Value.indexOf("@") !== -1 && email_Symbol_Count(emailAddress_Value,"@")==1 && emailAddressProcess(emailAddress_Value) == true && passWord_Value.length >=8 && passWordProcess1(passWord_Value)==false&&passWordProcess2(passWord_Value)!=0 && passWordProcess3(passWord_Value) == false
            let validationList =[surname_Value.length >1,given_Name_Value.length>2,userName.length <25,username_Check(userName) ==false,emailAddress_Value.indexOf("@") !== -1,email_Symbol_Count(emailAddress_Value,"@")==1,emailAddressProcess(emailAddress_Value) == true,passWord_Value.length >=8,passWordProcess1(passWord_Value)==false,passWordProcess2(passWord_Value)!=0,passWordProcess3(passWord_Value) == false]
            console.log(validation)
            console.log(validationList)
            console.log(surname_Value+given_Name_Value)
            if (validation === true){
                if (process_User_Existence(userName) === false){
                    alert("Đăng ký thành công!")
                function registerProcess(){
                    const createUser ={
                        userName: userName,
                        passWord: passWord_Value,
                        email_Address:emailAddress_Value,
                    }
                    fetch(API_URL,{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(createUser)
                    }).then(respond => {
                        if(respond.ok){
                            location.href ="login.html"
                        }else{
                            alert("Quá trình đăng kí bị gián đoạn")
                        }
                    })
                    .catch(error =>{
                        console.log("Lỗi khi fetch API!",error)
                        alert("Quá trình đăng kí bị gián đoạn")
                    })
                }
                registerProcess()
                }
                else if(process_User_Existence(userName) === true){
                    alertShow("userExisted!")
                }
            }
    }
}
sign_Up_Button.addEventListener("click",form_Check_And_Save)