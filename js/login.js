const login_API_URL= "https://68293c8b6075e87073a6037e.mockapi.io/Newaccount"
const text_EmailAddress = document.getElementById("txtEmail")
// // e/alertArrayif (type ===1){
// //         alertArray+=wordInsert+"\n"function alert()[]alert+ +=[alertArray.length+1]=+if (type ===2){02alertString =""|| alertArrayalertArrayalertArraylengthalertArraywordInsert+"\n"0+1+1
        
//     }
//     }
const text_PassWord = document.getElementById("txtPassWord")
const login_Button = document.getElementById("btnSubmit")
let listOfUser =[]
const alphabet_Array = ["a","b","c","d","e","f","g","h","y","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"]
const number_Array =[1,2,3,4,5,6,7,8,9,"0"]
let alertArray=["None"]
let alertString = ""
let alert_Times_Count =0
let id_Array =["Test"]
function saveAPIData(data){
    listOfUser = data
    console.log(listOfUser)
}
fetch(login_API_URL)
.then(response => response.json())
.then(data =>saveAPIData(data))
.catch(error => console.error("Lỗi khi fetch API!",error))
function alertShowingList_Process(type,wordInsert,id){
    console.log("alertArray",alertArray,"alertString",alertString)
    console.log("New respond!"),id_Array
    // console.log(id_Array)
    // console.log(" id array",id_Array, id_Array[0],id_Array[1])_From
    console.log("alertArray",alertArray,"alertString",alertString)
    if (type === "ReturnStandard"){
        console.log(true)
        
        alertArray =[]
        console.log(alertArray,alertString)
    }
    if (type ===1){
        alert("Vui lòng điền đầy đủ thông tin cá nhân của bạn")
        return false
    }
    if (type ===2){
        alertString = ""
        console.log(alertArray,alertString)
        console.log("removeElement",alertArray,id_Array,alertString)
        console.log("Type",type)
        if( alertArray.length ==0){
            alertArray[0]=wordInsert+"\n"
            }
            else{
                alertArray[alertArray.length]= wordInsert+"\n"
            }
            console.log(alertArray)
            alertArray.forEach(function(alert){
                alertString+=alert
            })
    }
    
    if (type === 3){
        console.log("checked!")
        return alertString
    }
    
    console.log(alertString)
}
// console.log(alertShowingList_Process(0,"test"))11
// alertShowingList_Process(0,"test")2
// alertShowingList_Process(0,"test1")  && wordInsert+"\n"
// alertShowingList_Process(0,"test2")
// alert(alertShowingList_Process(2))
// if(id_Array.length ==0){
//             console.log("Array length",id_Array.length)
//                 id_Array[0]= id
//             }
//             else{
//                 console.log("Array length",id_Array.length)
//                 id_Array[id_Array.length]= id
//             }
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
function emailAddressProcess(email_Address,alert_Count){
    
}
function login_Process(){
    alertShowingList_Process("ReturnStandard")
    let alertCount = 0
    let txtEmailAddress_Value = text_EmailAddress.value
    let txtpassWord_Value =text_PassWord.value
    let email_At_Symbol_Existence_Count = 0
    function email_Symbol_Count(email,symbol){
        email_At_Symbol_Existence_Count =0
        console.log("Test")
        for (let index = 0; index < email.length; index++){
            if (email[index] === symbol){
                email_At_Symbol_Existence_Count ++
                console.log(email_At_Symbol_Existence_Count)
                // if(symbol ="@"){,1,ralertCount =0
                    
                // }
            }
        }
        return email_At_Symbol_Existence_Count
    }
    if (txtEmailAddress_Value ==="" || txtpassWord_Value ===""){
        alertShowingList_Process(1)
    }
    else{
        if (txtEmailAddress_Value.indexOf("@")=== -1 ||  email_Symbol_Count(txtEmailAddress_Value,"@") >1){
                // alertShow(2,"địa chỉ Email của bạn",2)//let email_At_Symbol_Existence_Count = 0let emailAddress_Value = txtEmailAddress.value// txtvtxtemailAddress_ValueemailAddress_Valueetext_EmailAddressletemailAddressProcess(txtEmailAddress_Value,alertCount) === true
                // let passWord_Value = txtPassWord.valuepassWord_ValuepassWord_ValuepassWord_ValuepassWord_Valuerlet alertCount = 0_alertCountalertCountalertCountemail_Addressemail_AddressalertCountemailalert_Count
                console.log(1)
                alertShowingList_Process(2,"Vui lòng định dạng đúng cho địa chỉ Email của bạn! 1","EmailAddress")
                alertCount ++
            }
            else{
                
                    var invalid_Respond_Count =0
                let email_Split_With_At_Symbol = txtEmailAddress_Value.split("@")
                    if (email_Split_With_At_Symbol[0]===""){
                        console.log(2)
                        // alertShowingList_Process(2,"Vui lòng định dạng đúng cho địa chỉ Email của bạn! 2","EmailAddress")
                        invalid_Respond_Count
                        alertCount ++
                    }
                    else{
                        if(txtEmailAddress_Value.indexOf(".")===-1){
                            console.log(4)
                            invalid_Respond_Count ++
                        }
                        else{
                            var emailAddress_Dot_Com = email_Split_With_At_Symbol[1].split(".")
                                if (emailAddress_Dot_Com[1] !== "com"){
                                    console.log(5)
                                    invalid_Respond_Count ++
                                }
                            }
                        }
                    
                    if ( invalid_Respond_Count >0){
                        console.log("invalid_Respond_Count",invalid_Respond_Count)
                        alertShowingList_Process(2,"Vui lòng định dạng đúng cho địa chỉ Email của bạn! 3","EmailAddress")
                        alertCount ++
                        // console.log("alertCount",alert_Count)
                    }
                
                // emailAddressProcess(txtEmailAddress_Value,alertCount)
                // txtEmailAddress_ValuetxtEmailAddress_Valuefunction emailAddressProcess (email_Address,alert_Count){}email_Addressemail_Addressalert_Count
                console.log(2,alertCount)
                // emailAddressProcess(emailAddress_Value)++
            }
        if ( txtpassWord_Value.length < 8 ){
            // alertShow(3,"nên có ít nhất 8 kí tự",3)
            alertShowingList_Process(2,"Mật khẩu nên dài ít nhất 8 kí tự","passWordCheck1")
            console.log(3)
            alertCount ++
        }
        else{
            if ((passWordProcess1(txtpassWord_Value)) == true){
                console.log(4)
                alertShowingList_Process(2,"Mật khẩu cần có một vài kí tự viết hoa!","passWordCheck2")
                alertCount++
                // alertShow(3,"",3)
            }
            if (passWordProcess2(txtpassWord_Value) == 0){
                console.log(5)
                alertShowingList_Process(2,"Mật khẩu cần có một vài kí tự chữ số!","passWordCheck3")
                alertCount ++
                // alertShow(3,"",3)
            }
            if (passWordProcess3(txtpassWord_Value) == true){
                console.log(6)
                alertShowingList_Process(2,"Mật khẩu không được có khoảng trắng!","passWordCheck4")
                alertCount ++
                // alertShow(3,"",3)
                }
            }
        console.log(alertCount)
        if (alertCount >0){
            alert(alertShowingList_Process(3))
        }
        console.log(invalid_Respond_Count)
        let validationTheForm = txtEmailAddress_Value.indexOf("@") !== -1 &&  email_Symbol_Count(txtEmailAddress_Value,"@") ===1 && invalid_Respond_Count ===0 && txtpassWord_Value.length >= 8 && passWordProcess1(txtpassWord_Value) == false && passWordProcess2(txtpassWord_Value) > 0 && passWordProcess3(txtpassWord_Value) ==false
        let formValidatingList =[txtEmailAddress_Value.indexOf("@") !== -1,email_Symbol_Count(txtEmailAddress_Value,"@") ===1,invalid_Respond_Count ===0,txtpassWord_Value.length >= 8,passWordProcess1(txtpassWord_Value) == false,passWordProcess2(txtpassWord_Value) > 0,passWordProcess3(txtpassWord_Value) ==false]
        console.log(formValidatingList)
        console.log(validationTheForm)
        if(validationTheForm === true){
            function login_Checking_PassWord_And_Email(){
                let trueFalseValidation = false
                listOfUser.forEach(function(user){
                console.log(user.email_Address,txtEmailAddress_Value,user.passWord,txtpassWord_Value)
                if (user.email_Address ==txtEmailAddress_Value  && user.passWord == txtpassWord_Value){
                    // alert()
                    console.log(user.email_Address,txtEmailAddress_Value,user.passWord,txtpassWord_Value)
                    trueFalseValidation = true
                }
            })
            return trueFalseValidation
            }
            if (login_Checking_PassWord_And_Email() ===true){
                alert("Hoàn tất việc đăng nhập!")
                location.href="landing_Page.html"
            }
            else{
                alert("Địa chỉ Email hoặc mật khẩu không khớp với tài khoản đã đăng ký!")
            }
        }
    }
    
}
login_Button.addEventListener("click",login_Process)

