

const requestURl = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURl)
xhr.onload = () => {
    console.log(xhr.response)
}
xhr.send()
