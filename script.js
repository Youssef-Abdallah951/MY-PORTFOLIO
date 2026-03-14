const sections = document.querySelectorAll("section")
const links = document.querySelectorAll('a[href^="#"]')
function showSection(id){
    sections.forEach(section=>{
        section.style.display = section.id === id ? "block" : "none"
    })
}
showSection("home")
links.forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        showSection(targetId)
        links.forEach(l => l.classList.remove("active"))
        links.forEach(l=>{
            if(l.getAttribute("href") === "#" + targetId){
                l.classList.add("active")
            }
        })

    })
})
const name_ = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

function validateName() {
    const result_name = document.getElementById('r_name')
    result_name.textContent = ''
    if (name_.value.length < 3) {
        result_name.textContent = "At least 3 Characters"
        result_name.style.color = "#FF6467"
        return false
    }
    return true
}

function validateEmail() {
    const result_email = document.getElementById('r_mail')
    result_email.textContent = ''
    if (email.value === '' || email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        result_email.textContent = "Email Is Required"
        result_email.style.color = "#FF6467"
        return false
    }
    return true
}

function validateSubject() {
    const result_subject = document.getElementById('r_subject')
    result_subject.textContent = ''
    if (subject.value.length < 3) {
        result_subject.textContent = "At least 3 Characters"
        result_subject.style.color = "#FF6467"
        return false
    }
    return true
}

function validateMessage() {
    const result_message = document.getElementById('r_message')
    result_message.textContent = ''
    if (message.value.length < 15) {
        result_message.textContent = "At least 15 Characters"
        result_message.style.color = "#FF6467"
        return false
    }
    return true
}

name_.addEventListener('input', validateName)
email.addEventListener('input', validateEmail)
subject.addEventListener('input', validateSubject)
message.addEventListener('input', validateMessage)

const sendBtn = document.getElementById("sendBtn")

sendBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const isNameValid = validateName()
    const isEmailValid = validateEmail()
    const isSubjectValid = validateSubject()
    const isMessageValid = validateMessage()

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    const originalText = sendBtn.innerHTML  
    sendBtn.innerHTML = "Sending...."              
    setTimeout(() => {
        sendBtn.innerHTML = originalText    
    }, 3000) 
    }
})

const backToTop = document.getElementById("back-to-top")

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})