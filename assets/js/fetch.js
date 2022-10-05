const cep = document.querySelector('#cep');

const showData = (result) => {
    for(const campo in result) {
        if(document.querySelector('#'+campo)) {
            document.querySelector('#' + campo).value = result[campo];
        }
    }
}

cep.addEventListener('blur', async (e) => {
    let search = cep.value.replace('-', '');

    if(search.length < 8 || Number(search.value) === NaN) {
        alert('Cep inválido');
        cep.focus();
        return
    }

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    try {
        const result = await fetch(
            `https://viacep.com.br/ws/${search}/json/`,
            options
        );
        
        const json = await result.json();
        showData(json);
    }
    catch (error) {
        showData(error.message)
    }
})