// console.log(alertShowingList_Process(2,"Mật khẩu"))ireturn truefalse
// console.log(alertShowingList_Process(2,"Địa chỉ Email"))aalertalert()"Hoàn tất việc đăng nhập!"listOfUser_Check_apripassWN() == trueĐăng ký thành công==
// function emailAddressProcess(emailAddrress){alertCountr
    //     let email_Split_With_At_Symbol = emailAddrress.split("@") &&   && textext_EmailAddressAddresclsesks
    //     if (email_Split_With_At_Symbol[0]===""){
    //         alertShow(2,"địa chỉ Email của bạn",2)cl
    //         console.log(2)// console.log(alert_Count)
                // emailAddressProcess(txtEmailAddress_Value,alertCount)"Okay!",<invalid_Respond_Count ++// console.log(alertCount)== &&  &&  &&  && <+.<
            // console.log(alertShowingList_Process())2
    //         }
    //     else{
    //         if(emailAddrress.indexOf(".")===-1){
    //                 alertShow(2,"địa chỉ Email của bạn",2)
    //                 console.log(3)
    //                     }
    //         else{
    //             var emailAddress_Dot_Com = email_Split_With_At_Symbol[1].split(".")// if (type !==3){
    //     // alert_Times_Count ++
    // }
    
    // console.log("alert times count:",alert_Times_Count)1,2,3,4Array
    // if (alert_Times_Count >1 && type !==3){
    //     alert_Times_Count --
    //     alertArray = []!
    //     alertString= ""A>1letalertCheckTimesalertCheckTimes0var alertCheckTimes =0alertCheckTimes ++console.log(alertCheckTimes)trueidOfAlert === id"Test"return truereturn false''""true
    // }
    //                 if (emailAddress_Dot_Com[1] !== "com"){
    //                     alertShow(2,"địa chỉ Email của bạn",2)
    //                     console.log(4)
    //                 }
    //             }
    //         }// function id_Array_id_Check(){
        //     let trueFalseCheck = false
        //     id_Array.forEach(function(idOfAlert){
        //     console.log(idOfAlert,id)
        //     if (idOfAlert === id){
        //         console.log(false)
        //         trueFalseCheck = true
        //     }
        //     })
        //     return trueFalseCheck
        // }
        //  console.log(id_Array_id_Check())
        // if (id_Array_id_Check() === false){
        //     console.log(id_Array_id_Check())
        //     console.log(true)
        //     console.log(alertString)
        // }
    //     let trueFalseCheck =email_Split_With_At_Symbol[0] !=="" && emailAddrress.indexOf(".")!==-1 && emailAddress_Dot_Com[1] === "com"
    //     console.log(trueFalseCheck)
    //     return trueFalseCheck
    // }