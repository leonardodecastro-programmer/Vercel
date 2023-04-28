// Declarando variáveis 
let num = 0
let total = document.getElementById('total')
let form = document.getElementById('form')
let contador = 0
total.innerHTML = `${num} Contatos`

// Função ao enviar o formulário
form.addEventListener('submit', function(e) {
    e.preventDefault()
    let txt = document.getElementById('txt').value
    let tel = document.getElementById('tel').value
    let main = document.getElementById('main')
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')

    // Validação de Telefone
    if (tel.length < 11) {
        window.alert('Telefone inválido!')
    }

    // Contador de contato
    else {
        contador += 1

        // Adição do Contato
        if (contador <= 10) {
            td1.innerHTML = txt
            td2.innerHTML = tel
            total.innerHTML = `${num+= 1} Contatos`
            main.appendChild(tr)
            tr.appendChild(td1)
            tr.appendChild(td2)
        }
        
        // limitador de Contato
        else {
            window.alert('Atingiu o limite de contatos!')
        }
    }
})